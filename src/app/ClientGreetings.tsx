'use client';

import { trpc } from "@/trpc/client";

// <-- hooks can only be used in client components
export function ClientGreeting() {
  const greeting = trpc.hello.useQuery({text: "aaaaa"});
  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.greeting}</div>;
}