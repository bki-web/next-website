"use client";

import { RefObject } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Props = {
    /** Optional: element yang mau di-track. Kalau tidak dikasih, track seluruh dokumen */
    targetRef?: RefObject<HTMLElement | null>;
    /** Optional: warna bar */
    colorClassName?: string; // mis. "bg-emerald-600"
};

export default function ReadingProgress({ targetRef, colorClassName = "bg-[#0A436A]" }: Props) {
    const { scrollYProgress } = useScroll(
        targetRef
            ? { target: targetRef, offset: ["start start", "end end"] }
            : undefined
    );

    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 20, mass: 0.4 });

    const opacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0.3]);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none pb-[calc(env(safe-area-inset-bottom)+0px)]">
            <div className="mx-auto max-w-screen-2xl">
                <div className="h-1.5 bg-black/10 dark:bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/10 rounded-t">
                    <motion.div
                        style={{ scaleX, opacity }}
                        className={`h-full origin-left ${colorClassName} rounded-t shadow-[0_-1px_6px_rgba(0,0,0,0.2)]`}
                    />
                </div>
            </div>
        </div>
    );
}
