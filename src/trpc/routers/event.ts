import z from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { Article } from "@/types/articles";
import { StrapiResponse } from "@/types/strapi";
import { Event } from "@/types/events";
import * as qs from "qs";

export const eventRouter = createTRPCRouter({
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
        (process.env.STRAPI_API_URL ||
          "https://unwavering-card-a95a991f83.strapiapp.com/api") +
          `/events?populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      // Return the entire JSON object, which includes 'data' and 'meta'
      const fullResponse = (await response.json()) as StrapiResponse<Event>;

      return fullResponse;
    }),
  getDetail: baseProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const { id } = input;

      const query = qs.stringify(
        {
          populate: {
            blocks: {
              on: {
                "text.rich-text": {
                  fields: ["body"],
                },
              },
            },
          },
        },
        {
          encodeValuesOnly: true, // Optional: prettifies the URL
        }
      );
      const response = await fetch(
        `${
          process.env.STRAPI_API_URL ||
          "https://unwavering-card-a95a991f83.strapiapp.com/api"
        }/events/${id}?populate=*`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch article with ID ${id}`);
      }

      const data = (await response.json()) as { data: Event };
      return data;
    }),
});
