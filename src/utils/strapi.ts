import { Cover } from "@/types/articles";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://cms.bki.co.id/api"

export const getCoverUrl = (formats: Cover["formats"] | undefined): string => {
  if(!formats) { 
    return  "/our-services-bki-others.jpg"
  }
  const selectedFormat = formats.large || formats.medium || formats.small || formats.thumbnail;
  
  if(selectedFormat.url.includes("http")){
    return selectedFormat.url
  }
  return STRAPI_URL?.replace("/api", "") + selectedFormat.url;
};
