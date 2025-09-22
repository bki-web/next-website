"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.12 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function NewsletterHero() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !fullName.trim()) return;
        // TODO: kirim ke service newsletter
        console.log("Subscribe:", { fullName, email });
        setFullName("");
        setEmail("");
    };

    return (
        <section className="relative px-4 py-6 md:py-10">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="
          mx-auto w-full max-w-6xl
          rounded-sm bg-neutral-800/80 text-white
          shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10
          px-6 md:px-10 lg:px-12 py-8 md:py-10 backdrop-blur-xs
        "
            >
                {/* GRID: kiri branding, kanan form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* LEFT — Branding */}
                    <motion.div variants={item} className="space-y-5">
                        {/* Logo (opsional). Ganti src jika ada file logo */}
                        <div className="flex items-center gap-3">
                            <div className="relative h-32 w-52">
                                <Image
                                    src="/bki-white.png"
                                    alt="BKI"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="leading-none">
                            <div className="flex gap-2">
                <span className="text-4xl md:text-6xl">
                    <span className="font-bold">News</span>
                    wire
                </span>
                                <span className="text-amber-400 text-3xl md:text-4xl font-extrabold text-">
                  +
                </span>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-white/85">
                            A Place to Get the latest Maritime Update
                            <br className="hidden md:block" /> Right at Your Fingertips
                        </p>
                    </motion.div>

                    {/* RIGHT — Form */}
                    <motion.form
                        onSubmit={submit}
                        variants={item}
                        className="w-full max-w-xl ml-auto"
                    >
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-3">
                                <label
                                    htmlFor="name"
                                    className="md:w-28 shrink-0 text-lg md:text-xl font-semibold text-white/95"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Your name"
                                    className="
                    w-full h-12 md:h-[56px] rounded-sm
                    bg-transparent border-2 border-white/50
                    px-4 text-base md:text-lg placeholder:text-white/60
                    focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white
                    transition
                  "
                                />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-3">
                                <label
                                    htmlFor="email"
                                    className="md:w-28 shrink-0 text-lg md:text-xl font-semibold text-white/95"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="
                    w-full h-12 md:h-[56px] rounded-sm
                    bg-transparent border-2 border-white/50
                    px-4 text-base md:text-lg placeholder:text-white/60
                    focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white
                    transition
                  "
                                />
                            </div>

                            <div className="flex md:justify-end">
                                <button
                                    type="submit"
                                    className="
                    inline-flex items-center justify-center
                    h-12 md:h-[56px] px-8 md:px-10 rounded-sm
                    bg-white text-neutral-900 text-lg md:text-xl font-semibold
                    shadow-[0_6px_24px_rgba(0,0,0,0.25)]
                    hover:bg-white/95 active:scale-[0.98]
                    transition
                  "
                                >
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
}
