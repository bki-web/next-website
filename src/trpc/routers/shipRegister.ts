import { Prisma } from "@prisma/client";
import { baseProcedure, createTRPCRouter } from "../init";
import z from "zod";
import {
  ShipRegister,
  ShipRegisterDetail,
  ShipRegisterHullData,
  ShipRegisterMachine,
  ShipRegisterOwner,
  ShipRegisterSurvey,
} from "@/types/shipRegisterResult";

export const shipRegisterRouter = createTRPCRouter({
  search: baseProcedure
    .input(
      z.object({
        nmkpl: z.string().optional(),
        noreg: z.string().optional(),
        noimo: z.string().optional(),
        minGT: z.string().optional(),
        maxGT: z.string().optional(),
        page: z.number().min(0).optional(),
        limit: z.number().min(1).max(100).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const page = input.page ? input.page - 1 : 0;
      const takeValue = input.limit || 10;
      const skipValue = page * takeValue;
      const noreg = input.noreg ? +input.noreg : undefined;
      const noimo = input.noimo ? +input.noimo : undefined;
      const nmkpl = input.nmkpl ? `%${input.nmkpl}%` : undefined;
      const minGT = input.minGT ? +input.minGT : undefined;
      const maxGT = input.maxGT ? +input.maxGT : undefined;

      // Build the WHERE clause dynamically
      const whereClause = (() => {
        const conditions: Prisma.Sql[] = [Prisma.sql`a.qscs = 'YES'`];
        if (nmkpl && nmkpl !== "%%" && nmkpl !== "%*all*%") {
          conditions.push(Prisma.sql`a.nmkpl LIKE ${nmkpl}`);
        }
        if (noimo) {
          conditions.push(Prisma.sql`a.noimo = ${noimo}`);
        }
        if (noreg) {
          conditions.push(Prisma.sql`a.noreg = ${noreg}`);
        }
        if (minGT && maxGT) {
          conditions.push(
            Prisma.sql`
            (SELECT g.GRT FROM MFREG_STAT g WHERE g.NOREGBKI = a.NOREG) BETWEEN ${minGT} AND ${maxGT}
          `
          );
        }
        return Prisma.join(conditions, " AND ");
      })();

      // Query for the paginated data
      const resultPromise = ctx.prisma.$queryRaw(
        Prisma.sql`
                    SELECT *
                    FROM (SELECT a.*,
                                 UPPER(b.NMFL1)                                              AS owner,
                                 (SELECT f.FLAG FROM MFFLAG f WHERE f.KFLAG = a.KFLAG)       AS FLAG,
                                 (SELECT g.GRT FROM MFREG_STAT g WHERE g.NOREGBKI = a.NOREG) AS GRT,
                                 (SELECT h.TYSHP FROM MFJNKPL h WHERE h.KOJEN = a.KOJEN)     AS TYSHP,
                                 ROW_NUMBER()                                                   OVER (ORDER BY a.noreg) AS rn
                          FROM mfreg01 a
                                   LEFT JOIN PERSMF b ON a.OWNA = b.KODE1
                              AND a.OWNB = b.KODE2
                              AND a.OWNC = b.KODE3
                          WHERE ${whereClause}) AS subquery
                    WHERE rn > ${skipValue}
                      AND rn <= ${skipValue + takeValue}
                `
      );

      // Query for the total count of filtered records
      const totalCountPromise = ctx.prisma.$queryRaw(
        Prisma.sql`
                    SELECT COUNT(*) as total
                    FROM mfreg01 a
                    WHERE ${whereClause}
                `
      );

      // Run both queries in parallel to improve performance
      const [result, totalCountResult] = await Promise.all([
        resultPromise,
        totalCountPromise,
      ]);

      const totalCount = (totalCountResult as { total: bigint }[])[0].total;
      const totalRecords = Number(totalCount);
      const totalPages = Math.ceil(totalRecords / takeValue);

      return {
        data: result as ShipRegister[],
        pagination: {
          totalRecords,
          pageCount: totalPages,
          pageSize: takeValue,
        },
      };
    }),
  getDetail: baseProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const noreg = input ? +input : undefined;
    const result = (await ctx.prisma.$queryRaw(
      Prisma.sql`
                    SELECT a.noreg,
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
                           e.thnk,
                           g.grt
                    FROM MFREG01 AS a
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
                             LEFT JOIN mfreg_stat g ON g.NOREGBKI = a.NOREG
                    WHERE a.noreg = ${noreg}
                `
    )) as ShipRegisterDetail[];

    if (result.length) {
      return result[0];
    }

    return null;
  }),
  getHullData: baseProcedure.input(z.string()).query(async ({ ctx, input }) => {
    await new Promise((resolve) => setTimeout(() => resolve(null), 10000));
    const noreg = input ? +input : undefined;
    const result = (await ctx.prisma.$queryRaw(
      Prisma.sql`
                    Select brt,
                           nrt,
                           dwt,
                           dspl,
                           loa,
                           lbp,
                           bmld,
                           hmld,
                           sarat,
                           lt,
                           nmgal,
                           lgal,
                           thba,
                           tgnas,
                           blnas,
                           thnas,
                           tglun,
                           bllun,
                           thlun,
                           jmuat,
                           jglad,
                           jpal,
                           upal,
                           jskpj,
                           jskml,
                           pjfd,
                           pjbd,
                           pjbrd,
                           jjhl,
                           bjhl,
                           tjhl,
                           krjhl,
                           drjhl,
                           prjhl,
                           trjhl,
                           jjar,
                           bjar,
                           tjar,
                           krjar,
                           drjar,
                           prjar,
                           trjar,
                           dtl,
                           ptl,
                           btl,
                           jml,
                           dml,
                           pml,
                           bml,
                           jdk,
                           jtm,
                           jbm,
                           albom
                    FROM mfreg024
                    WHERE noreg = ${noreg};
                `
    )) as ShipRegisterHullData[];

    if (result.length) {
      return result[0];
    }

    return null;
  }),
  getOwnerData: baseProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const noreg = input ? +input : undefined;
      const result = (await ctx.prisma.$queryRaw(
        Prisma.sql`
                    SELECT nmfl1, nmfl2, almfl1, almfl2, kotafl
                    FROM vw_register
                    WHERE noreg = ${noreg}
                `
      )) as ShipRegisterOwner[];

      if (result.length) {
        return result[0];
      }

      return null;
    }),
  getMachineData: baseProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const noreg = input ? +input : undefined;
      const result = (await ctx.prisma.$queryRaw(
        Prisma.sql`
                    SELECT jme,
                           jmprop,
                           jmb,
                           sstr,
                           rasgr,
                           jpbb,
                           tpbb,
                           kdin,
                           kcob,
                           volt,
                           arus,
                           daya,
                           jenme,
                           ckme1,
                           ckme2,
                           dia,
                           lang
                    FROM mfreg03
                    WHERE noreg = ${noreg}
                `
      )) as ShipRegisterMachine[];

      if (result.length) {
        return result[0];
      }

      return null;
    }),
  getSurveyData: baseProcedure.input(z.string()).query(async ({ input }) => {
    // return (await fetch(
    //   process.env.OLD_API_BKI_URL +
    //     "/api-cops/get_surveystatus_kapal.php?noreg=" +
    //     input
    // ).then((response) => response.json())) as ShipRegisterSurvey[];
    return [] as ShipRegisterSurvey[];
  }),
});
