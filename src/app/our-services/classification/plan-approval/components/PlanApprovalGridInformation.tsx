"use client";

import { motion } from "framer-motion";
import { Anchor } from "lucide-react";

const details = [
    { label: "Lines Plan" },
    { label: "Loading Computer/Instrument" },
    { label: "Tank Capacity" },
    { label: "Tonnage Calculation" },
    { label: "Intact Stability (Preliminary/Final)" },
    { label: "Damage Control Plan & Booklet" },
    { label: "Damage Stability (Preliminary/Final)" },
    { label: "Tank Calibration" },
    { label: "Bottom Damage" },
    { label: "Sounding Table" },
    { label: "Grain Loading Stability" },
    { label: "Cross Curve" },
    { label: "Intact Stability in flooding condition (kapal Hatchcoverless)" },
    { label: "Freeboard Calculation" },
    { label: "Seakeeping Analysis (kapal Hatchcoverless)" },
    { label: "Draft Mark Arrange" },
];


export default function PlanApprovalGridInformation() {
    return (
        <section className="relative bg-gradient-to-b from-white to-[#0A436A] py-16">
            <div className="container mx-auto px-6 lg:px-12 text-center">
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
