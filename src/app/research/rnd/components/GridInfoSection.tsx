'use client';
import React, {useState} from "react";
import {Search} from "lucide-react";
import {classes} from "@/utils/string";
import Link from "next/link";

interface GridInfoItem {
    title: string;
    description: string;
    href?: string;
    isSearch?: boolean;
    bgClass?: string;
}

const gridInfoItems: GridInfoItem[] = [
    {
        title: "What We Do",
        description: "Driving innovation and strengthening maritime standards through continuous research and knowledge sharing.",
        isSearch: true,
    },
    {
        title: "BKI RULES & REGULATIONS",
        description: "BKI held the classification activities based on the latest rules, guidelines, and technical standard. In order to provide better service, our team continuously develop BKI Rules and Regulation through current research and practical maritime experiences. The development is also based on the interpretation from IACS, IMO regulation and other relevant standard so that the rules is comply with the applicable international regulations. Click here for the complete edition of BKI Rules and Regulation.",
        href: "/research/rnd/bki-rules-regulations",
        bgClass: "bg-[url('/rnd/bki-rules-regulations.jpg')]",
    },
    {
        title: "RnD Activities",
        description: "BKI work in research, developing rules and regulation for both of classification and industrial sector, in order to maintain the quality of our services. Providing the integrated system, and introduce our service-on-hand to our customers by developing several technical software to give excellent services in this digital era.",
        href: "#",
        bgClass: "bg-[url('/rnd/rnd-activities.jpg')]",
    },
    {
        title: "Technical Publication",
        description: "BKI researches and studies are presented periodically in National and International Conferences to offer the benefits to stakeholders. The research themes are evolving as science and technology growth, therefore BKI capable to provide technical solution for practical issues in hull structural, electrical/machinery, stability and offshore engineering. In addition, “Propulsion Journal” is to gather all of our technical publications and papers submitted in both internal and external.",
        href: "#",
        bgClass: "bg-[url('/rnd/technical-publication.jpg')]",
    },
];

export default function GridInfoSection() {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Search:", query);
    };
    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 w-full h-full">
            {gridInfoItems.map((item, index) => {
                if (item.isSearch) {
                    return (
                        <div key={`grid-${index + 1}`}
                             className="w-full h-full bg-[#0A436A] relative flex flex-col justify-center gap-9 xl:px-28 lg:px-20 px-4 2xl:py-36 lg:py-28 py-12">
                            <p className="font-medium xl:text-6xl text-2xl text-white">{item.title}</p>
                            <p className="xl:text-3xl text-lg text-white">{item.description}</p>
                            <form
                                onSubmit={handleSubmit}
                                className="flex items-center bg-[#2c5e82] absolute top-0 2xl:left-[7rem] 2xl:right-[7rem] lg:left-[5rem] lg:right-[5rem] left-[1rem] right-[1rem]"
                            >
                                <input
                                    type="text"
                                    placeholder="Search something here"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="flex-1 bg-transparent border border-white border-r-0 text-white placeholder-white px-3 py-2 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="border border-white p-2 flex items-center justify-center"
                                >
                                    <Search className="text-white"/>
                                </button>
                            </form>
                        </div>
                    );
                }

                return (
                    <div key={`grid-${index + 1}`}
                         className="w-full h-full bg-[#0A436A] border-2 border-[#0A436A] flex flex-col justify-center gap-6 xl:px-28 lg:px-20 px-4 2xl:py-14 lg:py-10 py-5 relative">
                        <div className={
                            classes(
                                item.bgClass ?? "",
                                "bg-cover bg-center bg-no-repeat z-0 absolute inset-0",
                            )
                        }/>
                        <div
                            className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#0A436A50_50%,#0A436A_90%)] z-1"/>
                        <p className="font-bold xl:text-6xl text-2xl text-white z-2">{item.title}</p>
                        <p className="xl:text-xl text-base text-white z-2">{item.description}</p>
                        <div className="z-2">
                            <Link
                                href={item.href ?? "#"}
                                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-base sm:text-lg md:text-xl xl:text-3xl font-light text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                            >
                                Read More
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}