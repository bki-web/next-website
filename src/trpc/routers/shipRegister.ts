import { Prisma } from "@prisma/client";
import { baseProcedure, createTRPCRouter } from "../init";
import z from "zod";
import { ShipRegister } from "@/types/shipRegisterResult";

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
          SELECT *
          FROM (
              SELECT
                  ROW_NUMBER() OVER (ORDER BY a.noreg) AS RowNum,
                  a.noreg,
                  a.noimo,
                  a.nmkpl,
                  a.dual,
                  a.doubleclass,
                  a.stat,
                  a.status_compliance,
                  a.mat,
                  a.kojen,
                  a.notl1,
                  a.notl2,
                  a.notl3,
                  a.notl4,
                  a.notl5,
                  a.notl6,
                  a.notl7,
                  a.notl8,
                  a.bers,
                  a.cool,
                  a.coverage,
                  a.exkpl,
                  a.notm1,
                  a.notm2,
                  a.notm3,
                  a.notm4,
                  a.notm5,
                  a.notm6,
                  a.edual,
                  a.bang,
                  a.tgkls,
                  a.blkls,
                  a.thkls,
                  a.call,
                  a.iacs,
                  k.abre,
                  b.jenis,
                  c.kota,
                  d.flag,
                  b.tyshp,
                  e.tgmkl,
                  e.blmkl,
                  e.thmkl,
                  e.stpen,
                  e.pbkk,
                  e.thnk
              FROM
                  MFREG01 AS a
              LEFT JOIN
                  (SELECT TOP 1 m.noreg, m.konot
                  FROM mfnotasi m
                  ORDER BY m.no_urut ASC) AS m
                  ON a.noreg = m.noreg
              LEFT JOIN mfknot k ON m.konot = k.konot
              LEFT JOIN mfjnkpl b ON a.kojen = b.kojen
              LEFT JOIN tbl_kota c ON a.kokot = c.kokot
              LEFT JOIN mfflag d ON a.kflag = d.kflag
              LEFT JOIN mfsurvey e ON a.noreg = e.noreg
              WHERE 1=1
              ${noreg ? Prisma.sql` AND a.noreg = ${noreg}` : Prisma.empty}
              ${noimo ? Prisma.sql` AND a.noimo = ${noimo}` : Prisma.empty}
              ${nmkpl ? Prisma.sql` AND a.nmkpl LIKE ${nmkpl}` : Prisma.empty}
              ${minGT ? Prisma.sql` AND a.notl5 >= ${minGT}` : Prisma.empty}
              ${maxGT ? Prisma.sql` AND a.notl5 <= ${maxGT}` : Prisma.empty}
          ) AS T
          WHERE T.RowNum > ${skipValue} AND T.RowNum <= ${endRow}
      `
      );

      return result as ShipRegister[];
    }),
});
