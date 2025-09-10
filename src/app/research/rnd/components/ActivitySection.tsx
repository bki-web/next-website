'use client';
import {motion, Variants} from "framer-motion";
import ActivityCard from "@/app/research/rnd/components/ActivityCard";

export type ActivityItem = {
    id: string;
    dateLabel: string; // e.g. "2025, April 6"
    status: "Upcoming" | "Ongoing" | "Completed";
    title: string; // e.g. "Riset Bersama PUTA ( ITS - BKI )"
    regarding: string;
    imageUrl: string;
    href?: string;
};

const container: Variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.08, delayChildren: 0.1},
    },
};

const items: ActivityItem[] = [
    {
        id: "1",
        dateLabel: "2025, April 6",
        status: "Upcoming",
        title: "Riset Bersama PUTA ( ITS - BKI )",
        regarding:
            '"Issue of authority to BKI to implement Ship Safety inspection and Pollution Prevention to Indonesian Flag Cargoes Vessel with Gross Tonnage (GT) of 500 or more classified with BKI"',
        imageUrl:
            "/rnd/riset1.png",
        href: "#",
    },
    {
        id: "2",
        dateLabel: "2025, April 6",
        status: "Ongoing",
        title: "Riset Bersama PUTA ( ITS - BKI )",
        regarding:
            '"Issue of authority to BKI to implement Ship Safety inspection and Pollution Prevention to Indonesian Flag Cargoes Vessel with Gross Tonnage (GT) of 500 or more classified with BKI"',
        imageUrl:
            "/rnd/riset2.jpg",
        href: "#",
    },
    {
        id: "3",
        dateLabel: "2025, April 6",
        status: "Completed",
        title: "Riset Bersama PUTA ( ITS - BKI )",
        regarding:
            '"Issue of authority to BKI to implement Ship Safety inspection and Pollution Prevention to Indonesian Flag Cargoes Vessel with Gross Tonnage (GT) of 500 or more classified with BKI"',
        imageUrl:
            "/rnd/riset2.jpg",
        href: "#",
    },
];

export default function ActivitySection() {
    return (
        <section className="relative 2xl:px-28 xl:px-24 lg:px-20 px-4 2xl:py-20 lg:py-16 py-12 bg-white">
            {/* Header */}
            <div className="mb-6 md:mb-8 flex items-center justify-between gap-3">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A436A]">
                    Our Latest <span className="text-[#0A436A]/80">Activities</span>
                </h2>
                <button
                    className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 cursor-pointer">
                    Activities <span>→</span>
                </button>
            </div>

            {/* List */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.15}}
                className="space-y-4 md:space-y-5"
            >
                {items.map((a) => (
                    <ActivityCard key={a.id} a={a}/>
                ))}
            </motion.div>
        </section>
    );
}
