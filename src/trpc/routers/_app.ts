import { createTRPCRouter } from "../init";
import { articleRouter } from "./article";
import { eventRouter } from "./event";
import { newsRouter } from "./news";
import { shipRegisterRouter } from "./shipRegister";

export const appRouter = createTRPCRouter({
  shipRegister: shipRegisterRouter,
  article: articleRouter,
  event: eventRouter,
  news: newsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
