import z from "zod";
import {baseProcedure, createTRPCRouter} from "../init";
import {StrapiResponse} from "@/types/strapi";
import {Event} from "@/types/events";
import { STRAPI_URL } from "@/utils/strapi";

export const eventRouter = createTRPCRouter({
    getList: baseProcedure
        .input(
            z.object({
                page: z.number().min(0).optional(),
                limit: z.number().min(1).max(100).optional(),
            })
        )
        .query(async ({input}) => {
            const page = input.page || 1;
            const pageSize = input.limit || 10;
            const response = await fetch(
                STRAPI_URL +
                `/events?populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch events");
            }

            // Return the entire JSON object, which includes 'data' and 'meta'
            return (await response.json()) as StrapiResponse<Event>;
        }),
    getDetail: baseProcedure
        .input(z.object({id: z.string()}))
        .query(async ({input}) => {
            const {id} = input;
            const response = await fetch(
                `${
                    STRAPI_URL
                }/events/${id}?populate=*`
            );

            if (!response.ok) {
                throw new Error(`Failed to fetch article with ID ${id}`);
            }

            return (await response.json()) as { data: Event };
        }),
});
