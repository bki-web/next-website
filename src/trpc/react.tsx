"use client";

import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, httpLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { PropsWithChildren, useState } from "react";
import { makeQueryClient } from "./query-client";
import type { AppRouter } from "./routers/_app";
import superjson from "superjson";

export const trpc = createTRPCReact<AppRouter>();

let clientQueryClientSingleton: QueryClient;
function getQueryClient() {
  // For server create new client
  if (typeof window === "undefined") return makeQueryClient();
  return (clientQueryClientSingleton ??= makeQueryClient());
}

export function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  if (process.env.APP_URL) return `https://${process.env.APP_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

function getUrl() {
  // need to change for deploy url
  return getBaseUrl() + "/api/trpc";
}

export function TRPCProvider(props: PropsWithChildren) {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpLink({
          transformer: superjson,
          url: getUrl(),
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: "include",
              headers: {
                ...options?.headers,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
