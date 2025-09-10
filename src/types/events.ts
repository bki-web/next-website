import { Cover } from "./articles";

export type Event = {
  documentId: string;
  title: string;
  description: string;
  startDate: string;
  cover: Cover;
  location: string;
  publishedAt: string;
  endDate?: string
  blocks: [{
    body: string
  }]
};
