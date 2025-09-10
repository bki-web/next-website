import {motion, Variants} from "framer-motion";
import {ActivityItem} from "@/app/research/rnd/components/ActivitySection";
import Image from "next/image";
import {classes} from "@/utils/string";

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

const item: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 90, damping: 16}},
};

export default function ActivityCard({a}: { a: ActivityItem }) {
    const s = statusStyles(a.status);
    return (
        <motion.article
            variants={item}
            viewport={{once: true, amount: 0.2}}
            className={`relative border border-slate-200 ${s.card} shadow-sm overflow-hidden rounded-sm`}
        >
            <div className="grid grid-cols-[112px_1fr] md:grid-cols-[160px_1fr] gap-4 md:gap-6 p-4 md:p-6">
                {/* Image */}
                <div className={`h-full xl:h-48 2xl:h-40 w-full overflow-hidden ${s.dim} rounded-sm`}>
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
                                    "group inline-flex w-full items-center justify-between px-4 py-2 rounded-sm text-sm font-medium",
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