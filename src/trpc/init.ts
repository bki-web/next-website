import { initTRPC } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";
import prisma from "@/lib/prisma";

export const createTRPCContext = cache(async () => {
  return {
    prisma,
  };
});

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    // Log the full error on the server for debugging
    console.error("Server-side error:", error);

    // Check if the error is a Prisma/database error.
    // The "code" property is often 'INTERNAL_SERVER_ERROR' for these types of issues.
    // You can also check for specific error messages or `instanceof` checks if needed.
    const isDatabaseError =
      error.code === "INTERNAL_SERVER_ERROR" ||
      error.message.includes("Raw query failed");

    if (isDatabaseError) {
      console.log({...shape.data}, 'test')
      // Return a sanitized, generic error to the client.
      return {
        ...shape,
        message: "Something went wrong.",
        data: {
          // ...shape.data,
          code: "INTERNAL_SERVER_ERROR",
        },
      };
    }

    // For other errors, such as Zod validation errors, return the original shape.
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
