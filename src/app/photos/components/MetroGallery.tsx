"use client";

import {useCallback, useEffect, useMemo, useState} from "react";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import Tile, {TileItem} from "@/app/photos/components/Tile";

type MetroGalleryProps = {
    tiles: TileItem[];
    className?: string;
};

const containerVariants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.06, delayChildren: 0.05}},
} as const;

function isImageTile(t: TileItem): t is Extract<TileItem, { src: string }> {
    return 'src' in t;
}

export default function MetroGallery({tiles, className = ""}: MetroGalleryProps) {
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);

    // Semua tile gambar → bentuk ringan utk lightbox
    const imageTiles = useMemo(() => tiles.filter(isImageTile), [tiles]);
    const images = useMemo(
        () => imageTiles.map(({src, alt}) => ({src, alt})),
        [imageTiles]
    );

    const openAt = useCallback((i: number) => {
        setIdx(i);
        setOpen(true);
    }, []);
    const next = useCallback(() => setIdx(i => (i + 1) % Math.max(images.length, 1)), [images.length]);
    const prev = useCallback(() => setIdx(i => (i - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1)), [images.length]);

    useEffect(() => {
        if (!open) return;
        const ov = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = ov;
            window.removeEventListener("keydown", onKey);
        };
    }, [open, next, prev]);

    // Peta index dari tiles → index di images (non-image = -1)
    const imageIndexMap = useMemo(() => {
        const map: number[] = [];
        let imgCounter = 0;
        for (const t of tiles) {
            if (isImageTile(t)) {
                map.push(imgCounter);
                imgCounter++;
            } else {
                map.push(-1);
            }
        }
        return map;
    }, [tiles]);

    // Safe guard saat images kosong
    const current = images.length ? images[idx % images.length] : undefined;

    return (
        <>
            {/* GRID: 6 kolom mobile, 8 kolom md+ ; tinggi baris fix → metro */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className={[
                    "grid auto-rows-[90px] sm:auto-rows-[110px] md:auto-rows-[120px]",
                    "grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3 md:gap-4",
                    "will-change-[transform] transform-gpu",
                    className,
                ].join(" ")}
            >
                {tiles.map((t, i) => (
                    <Tile
                        key={i}
                        t={t}
                        i={i}
                        openAt={openAt}
                        imgIdx={imageIndexMap[i]}
                    />
                ))}
            </motion.div>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {open && current && (
                    <motion.div
                        key="lightbox"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        aria-modal
                        role="dialog"
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            className="relative mx-auto w-full max-w-6xl"
                            initial={{scale: 0.98, y: 8, opacity: 0}}
                            animate={{
                                scale: 1,
                                y: 0,
                                opacity: 1,
                                transition: {type: "spring", damping: 24, stiffness: 240}
                            }}
                            exit={{scale: 0.98, y: 8, opacity: 0}}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl bg-black">
                                <Image
                                    src={current.src}
                                    alt={current.alt ?? `Image ${idx + 1}`}
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <button
                                aria-label="Close"
                                onClick={() => setOpen(false)}
                                className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                            >
                                ✕
                            </button>
                            <button
                                aria-label="Previous"
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                            >
                                ‹
                            </button>
                            <button
                                aria-label="Next"
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                            >
                                ›
                            </button>

                            {current.alt && (
                                <div className="mt-3 text-center text-sm text-white/80">{current.alt}</div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
