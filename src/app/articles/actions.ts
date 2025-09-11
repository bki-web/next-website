import { Article } from "@/types/articles";
import { NewsStrapi } from "@/types/news";
import { StrapiResponse } from "@/types/strapi";
import { STRAPI_URL } from "@/utils/strapi";

export const fetchArticles = async (page: number, pageSize: number) => {
  const response = await fetch(
    STRAPI_URL +
      `/articles?populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=publishedAt:desc`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  // Return the entire JSON object, which includes 'data' and 'meta'
  const fullResponse = (await response.json()) as StrapiResponse<Article>;

  return fullResponse;
};

export const fetchArticleDetails = async (id: string) => {
  const response = await fetch(`${STRAPI_URL}/articles/${id}?populate=*`);

  if (!response.ok) {
    throw new Error(`Failed to fetch article with ID ${id}`);
  }

  const data = (await response.json()) as { data: Article };
  return data;
};
