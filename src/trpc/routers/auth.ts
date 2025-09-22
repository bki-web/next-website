import z from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { signJwt } from "@/utils/auth";
import { TRPCError } from "@trpc/server";
import * as cookie from 'cookie';

export const authRouter = createTRPCRouter({
  login: baseProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const mockUser = {
        id: "69910bac-7334-4f2d-9117-bc685b1fac00",
        email: "tsabitg23@gmail.com",
      };
      if (input.email !== mockUser.email || input.password !== "password123") {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      const token = signJwt({
        sub: mockUser.id,
        email: mockUser.email,
      });

      return { token };

    //   if (ctx.resHeaders) {
    //     ctx.resHeaders.set('Set-Cookie', cookie.serialize('token', token, {
    //       httpOnly: true,
    //       secure: process.env.NODE_ENV === 'production',
    //       path: '/',
    //       sameSite: 'strict',
    //       maxAge: 60 * 15, // 15 minutes
    //     }));
    //   }

    //   return {
    //     success: true,
    //     user: {
    //       id: mockUser.id,
    //       email: mockUser.email,
    //     },
    //   };
    }),
});
