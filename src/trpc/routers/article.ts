import z from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { Article } from "@/types/articles";
import { StrapiResponse } from "@/types/strapi";

export const articleRouter = createTRPCRouter({
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
        (process.env.STRAPI_API_URL || "https://unwavering-card-a95a991f83.strapiapp.com/api") +
          `/articles?populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      // Return the entire JSON object, which includes 'data' and 'meta'
      const fullResponse = (await response.json()) as StrapiResponse<Article>;

      return fullResponse;
    }),
  getDetail: baseProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .query(async ({ input }) => {
      const { id } = input;
      const response = await fetch(
        `${process.env.STRAPI_API_URL || "https://unwavering-card-a95a991f83.strapiapp.com/api" }/articles/${id}?populate=cover`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch article with ID ${id}`);
      }

      const data = (await response.json()) as { data: Article };
      return data;
    }),
});
