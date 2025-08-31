import { createTRPCRouter } from "../init";
import { shipRegisterRouter } from "./shipRegister";

export const appRouter = createTRPCRouter({
  shipRegister: shipRegisterRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
