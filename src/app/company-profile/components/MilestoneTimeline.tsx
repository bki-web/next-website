"use client";
import Image from "next/image";
import {motion} from "framer-motion";
import {classes} from "@/utils/string";

export type Milestone = {
    year: string;
    title: string;
    desc: string;
    imageUrl?: string;
};

type Props = { milestones: Milestone[] };

export default function MilestoneTimeline({milestones}: Props) {
    return (
        <section className="relative w-full bg-[#0A436A] text-white">
            <div className="px-10 md:px-20 pt-4 lg:pt-6 xl:pt-10 2xl:pt-20 2xl:pb-20 md:pb-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                        Our history
                    </h2>
                    <p className="">
                        BKI (PT Biro Klasifikasi Indonesia) is a classification bureau for marine services with a rich history of professional expertise. As Indonesia&apos;s only national classification body, BKI is entrusted by the government to uphold safety and quality standards for Indonesian-flagged vessels and foreign vessels operating in the country&apos;s waters. Our core mission involves applying rigorous technical standards for the design, construction, and operation of marine vessels, ensuring their seaworthiness and reliability.
                    </p>
            </div>
            {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                    <motion.div
                        key={m.year}
                        initial={{opacity: 0, y: 60}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", stiffness: 100, damping: 18}}
                        viewport={{once: true, margin: "-20% 0px"}}
                        className={classes(
                            "relative grid grid-cols-1 md:grid-cols-2 min-h-[480px] lg:min-h-[560px] overflow-hidden",
                        )}
                    >
                        {/* CONTENT */}
                        <div
                            className={[
                                "flex flex-col justify-center p-10 md:p-16 lg:p-20",
                                isLeft ? "order-1 bg-[#0A436A]" : "order-2 bg-[#0A436A] items-end text-end",
                            ].join(" ")}
                            style={{
                                clipPath: isLeft
                                    ? "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
                                    : "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
                            }}
                        >
                            <p className="text-5xl md:text-6xl font-bold mb-6 pb-6 border-b border-white w-full">{m.year}</p>
                            <h3 className="text-2xl md:text-3xl font-semibold">{m.title}</h3>
                            <p className="mt-4 text-white/90 leading-relaxed text-sm md:text-base">
                                {m.desc}
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div
                            className={[
                                "relative lg:!h-full !h-[25vh]",
                                isLeft ? "order-2" : "order-1",
                            ].join(" ")}
                            style={{
                                clipPath: isLeft
                                    ? "polygon(0 0, 100% 0, 100% 100%, 15% 100%)"
                                    : "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                            }}
                        >
                            {m.imageUrl && (
                                <Image
                                    src={m.imageUrl}
                                    alt={m.title}
                                    fill
                                    className="object-cover lg:!h-full !h-[25vh]"
                                />
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </section>
    );
}
