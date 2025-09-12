"use client";
import { redirect, usePathname } from "next/navigation";

export default function NotFoundInfo() {
  const path = usePathname();
  redirect(process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + path)
  return null
}