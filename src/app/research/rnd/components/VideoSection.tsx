'use client';

import {motion, useScroll, useTransform} from "framer-motion";
import {Fragment, useEffect, useRef} from "react";
import Link from "next/link";

const routes: { text: string, href?: string }[] = [
    {text: "Home", href: "/"},
    {text: "Research", href: "/research/rnd"},
    {text: "Research & Development"},
];

export default function VideoSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"], // 0 at top, 1 at bottom of hero
    });
    // video moves slower upward
    const videoY = useTransform(scrollYProgress, [0, 1], [0, 240]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                // Autoplay was prevented. This is expected on some browsers.
                console.log("Autoplay was prevented:", error);
            });
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full h-screen flex flex-col items-start justify-end 2xl:px-28 xl:px-24 lg:px-20 px-4 2xl:py-40 lg:py-32 py-12 relative">
            <motion.div
                className="absolute inset-0 -z-2"
                style={{y: videoY, willChange: "transform"}}
            >
                <video
                    ref={videoRef}
                    className={`w-full h-full object-cover transition-all duration-1000 blur-0 scale-100`}
                    src="/hero-banner-bki.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                />
            </motion.div>
            <div
                className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0)_40%,rgba(10,67,106,0.5)_65%,#0A436A)] -z-1"></div>
            <motion.div
                initial={{opacity: 0, y: 15}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut", delay: 0.1}}
                className="flex flex-row justify-center items-center gap-2"
            >
                {routes.map((route, index) => (
                    <Fragment key={route.text + '-' + index}>
                        {index > 0 && (
                            <span className="md:text-xl 2xl:text-3xl">
                                    /
                                </span>
                        )}
                        {route.href ? (
                            <Link href={route.href} className="md:text-xl 2xl:text-3xl">
                                {route.text}
                            </Link>
                        ) : (
                            <span className="md:text-xl 2xl:text-3xl text-[#ffffff75]">
                                    {route.text}
                                </span>
                        )}
                    </Fragment>
                ))}
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 15}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut", delay: 0.5}}
            >
                <p className="mt-6 text-2xl md:text-4xl 2xl:text-[64px] font-semibold">
                    Research & Development
                </p>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 15}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut", delay: 1.0}}
            >
                <p className="mt-9 text-md md:text-lg 2xl:text-[32px] max-w-4/5">
                    We publish our Annual Report to provide stakeholders with a clear view of our performance,
                    strategies, and progress throughout the year.
                </p>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 15}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut", delay: 1.5}}
                className="mt-9"
            >
                <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-base sm:text-lg md:text-xl xl:text-3xl font-light text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                    Explore
                    <span className="ml-2">→</span>
                </Link>
            </motion.div>
        </section>
    );
}