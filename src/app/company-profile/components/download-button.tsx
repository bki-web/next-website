"use client";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from 'next/link';

export default function DownloadButton(props: { className?: string, containerClassName?: string, label?: string, link: string}) {
  return (
    <div className={cn("flex justify-centerm", props.containerClassName)}>
      <Link
        href={props.link}
        download
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white rounded-lg text-white font-medium transition",
          props.className
        )}
      >
        <Download className="w-5 h-5" />
        {props.label || "Company Profile"}
      </Link>
    </div>
  );
}
