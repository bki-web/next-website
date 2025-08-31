import { baseProcedure, createTRPCRouter } from "../init";

export const shipRegisterRouter = createTRPCRouter({
  search: baseProcedure.query(({ ctx }) => {
    return [];
  }),
});
