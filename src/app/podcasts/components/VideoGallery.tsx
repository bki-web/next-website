"use client";

import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import Image from "next/image";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {classes} from "@/utils/string";

type VideoItem = {
    src: string;            // URL video (mp4/webm atau HLS m3u8 — lihat catatan)
    thumb: string;          // URL thumbnail/preview
    label?: string;         // teks kecil di sudut (seperti alt)
    width?: number;
    height?: number;
    type?: string;          // optional: "video/mp4", "video/webm", dll.
    poster?: string;        // optional: override poster (default pakai thumb)
};

type VideoGalleryProps = {
    videos: VideoItem[];
    columns?: 2 | 3 | 4; // default 3
    aspect?: "square" | "landscape" | "portrait" | "free"; // default landscape
    gap?: string; // tailwind gap classes, default "gap-3 md:gap-4"
};

const containerVariants: Variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.06, delayChildren: 0.05}},
};

const itemVariants: Variants = {
    hidden: {opacity: 0, y: 16, scale: 0.98},
    show: {opacity: 1, y: 0, scale: 1, transition: {type: "spring", damping: 20, stiffness: 250}},
};

export default function VideoGallery({
                                         videos,
                                         columns = 3,
                                         aspect = "landscape",
                                         gap = "gap-3 md:gap-4",
                                     }: VideoGalleryProps) {
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const colClass = useMemo(() => {
        const base = {
            2: "grid-cols-2",
            3: "grid-cols-2 md:grid-cols-3",
            4: "grid-cols-2 md:grid-cols-4",
        }[columns];
        return base ?? "grid-cols-2 md:grid-cols-3";
    }, [columns]);

    const aspectClass = useMemo(() => {
        switch (aspect) {
            case "square":
                return "aspect-square";
            case "portrait":
                return "aspect-[3/4]";
            case "free":
                return ""; // tinggi mengikuti konten
            default:
                return "aspect-[4/3]";
        }
    }, [aspect]);

    const openAt = useCallback((i: number) => {
        setIdx(i);
        setOpen(true);
    }, []);

    const next = useCallback(
        () => setIdx((i) => (i + 1) % videos.length),
        [videos.length],
    );
    const prev = useCallback(
        () => setIdx((i) => (i - 1 + videos.length) % videos.length),
        [videos.length],
    );

    // kunci scroll saat lightbox terbuka
    useEffect(() => {
        if (!open) return;
        const {overflow} = document.body.style;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = overflow;
        };
    }, [open]);

    // keyboard navigation
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
            if (e.key === "ArrowRight") {
                // pause sebelum pindah
                videoRef.current?.pause?.();
                next();
            }
            if (e.key === "ArrowLeft") {
                videoRef.current?.pause?.();
                prev();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, next, prev]);

    // pause video saat modal ditutup atau index berganti
    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            videoRef.current?.pause?.();
        };
    }, [idx, open]);

    return (
        <>
            {/* GRID */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className={`grid ${colClass} ${gap}`}
            >
                {videos.map((v, i) => (
                    <motion.button
                        type="button"
                        key={(v.thumb || v.src) + i}
                        variants={itemVariants}
                        onClick={() => openAt(i)}
                        className={classes(
                            "group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer",
                            aspectClass,
                        )}
                        whileHover={{scale: 1.02, rotate: 0.25}}
                        whileTap={{scale: 0.98}}
                    >
                        {/* thumbnail */}
                        <Image
                            src={v.thumb}
                            alt={v.label ?? `Video ${i + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover"
                            priority={i < 3}
                        />

                        {/* overlay gradient */}
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>

                        {/* ikon play di tengah */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur text-white opacity-90 group-hover:scale-110 transition-transform">
                ▶
              </span>
                        </div>

                        {/* label di sudut kiri bawah */}
                        {v.label ? (
                            <div
                                className="pointer-events-none absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                {v.label}
                            </div>
                        ) : null}
                    </motion.button>
                ))}
            </motion.div>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="lightbox"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        aria-modal
                        role="dialog"
                        onClick={() => {
                            videoRef.current?.pause?.();
                            setOpen(false);
                        }}
                    >
                        <motion.div
                            className="relative mx-auto w-full max-w-6xl"
                            initial={{scale: 0.98, y: 8, opacity: 0}}
                            animate={{
                                scale: 1,
                                y: 0,
                                opacity: 1,
                                transition: {type: "spring", damping: 24, stiffness: 240},
                            }}
                            exit={{scale: 0.98, y: 8, opacity: 0}}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl bg-black">
                                {videos[idx].src.includes("youtube.com") || videos[idx].src.includes("youtu.be") ? (
                                    <iframe
                                        key={idx}
                                        className="h-full w-full"
                                        src={videos[idx].src
                                            .replace("watch?v=", "embed/") + "?rel=0&autoplay=1"}
                                        title={videos[idx].label ?? `YouTube video ${idx + 1}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <video
                                        key={idx}
                                        ref={videoRef}
                                        className="h-full w-full object-contain"
                                        controls
                                        playsInline
                                        preload="metadata"
                                        poster={videos[idx].poster ?? videos[idx].thumb}
                                    >
                                        <source src={videos[idx].src} type={videos[idx].type ?? "video/mp4"}/>
                                        Browser Anda tidak mendukung video tag.
                                    </video>
                                )}
                            </div>

                            {/* controls */}
                            <button
                                aria-label="Tutup"
                                onClick={() => {
                                    videoRef.current?.pause?.();
                                    setOpen(false);
                                }}
                                className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                            >
                                ✕
                            </button>

                            <button
                                aria-label="Sebelumnya"
                                onClick={() => {
                                    videoRef.current?.pause?.();
                                    prev();
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                            >
                                ‹
                            </button>
                            <button
                                aria-label="Berikutnya"
                                onClick={() => {
                                    videoRef.current?.pause?.();
                                    next();
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                            >
                                ›
                            </button>

                            {/* caption */}
                            {videos[idx].label ? (
                                <div className="mt-3 text-center text-sm text-white/80">{videos[idx].label}</div>
                            ) : null}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
