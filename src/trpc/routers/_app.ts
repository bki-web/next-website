import { createTRPCRouter } from "../init";
import { articleRouter } from "./article";
import { newsRouter } from "./news";
import { shipRegisterRouter } from "./shipRegister";

export const appRouter = createTRPCRouter({
  shipRegister: shipRegisterRouter,
  article: articleRouter,
  news: newsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
