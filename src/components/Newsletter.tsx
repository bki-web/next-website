"use client";

import {FormEvent, useState} from "react";
import {motion, Variants} from "framer-motion";
import FancyTitle from "./FancyTitle";

const container: Variants = {
    hidden: {opacity: 0, y: 28, filter: "blur(8px)"},
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {duration: 0.7, ease: "easeOut", staggerChildren: 0.15},
    },
};

const item: Variants = {
    hidden: {opacity: 0, y: 18},
    show: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}},
};

export default function NewsletterHero() {
    const [email, setEmail] = useState("");

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        // TODO: kirim ke service newsletter
        console.log("Subscribed:", email);
        setEmail("");
    };

    return (
        <section className="relative py-6 md:py-12">

            {/* CARD */}
            <motion.form
                variants={container}
                initial="hidden"
                animate="show"
                onSubmit={submit}
                className="relative mx-auto w-[92%] max-w-2xl
                   rounded-sm border border-white/15
                   bg-white/8 backdrop-blur-2xl
                   shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                   ring-1 ring-white/10 px-6 md:px-10 py-10 md:py-12
                   text-center text-white"
            >
                <motion.div variants={item} className="relative z-10">
                    <div className="text-2xl md:text-4xl font-semibold">
                        <FancyTitle title="Subscribe Now"/>
                    </div>
                </motion.div>

                <motion.p
                    variants={item}
                    className="relative z-10 mt-4 text-white/75 text-sm md:text-base"
                >
                    News, promotion, and exclusive content.
                </motion.p>

                <motion.div variants={item} className="relative z-10 mt-6 flex gap-3">
                    <div className="relative flex-1">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
              <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75l8.955 5.37a1.5 1.5 0 001.59 0l8.955-5.37M3.75 6.75h16.5v10.5A2.25 2.25 0 0118 19.5H6a2.25 2.25 0 01-2.25-2.25V6.75z"
                />
              </svg>
            </span>
                        <input
                            type="email"
                            aria-label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email here"
                            className="w-full rounded-sm border border-white/20 bg-white/10/50
                         px-12 py-3.5 text-base md:text-lg text-white
                         placeholder:text-white/60 outline-none
                         focus:border-white/30 focus:ring-2 focus:ring-white/25
                         backdrop-blur-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="shrink-0 rounded-sm border border-white/20
                       bg-white/85 px-5 md:px-6 py-3.5
                       text-sm md:text-base font-semibold text-black
                       transition hover:bg-white focus:outline-none
                       focus:ring-2 focus:ring-white/25 active:scale-[0.98]"
                    >
                        Subscribe →
                    </button>
                </motion.div>

                {/* Footnote kecil opsional */}
                <motion.p
                    variants={item}
                    className="relative z-10 mt-3 text-[12px] md:text-xs text-white/60"
                >
                    We respect your privacy.
                </motion.p>
            </motion.form>
        </section>
    );
}
