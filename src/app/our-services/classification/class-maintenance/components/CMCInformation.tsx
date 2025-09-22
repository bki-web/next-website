"use client";

import { motion } from "framer-motion";
import { Anchor } from "lucide-react";

const details = [
    { label: "Ship’s Name" },
    { label: "BKI Register Number (or Contract Number if pre-registration)" },
    { label: "Gross Tonnage (GT)" },
    { label: "Full Class Notation and Character" },
    { label: "Registered Owner’s Name" },
    { label: "Vessel’s Flag" },
    { label: "The specific maintenance period being certified" },
    {
        label:
            'A "Notes" section for remarks, particularly concerning any incidents unrelated to a formal accident claim.',
    },
];

export default function CMCInformation() {
    return (
        <section className="relative bg-gradient-to-b from-white to-[#0A436A] py-16">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-slate-800"
                >
                    Information Contained in the{" "}
                    <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
            CMC
          </span>
                </motion.h2>
                <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                    Each CMC is uniquely numbered and includes the date and location of
                    issuance. The certificate is officially signed by the Head of BKI’s
                    Survey Division and contains the following key vessel details:
                </p>

                {/* Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {details.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                            className="group flex flex-col items-start gap-3 rounded-sm border border-sky-200 bg-white p-6 text-left shadow-sm hover:shadow-lg"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition">
                                <Anchor size={20} />
                            </div>
                            <p className="font-medium text-slate-700 text-base md:text-lg leading-snug">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
