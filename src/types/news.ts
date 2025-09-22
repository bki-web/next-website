import { BlockType, Cover } from "./articles";

export type News = {
    id: string;
    title: string;
    content: string;
    date: string;
    img: string;
    link: string;
}

export type NewsStrapi = {
  documentId: string;
  title: string;
  description: string;
  cover: Cover;
  publishedAt: string;
  blocks: BlockType[]
};
