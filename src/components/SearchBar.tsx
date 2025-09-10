"use client";

import {FormEvent, useState} from "react";
import {motion, Variants} from "framer-motion";

type SearchBarProps = {
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    onSearch?: (value: string) => void;
};

const container: Variants = {
    hidden: {opacity: 0, y: 12, filter: "blur(4px)"},
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {duration: 0.6, ease: "easeOut"},
    },
};

const item: Variants = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0, transition: {duration: 0.45, ease: "easeOut"}},
};

export default function SearchBar({
                                      label = "What are you looking for?",
                                      placeholder = "Type something here",
                                      defaultValue = "",
                                      onSearch,
                                  }: SearchBarProps) {
    const [q, setQ] = useState(defaultValue);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        onSearch?.(q.trim());
    };

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="relative -top-6"
        >
            <motion.form
                variants={item}
                onSubmit={submit}
                className="flex flex-col gap-5 md:flex-row md:items-center rounded-sm border border-white/15 bg-[#00385A]/30 backdrop-blur-xl px-6 py-5 shadow-2xl ring-1 ring-white/10"
            >
                {/* Label */}
                <motion.h2
                    variants={item}
                    className="w-full md:w-1/3 text-center md:text-left font-semibold tracking-tight
                     text-white/90 text-xl md:text-2xl 2xl:text-4xl"
                >
                    {label}
                </motion.h2>

                {/* Input + Button */}
                <motion.div
                    variants={item}
                    className="flex w-full items-center gap-3 md:flex-1"
                >
                    <div className="relative flex-1">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              {/* Search icon (inline SVG, no lib needed) */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 opacity-70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                />
              </svg>
            </span>
                        <input
                            aria-label={label}
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder={placeholder}
                            className="w-full rounded-sm border border-white/10 bg-white/5 px-10 py-3.5
                         text-base md:text-lg 2xl:text-2xl text-white/90 placeholder:text-white/50
                         outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/20"
                        />
                    </div>

                    <button
                        type="submit"
                        className="shrink-0 rounded-sm border border-white/15 bg-[#0A436A]
                       px-5 py-3 text-sm md:text-base font-medium text-white/90
                       transition hover:bg-[#0A436A]/80 focus:outline-none
                       focus:ring-2 focus:ring-white/20 active:scale-[0.98]"
                    >
                        Search
                    </button>
                </motion.div>
            </motion.form>
        </motion.section>
    );
}
