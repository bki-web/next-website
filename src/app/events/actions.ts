import { Event } from "@/types/events";
import { NewsStrapi } from "@/types/news";
import { StrapiResponse } from "@/types/strapi";
import { STRAPI_URL } from "@/utils/strapi";

export const fetchEvents = async (page: number, pageSize: number) => {
  const response = await fetch(
    STRAPI_URL +
      `/events?populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=publishedAt:desc`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  // Return the entire JSON object, which includes 'data' and 'meta'
  return (await response.json()) as StrapiResponse<Event>;
};

export const fetchEventDetail = async (id: string) => {
  const response = await fetch(`${STRAPI_URL}/events/${id}?populate=*`);

  if (!response.ok) {
    throw new Error(`Failed to fetch article with ID ${id}`);
  }

  return (await response.json()) as { data: Event };
};
