import { Prisma } from "@prisma/client";
import { baseProcedure, createTRPCRouter } from "../init";
import z from "zod";

export const shipRegisterRouter = createTRPCRouter({
  search: baseProcedure
    .input(
      z.object({
        noreg: z.string().optional(),
        noimo: z.string().optional(),
        nmkpl: z.string().optional(),
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
      if(!input.noreg) {
        return undefined
      }
      return []
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
                  WHERE m.noreg = ${input.noreg}
                  ORDER BY m.no_urut ASC) AS m
                  ON a.noreg = m.noreg
              LEFT JOIN mfknot k ON m.konot = k.konot
              LEFT JOIN mfjnkpl b ON a.kojen = b.kojen
              LEFT JOIN tbl_kota c ON a.kokot = c.kokot
              LEFT JOIN mfflag d ON a.kflag = d.kflag
              LEFT JOIN mfsurvey e ON a.noreg = e.noreg
              WHERE a.noreg = ${input.noreg}
          ) AS T
          WHERE T.RowNum > ${skipValue} AND T.RowNum <= ${endRow}
      `);

      return result as any[];
    }),
});
