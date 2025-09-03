import {motion} from "framer-motion";
import Image from "next/image";
import {useMemo, useState} from "react";

export type TileSize = "sm" | "md" | "lg" | "wide" | "tall";
export type TileItem =
    | { type: "text"; label: string; size?: TileSize }
    | { type?: "image"; src: string; alt?: string; size?: TileSize };

export type TileProps = {
    t: TileItem;
    i: number;
    openAt: (i: number) => void;
    imgIdx: number;
};

const itemVariants = {
    hidden: {opacity: 0, y: 14, scale: 0.98},
    show: {opacity: 1, y: 0, scale: 1, transition: {type: "spring" as const, damping: 22, stiffness: 260}},
} as const;

function sizeToSpan(size: TileSize): string {
    switch (size) {
        case "sm":
            return "col-span-2 row-span-2";
        case "md":
            return "col-span-3 row-span-2";
        case "lg":
            return "col-span-4 row-span-3";
        case "wide":
            return "col-span-4 row-span-2";
        case "tall":
            return "col-span-2 row-span-4";
        default:
            return "col-span-3 row-span-2";
    }
}

export default function Tile({t, i, openAt, imgIdx}: TileProps) {
    const [autoSize, setAutoSize] = useState<TileSize>("md");

    const effectiveSize: TileSize = useMemo(
        () => t.size ?? autoSize,
        [t, autoSize]
    );

    const sizeClass = sizeToSpan(effectiveSize);
    const isText = t.type === "text";

    return (
        <motion.div variants={itemVariants} className={`${sizeClass} group`}>
            <motion.div
                // tilt + zoom animasi tetap hidup
                whileHover={{scale: 1.05, rotate: 0.3}}
                whileTap={{scale: 0.97}}
                transition={{type: "spring", stiffness: 280, damping: 22}}
                className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 transform-gpu"
            >
                {isText ? (
                    <div className="absolute inset-0 grid place-items-center bg-black/60">
                        <div className="px-6 text-4xl md:text-6xl font-bold tracking-widest text-white/90">
                            {t.label ?? "TEXT"}
                        </div>
                    </div>
                ) : (
                    <>
                        <Image
                            src={t.src}
                            alt={t.alt ?? "image"}
                            fill
                            sizes="(max-width:768px) 60vw, 35vw"
                            className="object-cover transition-transform duration-300 will-change-transform"
                            priority={i < 4}
                            placeholder="blur"
                            blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                            onLoadingComplete={(img) => {
                                if (t.size) return; // kalau user sudah set size, jangan auto
                                const {naturalWidth: nw, naturalHeight: nh} = img;
                                if (!nw || !nh) return;
                                const ratio = nw / nh;
                                if (ratio >= 1.35) setAutoSize("wide");
                                else if (ratio <= 0.75) setAutoSize("tall");
                                else setAutoSize("md");
                            }}
                        />

                        {/* shine sweep */}
                        <div
                            className="pointer-events-none absolute inset-0 translate-x-[-120%] rotate-12
                         bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0
                         transition-transform duration-500 ease-out
                         group-hover:translate-x-[120%] group-hover:opacity-100"
                        />

                        {/* vignette */}
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/10"/>

                        {/* caption */}
                        {t.alt && (
                            <div
                                className="absolute left-3 bottom-3 text-xs md:text-sm text-white/85 bg-black/45 px-2 py-1 rounded-md">
                                {t.alt}
                            </div>
                        )}

                        {/* overlay click */}
                        {imgIdx >= 0 && (
                            <button
                                aria-label="Open"
                                onClick={() => openAt(imgIdx)}
                                className="absolute inset-0"
                            />
                        )}
                    </>
                )}
            </motion.div>
        </motion.div>
    );
}
