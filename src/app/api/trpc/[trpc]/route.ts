import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@/trpc/init";
import { appRouter } from "@/trpc/routers/_app";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: (opts) => createTRPCContext({ req: opts.req }),
    responseMeta({ ctx }) {
      if (ctx) {
        return {
          headers: ctx.resHeaders,
        };
      }
      return {};
    },
  });

export { handler as GET, handler as POST };