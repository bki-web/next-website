import { NewsStrapi } from "@/types/news";
import { StrapiResponse } from "@/types/strapi";
import { STRAPI_URL } from "@/utils/strapi";

export const fetchNews = async (page: number, pageSize: number) => {
  const response = await fetch(
    `${STRAPI_URL}/newss?populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=publishedAt:desc`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  return result as StrapiResponse<NewsStrapi>;
};

export const fetchNewsDetail = async (id: string) => {
  const response = await fetch(
    `${STRAPI_URL}/newss/${id}?populate=*`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch newss with ID ${id}`);
  }

  const data = (await response.json()) as { data: NewsStrapi };
  return data;
};
