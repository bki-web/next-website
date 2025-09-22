// app/login/actions.ts
"use server";

import { trpc } from "@/trpc/server";
import { redirect } from "next/navigation";
import { ZodError } from "zod";
import { cookies } from 'next/headers';

// Define the shape of the state object that will be returned to the form
export interface LoginState {
  message: string | null;
  success: boolean;
  from?: string | null;
}

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    // We can reuse the Zod schema from our tRPC router for validation
    // This is just an example; you would import your actual input schema
    // loginInputSchema.parse({ email, password });

    // Call the tRPC login mutation directly on the server
    // await caller.auth.login({ email, password });
     const { token } = await trpc.auth.login({ email, password });
     const cookieStore = await cookies()
     cookieStore.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'strict',
        maxAge: 60 * 15, // 15 minutes
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, message: "Failed to login" };
    }
    // The tRPC procedure will throw an error on failed login
    console.error("Login failed:", error);
    return { success: false, message: "Invalid email or password." };
  }

  // On successful login, the tRPC mutation sets the cookie.
  // Now, we redirect the user to the dashboard.
  redirect(prevState.from || "/");
}
