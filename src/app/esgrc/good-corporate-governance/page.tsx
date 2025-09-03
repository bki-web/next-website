'use client';
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "@/app/our-services/components/DigitalPlatform";
import type {Variants} from "framer-motion";
import {motion} from "framer-motion";
import {Dot} from "lucide-react";

// Motion tokens
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const FADE_IN_UP: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: EASE}},
};
const STAGGER: Variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.08, delayChildren: 0.04}},
};

// UI primitives
function Badge({children}: { children: React.ReactNode }) {
    return (
        <span
            className="inline-flex items-center gap-2 rounded-full bg-[#0A436A] text-white/90 px-4 py-2 text-sm shadow-sm">
<span className="inline-block size-2 rounded-full bg-white"/>
            {children}
</span>
    );
}

function StatCard({title, value, corner, hint}: {
    title: string;
    value: string;
    hint?: string;
    corner?: "tl" | "tr" | "bl" | "br"
}) {
    const base = "absolute rounded-2xl bg-white shadow-[0_20px_60px_rgba(2,6,23,0.12)] border border-slate-200/60";
    const pos =
        corner === "tl" ? "left-[-3%] top-[-8%]" :
            corner === "tr" ? "right-[-3%] top-[-12%]" :
                corner === "bl" ? "left-[-5%] bottom-[-12%]" :
                    "right-[-6%] bottom-[-10%]";
    return (
        <motion.div
            initial={{opacity: 0, y: 16, scale: 0.98}}
            animate={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.7, ease: EASE}}
            className={`${base} ${pos} p-4 w-[180px]`}
        >
            <p className="text-[12px] text-slate-500">{title}</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{value}</p>
            {hint ? <p className="mt-1 text-[11px] text-slate-500">{hint}</p> : null}
        </motion.div>
    );
}

function FeatureCard({title, subtitle}: { title: string; subtitle: string }) {
    return (
        <motion.div
            variants={FADE_IN_UP}
            className="rounded-3xl bg-yellow-200/60 border border-lime-300/60 shadow-[0_20px_60px_rgba(190,242,100,0.35)] p-6 md:p-8"
        >
            <div className="inline-flex items-center justify-center rounded-xl bg-[#0A436A] text-yellow-200 size-10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.6L12 16l-4.9 2.3.9-5.6-4-3.9 5.5-.8L12 3z"
                          fill="currentColor"/>
                </svg>
            </div>
            <h4 className="mt-4 text-lg md:text-xl font-semibold text-slate-900">{title}</h4>
            <p className="mt-2 text-sm text-slate-700/90">{subtitle}</p>
        </motion.div>
    );
}

export default function GoodCorporateGovernancePage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white">
            <PageTransition/>

            {/* Hero Section */}
            <Hero
                routes={[
                    {
                        text: "Home",
                        href: "/",
                    },
                    {
                        text: "ESGRC - Good Corporate Governance",
                    },
                ]}
                backgroundClass="bg-[url('/environment-bg.png')]"
                title={"Good Corporate Governance"}
            />

            {/* HERO */}
            <section className="relative mx-auto max-w-7xl px-6 pt-12 md:pt-16">
                <div
                    className="relative rounded-[32px] bg-white shadow-[0_25px_80px_rgba(2,6,23,0.12)] border border-slate-200 overflow-hidden">
                    {/* subtle rings */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div
                            className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(2,6,23,0.06),transparent_80%)]"/>
                        <div
                            className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_0,transparent_40%,rgba(2,6,23,0.04)_41%,transparent_42%),radial-gradient(circle_at_center,transparent_0,transparent_60%,rgba(2,6,23,0.04)_61%,transparent_62%)]"/>
                    </div>

                    {/* floating stat cards (decorative) */}
                    <StatCard corner="tl" title="Commitment" value="GCG" hint="PT. BKI (Persero)"/>
                    <StatCard corner="tr" title="Principles" value="5" hint="PER-01/MBU/2011"/>
                    <StatCard corner="bl" title="Roadmap" value="Board Manual"/>
                    <StatCard corner="br" title="Goal" value="Good Corporate Citizen"/>

                    <div className="relative mx-auto max-w-3xl text-center px-6 py-20 md:py-28">
                        <motion.div variants={STAGGER} initial="hidden" animate="show">
                            {/*<motion.h1 variants={FADE_IN_UP} className="text-3xl md:text-5xl font-bold tracking-tight">*/}
                            {/*    Good Corporate Governance*/}
                            {/*</motion.h1>*/}
                            <motion.p variants={FADE_IN_UP} className="mt-4 text-[15px] leading-7 text-slate-700">
                                GCG commitment implementation is the absolutely for PT. BKI (Persero). It was
                                implemented trough
                                strengthening of existing infrastructure and continuity improve the system and procedure
                                to support the
                                efectivity of GCG implementation in PT. BKI (Persero).
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="mx-auto max-w-3xl px-6">
                <div className="mx-auto pt-10 pb-4">
                    <Badge>Overview</Badge>
                    <p className="mt-4 text-[15px] leading-7 text-slate-700">
                        To realize the growing and competitive company, PT. BKI already developt the system and
                        structure of Good Coorporate
                        Governance by observing the principles of GCG based on the rules, regulation and nad best
                        prastice that applicable.
                    </p>
                    <p className="mt-4 text-[15px] leading-7 text-slate-700">
                        GCG implementation is the continuity of Ministri Decision No&gt; 117/M-MBU/2002 date on July,
                        31st 2002 are then updated with the SEO Minister of State Regulation No. PER 01/MBU/2011 date on
                        Agust, 1st 2011 about The implementation of Good Governance in SEO, that states are &#34;SEO
                        obliged
                        to implement the company operation based on the principes of GCG that is Transparation,
                        Accountability, Responsibility, Independency and reasonableness&#34;.
                    </p>
                    <p className="mt-4 text-[15px] leading-7 text-slate-700">
                        The spirits that contain on the implementation of GCG in PT. BKI is the intention and
                        determination of BKI management to make BKI be a compnay that continues to grow and evolve by
                        Product quality and good working process, and have Code of Conduct, include responsible to the
                        evirontment.
                    </p>
                </div>
            </section>

            {/* AIMS GRID (3 highlights) */}
            <section className="mx-auto max-w-7xl px-6 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <FeatureCard
                        title="Control & direct relations"
                        subtitle="Stakeholder, Broad of Commisioner and Direction, employee, constumers, partners, society and environtment running good and the neccesary of all parties are fulfilled."/>
                    <FeatureCard
                        title="Encourage development"
                        subtitle="Encourage and support development of BKI. Manage the resource trustfully and manage the risk better."/>
                    <FeatureCard
                        title="Raise responsibility"
                        subtitle="Increase the responsible to Shareholder, prevent irregularities, improve work culture, and enchance the image of BKI."/>
                </div>
            </section>

            {/* PRINCIPLES (5 cards) */}
            <section className="mx-auto max-w-7xl px-6 py-12 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                    {[
                        {
                            k: "Transparency",
                            d: "Transperency in the implementation of decision making process and in disclosing the material information relevant with company."
                        },
                        {
                            k: "Accountability",
                            d: "Clarity of function, implementation and organ accountability so the corporate governance run effectifely."
                        },
                        {
                            k: "Responsibility",
                            d: "Appropriate governance to the legalisation of laws and the principals of healthy corporate."
                        },
                        {
                            k: "Independency",
                            d: "Professionaly managed without conflict of interset and influence/pressure from any party."
                        },
                        {
                            k: "Fairness",
                            d: "Justice and equality in Rights fulfillment of Stakeholders based on agreements and rules legislation."
                        },
                    ].map((p) => (
                        <motion.div key={p.k} variants={FADE_IN_UP} initial="hidden" whileInView="show"
                                    viewport={{once: true}}
                                    className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                            <div
                                className="inline-flex items-center justify-center rounded-xl bg-[#0A436A] text-yellow-200 size-10">
                                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                                    <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.6L12 16l-4.9 2.3.9-5.6-4-3.9 5.5-.8L12 3z"
                                          fill="currentColor"/>
                                </svg>
                            </div>
                            <h4 className="mt-4 text-lg font-semibold text-slate-900">{p.k}</h4>
                            <p className="mt-2 text-sm text-slate-700/90">{p.d}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FORMAL RULES */}
            <section className="mx-auto max-w-7xl px-6">
                <div
                    className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-[0_25px_80px_rgba(2,6,23,0.08)]">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0A436A]">Formal rules as the
                        basis of GCG
                        implementation</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex gap-2"><Dot className="shrink-0"/>Law No. 19 of 2003 on SEO (Article 5,
                                Pragraph
                                3)
                            </li>
                            <li className="flex gap-2"><Dot className="shrink-0"/>Ministry of State Enterprises No.
                                PER-01/MBU/2011 on the implementation of Good
                                Corporate Governance on State-Owned Enterprises and amandements of Ministerial
                                Regulation No. PER-09/MBU/2012 date on July 6th, 2012.
                            </li>
                            <li className="flex gap-2"><Dot className="shrink-0"/>Decision of Ministry of State-Owned
                                Enteprises
                                Secretary No. SK-16/S.MBU/2012 date
                                on June 6th, 2012 on Indicator/Assessement Parameter and the Evaluation of Good
                                Corporate Governance on State Enterprises-Owned.
                            </li>
                            <li className="flex gap-2"><Dot className="shrink-0"/>Law No. 1 on 1995 about Incorporated
                                Company
                                that amanded by Law No. 40 on 2007
                                date on August 16th, 2007.
                            </li>
                            <li className="flex gap-2"><Dot className="shrink-0"/>Mutual commitment with Broad
                                of
                                Commisioner
                                and Director on the implementation of
                                GCG and Code of Conduct in PT. BKI (Persero).
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ROADMAP / GOALS */}
            <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
                <div
                    className="rounded-[32px] border border-slate-200 bg-[#DBEEF0]/60 p-0 overflow-hidden shadow-[0_25px_80px_rgba(2,6,23,0.12)]">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 md:p-10">
                            <Badge>Roadmap of GCG (Board Manual)</Badge>
                            <p className="mt-4 text-[15px] leading-7 text-slate-700">
                                BKI set the direction of GCG implementation in Roadmap of GCG (Board Manual) that
                                expected to became the guidance in the implementation of GCG at all levels. Roadmap of
                                GCG is directed to set GCG as the base for every operational activities. The goals of
                                GCG Roadmaps is to realize BKI as Good Corporate Citizen. The expectation of the
                                achieving the goal, BKI is optimistic to increase and maintain the performance
                                cotinously.
                            </p>
                        </div>
                        <div className="p-6 md:p-10">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h4 className="font-semibold text-slate-900">GCG</h4>
                                    <p className="mt-2 text-sm text-slate-700">Complete the provision and rules ion
                                        Corporate Governance.</p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h4 className="font-semibold text-slate-900">Good Coorporate Company</h4>
                                    <p className="mt-2 text-sm text-slate-700">Controlling bussiness operation
                                        especially bussiness risk operation effectively.</p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h4 className="font-semibold text-slate-900">Good Coorperate Citizen</h4>
                                    <p className="mt-2 text-sm text-slate-700">Became the maritime industri or ethnical
                                        and responsible society.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DigitalPlatform/>
            <ContactUsSection/>
        </div>
    );
}
