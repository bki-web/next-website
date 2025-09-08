'use client';
import {motion, Variants} from "framer-motion";
import Image from "next/image";
import {classes} from "@/utils/string";

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

const item: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 90, damping: 16}},
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

function statusStyles(status: ActivityItem["status"]) {
    switch (status) {
        case "Upcoming":
            return {
                chip: "text-orange-500",
                bar: "bg-[#0A436A]",
                card: "bg-white",
                dim: "opacity-100",
            } as const;
        case "Ongoing":
            return {
                chip: "text-green-500",
                bar: "bg-[#0A436A]",
                card: "bg-white",
                dim: "opacity-100",
            } as const;
        case "Completed":
            return {
                chip: "text-gray-300",
                bar: "bg-gray-300",
                card: "bg-gray-700 text-white",
                dim: "opacity-90",
            } as const;
    }
}

function ActivityCard({a}: { a: ActivityItem }) {
    const s = statusStyles(a.status);
    return (
        <motion.article
            variants={item}
            viewport={{once: true, amount: 0.2}}
            className={`relative border border-slate-200 ${s.card} shadow-sm overflow-hidden`}
        >
            <div className="grid grid-cols-[112px_1fr] md:grid-cols-[160px_1fr] gap-4 md:gap-6 p-4 md:p-6">
                {/* Image */}
                <div className={`h-[92px] md:h-[128px] w-full overflow-hidden ${s.dim}`}>
                    <Image src={a.imageUrl} alt={a.title} className="h-full w-full object-cover" width={112} height={92}
                           priority={true}/>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                    <div className={classes(
                        "text-sm flex flex-wrap items-center gap-2",
                        a.status === 'Completed' ? "text-white" : "text-slate-500"
                    )}>
                        <span>{a.dateLabel}</span>
                        <span className={`font-semibold ${s.chip}`}>• {a.status}</span>
                    </div>

                    <h3 className={classes(
                        "text-xl md:text-2xl font-extrabold tracking-tight",
                        a.status === 'Completed' ? "text-white" : "text-[#0A436A]"
                    )}>
                        {a.title}
                    </h3>

                    <p className={classes(
                        "text-sm md:text-base leading-relaxed",
                        a.status === 'Completed' ? "text-slate-200" : "text-slate-600"
                    )}>
                        <span className="font-semibold">Regarding</span>
                        {" "}
                        {a.regarding}
                    </p>

                    {/* CTA bar */}
                    <div className="mt-2">
                        {a.href ? (
                            <a
                                href={a.href}
                                className={classes(
                                    "group inline-flex w-full items-center justify-between px-4 py-2  text-sm font-medium",
                                    s.bar,
                                    a.status === 'Completed' ? "text-[#0A436A]" : "text-white"
                                )}
                            >
                                <span>More Detail</span>
                                <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                            </a>
                        ) : (
                            <div/>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function ActivitySection() {
    return (
        <section className="relative 2xl:px-28 lg:px-20 px-4 2xl:py-20 lg:py-16 py-12 bg-white">
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
