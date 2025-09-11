import { Cover } from "@/types/articles";

export const getCoverUrl = (formats: Cover["formats"] | undefined): string => {
  const selectedFormat = formats
    ? formats.large || formats.medium || formats.small || formats.thumbnail
    : { url: "/our-services-bki-others.jpg" };
  
  if(selectedFormat.url.includes("http")){
    return selectedFormat.url
  }  
  return process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace("/api", "") + selectedFormat.url;
};
