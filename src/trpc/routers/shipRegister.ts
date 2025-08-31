import { Prisma } from "@prisma/client";
import { baseProcedure, createTRPCRouter } from "../init";
import z from "zod";
import { ShipRegister, ShipRegisterDetail } from "@/types/shipRegisterResult";

export const shipRegisterRouter = createTRPCRouter({
  search: baseProcedure
    .input(
      z.object({
        nmkpl: z.string().optional(),
        noreg: z.string().optional(),
        noimo: z.string().optional(),
        minGT: z.string().optional(),
        maxGT: z.string().optional(),
        skip: z.number().min(0).optional(),
        take: z.number().min(1).max(100).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const skipValue = input.skip || 0;
      const takeValue = input.take || 10;
      const endRow = skipValue + takeValue;
      const noreg = input.noreg ? +input.noreg : undefined;
      const noimo = input.noimo ? +input.noimo : undefined;
      const nmkpl = input.nmkpl ? `%${input.nmkpl}%` : undefined;
      const minGT = input.minGT ? +input.minGT : undefined;
      const maxGT = input.maxGT ? +input.maxGT : undefined;

      const isUsingWhere = !!(noreg || noimo || nmkpl || minGT || maxGT);

      const result = await ctx.prisma.$queryRaw(
        Prisma.sql`
           SELECT * FROM (
            SELECT
              a.*,
              UPPER(b.NMFL1) AS owner,
              (SELECT f.FLAG FROM MFFLAG f WHERE f.KFLAG = a.KFLAG) AS FLAG,
              -- (SELECT g.GRT FROM MFREG_STAT g WHERE g.NOREGBKI = a.NOREG) AS GRT,
              (SELECT h.TYSHP FROM MFJNKPL h WHERE h.KOJEN = a.KOJEN) AS TYSHP,
              ROW_NUMBER() OVER (ORDER BY a.noreg) AS rn -- Use a relevant column for ordering
            FROM
              mfreg01 a
              LEFT JOIN PERSMF b ON a.OWNA = b.KODE1
              AND a.OWNB = b.KODE2
              AND a.OWNC = b.KODE3
            WHERE
              a.qscs = 'YES'
              ${(() => {
                if (nmkpl && nmkpl !== '%%') {
                  return Prisma.sql`AND a.nmkpl LIKE ${nmkpl}`;
                }
                if (noimo) {
                  return Prisma.sql`AND a.noimo = ${noimo}`;
                }
                if (noreg) {
                  return Prisma.sql`AND a.noreg = ${noreg}`;
                }
                if (minGT && maxGT) {
                  // return Prisma.sql`AND (SELECT g.GRT FROM MFREG_STAT g WHERE g.NOREGBKI = a.NOREG) BETWEEN ${minGT} AND ${maxGT}`;
                }
                return Prisma.empty;
              })()}
          ) AS subquery
          WHERE rn > ${skipValue} AND rn <= ${skipValue + takeValue}
        `
      );

      return result as ShipRegister[];
    }),
  getDetail: baseProcedure
    .input(
      z.object({
        noreg: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const noreg = input.noreg ? +input.noreg : undefined;
      const result = await ctx.prisma.$queryRaw(
        Prisma.sql`
          SELECT
              a.noreg, a.noimo, a.nmkpl, a.dual, a.doubleclass, a.stat, a.mat, a.kojen,
              a.notl1, a.notl2, a.notl3, a.notl4, a.notl5, a.notl6, a.notl7, a.notl8,
              a.bers, a.cool, a.coverage, a.exkpl, a.notm1, a.notm2, a.notm3, a.notm4,
              a.notm5, a.notm6, a.edual, a.bang, a.tgkls, a.blkls, a.thkls, a.call,
              a.iacs, k.abre, b.jenis, c.kota, d.flag, b.tyshp, e.tgmkl, e.blmkl,
              e.thmkl, e.stpen, e.pbkk, e.thnk
          FROM
              MFREG01 AS a
          LEFT JOIN
              (SELECT TOP 1 m.noreg, m.no_urut, m.konot
              FROM mfnotasi m
              WHERE m.noreg = ${noreg}
              ORDER BY m.no_urut ASC) AS m
              ON a.noreg = m.noreg
          LEFT JOIN mfknot k ON m.konot = k.konot
          LEFT JOIN mfjnkpl b ON a.kojen = b.kojen
          LEFT JOIN tbl_kota c ON a.kokot = c.kokot
          LEFT JOIN mfflag d ON a.kflag = d.kflag
          LEFT JOIN mfsurvey e ON a.noreg = e.noreg
          WHERE a.noreg = ${noreg}
        `
      );

      return result as ShipRegisterDetail[];
    }),
});
