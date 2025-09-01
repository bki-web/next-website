import useTilt from "@/app/photos/hooks/useTilt";
import {sizeToSpan} from "@/app/photos/utils/utils";
import {motion} from "framer-motion";
import Image from "next/image";

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

export default function Tile({t, i, openAt, imgIdx}: TileProps) {
    const {ref, transform, onMove, onLeave} = useTilt(6);
    const isText = t.type === "text";
    const size = sizeToSpan(t.size ?? "md");

    return (
        <motion.div key={i} variants={itemVariants} className={`${size} group`}>
            <motion.div
                ref={ref}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{transform, willChange: "transform, opacity"}}
                className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5
             transform-gpu transition-[box-shadow,opacity] duration-200
             shadow-[0_8px_26px_rgba(0,0,0,0.30)] hover:shadow-[0_14px_44px_rgba(0,0,0,0.40)]"
            >
                {isText ? (
                    <div className="absolute inset-0 grid place-items-center bg-black/60">
                        <div className="px-6 text-4xl md:text-6xl font-bold tracking-widest text-white/90">
                            {t.label ?? "TEXT"}
                        </div>
                    </div>
                ) : (
                    <>
                        <motion.div
                            initial={false}
                            whileHover={{scale: 1.055}}
                            transition={{type: "spring", stiffness: 280, damping: 22, mass: 0.35}}
                            className="absolute inset-0 will-change-transform transform-gpu"
                        >
                            <Image
                                src={t.src!}
                                alt={t.alt ?? "image"}
                                fill
                                priority={i < 4}
                                placeholder="blur"
                                blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
                                sizes="(max-width:768px) 60vw, 35vw"
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Shine sweep */}
                        <div
                            className="pointer-events-none absolute inset-0 translate-x-[-120%] rotate-12
             bg-gradient-to-r from-white/0 via-white/12 to-white/0 opacity-0
             transition-transform duration-500 ease-out
             group-hover:translate-x-[120%]"
                        />
                        {/* glow & vignette */}
                        <div
                            className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/0 transition duration-200 group-hover:ring-2 group-hover:ring-white/30"/>
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/10"/>


                        {/* Caption */}
                        {t.alt && (
                            <div
                                className="absolute left-3 bottom-3 text-xs md:text-sm text-white/85 bg-black/45 px-2 py-1 rounded-md backdrop-blur">
                                {t.alt}
                            </div>
                        )}

                        {/* Overlay button */}
                        <button
                            aria-label="Open"
                            onClick={() => imgIdx >= 0 && openAt(imgIdx)}
                            className="absolute inset-0"
                        />
                    </>
                )}
            </motion.div>
        </motion.div>
    );
}
