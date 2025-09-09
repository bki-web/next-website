"use client";

import {motion, Variants} from "framer-motion";
import Image from "next/image";

const images = [
    "/ships/ship1.jpg",
    "/ships/ship2.jpg",
    "/ships/ship3.jpg",
    "/ships/ship4.jpg",
    "/ships/ship5.jpg",
    "/ships/ship6.jpg",
    "/ships/ship1.jpg",
    "/ships/ship2.jpg",
    "/ships/ship3.jpg",
    "/ships/ship4.jpg",
    "/ships/ship5.jpg",
    "/ships/ship6.jpg",
];

const containerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.12, delayChildren: 0.05},
    },
} as Variants;

const itemVariants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.55, ease: "easeOut"}},
} as Variants;

export default function ResearchProjectSection() {
    return (
        <section className="bg-[#e8edf3] 2xl:py-20 lg:py-16 py-12">
            <div className="max-w-none inline-block">
                {/* Heading */}
                <motion.div
                    initial={{opacity: 0, y: -12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="mb-8 md:mb-10 2xl:px-28 xl:px-24 lg:px-20 px-4"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#0A436A]">
                        Our Ongoing <span className="font-bold text-[#083b66]">Research Project</span>
                    </h2>
                </motion.div>

                <div className="overflow-x-auto w-screen">
                    {/* 2-row horizontal slider, isi dari atas ke bawah */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-rows-2 auto-rows-[200px] md:auto-rows-[300px] auto-cols-[260px] md:auto-cols-[380px] gap-4 grid-flow-col"
                    >
                        {images.map((src, i) => {
                            const isTall = (i + 1) % 3 === 0;
                            let positionClass = "";

                            if (!isTall) {
                                const posInGroup = i % 3; // 0 -> atas, 1 -> bawah, 2 -> tall
                                if (posInGroup === 0) positionClass = "row-start-1";
                                if (posInGroup === 1) positionClass = "row-start-2";
                            }

                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className={`group relative overflow-hidden shadow-md ${isTall ? "row-span-2" : "row-span-1"} ${positionClass}`}
                                >
                                    <div className="w-full h-full min-h-[200px] md:min-h-[300px] relative">
                                        <Image
                                            src={src}
                                            alt={`Ship ${i + 1}`}
                                            fill
                                            sizes="(min-width: 1024px) 380px, (min-width: 640px) 260px, 100vw"
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.05]"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
