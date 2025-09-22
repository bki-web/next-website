"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useActionState } from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { loginAction, LoginState } from "./actions";

// Define the shape of our form data
interface LoginFormInputs extends FieldValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-emerald-50">
      <Suspense fallback={<LoginSkeleton />}>
        <LoginCard />
      </Suspense>
    </div>
  );
}

function LoginSkeleton() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 animate-pulse">
      <div className="h-7 bg-gray-200 rounded w-40 mx-auto" />
      <div className="h-4 bg-gray-200 rounded w-64 mx-auto mt-3 mb-6" />
      <div className="space-y-5">
        <div className="h-10 bg-gray-200 rounded" />
        <div className="h-10 bg-gray-200 rounded" />
        <div className="h-10 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

function LoginCard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const initialState: LoginState = { message: null, success: false, from: searchParams.get("from") };
   const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
    >
      <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
        Welcome Back
      </h1>
      <p className="text-gray-500 text-center mt-2 mb-6">
        Please log in to your account
      </p>

      {/* Form now uses react-hook-form's handleSubmit */}
      <form action={formAction} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address.",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="email"
                type="email"
                placeholder="you@example.com"
                className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-1 text-black ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-[#0A436A] focus:border-[#0A436A]"
                }`}
              />
            )}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters.",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="password"
                type="password"
                placeholder="••••••••"
                className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-1 text-black ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-[#0A436A] focus:border-[#0A436A]"
                }`}
              />
            )}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full bg-[#0A436A] text-white py-2.5 rounded-lg font-medium hover:bg-white hover:text-[#0A436A] hover:border hover:border-[#0A436A] transition-colors"
        >
          Log In
        </button>

         {state.message && (
          <p className="text-sm text-red-600 text-center" aria-live="polite">
            {state.message}
          </p>
        )}
      </form>

      {/* Footer */}
      <div className="mt-6 flex justify-between text-sm text-gray-600">
        <a href="#" className="hover:underline">
          Forgot password?
        </a>
        <a href="#" className="hover:underline">
          Create account
        </a>
      </div>
    </motion.div>
  );
}
