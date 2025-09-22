// src/trpc/init.ts

import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import prisma from "@/lib/prisma";
import { parse } from "cookie";
import { cookies } from 'next/headers'
import { JwtPayload, verifyJwt } from "@/utils/auth";

interface AppContext {
  user: JwtPayload | null;
  prisma: typeof prisma;
  resHeaders?: Headers; // Optional: only available in the API handler context
}

/**
 * Creates the tRPC context. This is now "isomorphic" and works in two scenarios:
 * 1. From an API handler (`/api/trpc/*`): `opts.req` is provided.
 * 2. From a React Server Component: `opts.req` is undefined, so we use `cookies()`.
 */
export const createTRPCContext = async (opts?: { req?: Request; resHeaders?: Headers }): Promise<AppContext> => {
  let token: string | undefined;

  if (opts?.req) {
    // API Handler context: Get cookies from the Request object
    const cookieHeader = opts.req.headers.get("cookie") ?? "";
    token = parse(cookieHeader).token;
  } else {
    // RSC context: Get cookies from `next/headers`
     const cookieStore = await cookies()
    token = cookieStore.get("token")?.value;
  }

  const user = token ? verifyJwt(token) : null;

  return {
    user,
    prisma,
    resHeaders: opts?.resHeaders,
  };
};

const t = initTRPC.context<AppContext>().create({
  transformer: superjson,
  // ... your errorFormatter remains the same
  errorFormatter: ({ shape, error }) => {
    console.error("Server-side error:", error);
    const isDatabaseError = error.code === "INTERNAL_SERVER_ERROR" || error.message.includes("Raw query failed");
    if (isDatabaseError) {
      return { ...shape, message: "Something went wrong.", data: { code: "INTERNAL_SERVER_ERROR" } };
    }
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(
  t.middleware(({ ctx, next }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({ ctx: { user: ctx.user } });
  })
);