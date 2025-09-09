'use client';

import {motion, Variants} from "framer-motion";
import ActivityCard from "@/app/research/rnd/components/ActivityCard";
import {ActivityItem} from "@/app/research/rnd/components/ActivitySection";
import Button from "@/components/Button";

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

export default function LatestActivitiySection() {
    return (
        <section
            className="relative 2xl:px-28 xl:px-24 lg:px-20 px-4 2xl:py-20 lg:py-16 py-12 bg-[#E2E7F0] flex flex-col gap-6 md:gap-8">
            <div className=" flex items-center justify-between gap-3">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A436A]">
                    Latest Activities
                </h2>
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

            <div className="w-full flex justify-center items-center">
                <Button text={'Show More'}/>
            </div>
        </section>
    )
}