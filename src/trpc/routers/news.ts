import z from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { Article } from "@/types/articles";
import { StrapiResponse } from "@/types/strapi";
import { NewsStrapi } from "@/types/news";

export const newsRouter = createTRPCRouter({
  getList: baseProcedure
    .input(
      z.object({
        page: z.number().min(0).optional(),
        limit: z.number().min(1).max(100).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const page = input.page || 1;
      const pageSize = input.limit || 10;
      const response = await fetch(
        process.env.STRAPI_API_URL +
          `/newss?populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch newss");
      }

      // Return the entire JSON object, which includes 'data' and 'meta'
      const fullResponse = (await response.json()) as StrapiResponse<NewsStrapi>;
      return fullResponse;
    }),
  getDetail: baseProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .query(async ({ input }) => {
      const { id } = input;
      const response = await fetch(
        `${process.env.STRAPI_API_URL}/newss/${id}?populate=cover`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch newss with ID ${id}`);
      }

      const data = (await response.json()) as { data: NewsStrapi };
      return data;
    }),
});
