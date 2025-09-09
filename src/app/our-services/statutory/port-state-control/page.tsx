'use client';
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion, Variants} from "framer-motion";

const container: Variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.08, delayChildren: 0.05},
    },
};

const item: Variants = {
    hidden: {opacity: 0, y: 18},
    show: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}},
};

export default function PortStateControlPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <PageTransition/>

            {/* Hero Section */}
            <Hero
                routes={[
                    {
                        text: "Home",
                        href: "/",
                    },
                    {
                        text: "Services",
                        href: "/our-services",
                    },
                    {
                        text: "Statutory",
                        href: "/our-services#statutory",
                    },
                    {
                        text: "Port State Control",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Port State Control"}
            />

            <section className="border-b border-slate-200/70 bg-[#0A436A]">
                <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                        className="max-w-3xl"
                    >
                        <span
                            className="inline-flex items-center rounded-full border border-slate-200/70 bg-slate-50 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">Port State Control</span>
                        <h1 className="mt-4 text-3xl font-bold leading-tight text-[#0A436A] md:text-5xl dark:text-[#7ab7dd]">
                            Navigating Port State Control (PSC) with Confidence
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg dark:text-neutral-200">
                            A Port State Control inspection is a critical event for any vessel. For the prepared, it is
                            a routine confirmation of excellence. For the unprepared, it can lead to costly delays,
                            financial penalties, and significant reputational damage.
                        </p>
                        <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg dark:text-neutral-200">
                            At BKI, our goal is to turn this risk into readiness. We provide a comprehensive suite of
                            Port State Control services designed for one purpose: to keep your fleet compliant,
                            operational, and moving. Our approach is built on two pillars: proactive preparation to
                            prevent detentions and rapid response to resolve them efficiently if they occur.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Body */}
            <section
                className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-4 lg:py-16 bg-white 2xl:px-28 lg:px-20 px-4 2xl:py-20">
                {/* TOC */}
                <aside className="lg:col-span-1 sticky top-10">
                    <div
                        className="sticky top-6 rounded-lg border border-slate-200/70 p-4 shadow-sm bg-[#0A436A]">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-neutral-300">
                            On this page
                        </p>
                        <nav className="space-y-2 text-sm">
                            <a className="block rounded-sm px-3 py-2 hover:bg-slate-100 dark:hover:bg-white/10"
                               href="#understanding-psc">
                                Understanding PSC
                            </a>
                            <a className="block rounded-sm px-3 py-2 hover:bg-slate-100 dark:hover:bg-white/10"
                               href="#global-psc-network">
                                The Global PSC Network
                            </a>
                            <a className="block rounded-sm px-3 py-2 hover:bg-slate-100 dark:hover:bg-white/10"
                               href="#high-stakes">
                                The High Stakes of Non-Compliance
                            </a>
                            <a className="block rounded-sm px-3 py-2 hover:bg-slate-100 dark:hover:bg-white/10"
                               href="#proactive-prep">
                                Proactive PSC Preparation
                            </a>
                            <a className="block rounded-sm px-3 py-2 hover:bg-slate-100 dark:hover:bg-white/10"
                               href="#rapid-response">
                                Rapid Response Detention Support
                            </a>
                        </nav>
                    </div>
                </aside>

                {/* Main */}
                <div className="lg:col-span-3">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.15}}
                        className="space-y-14"
                    >
                        {/* Understanding PSC */}
                        <motion.section id="understanding-psc" variants={item} className="scroll-mt-24">
                            <h2 className="text-2xl font-semibold tracking-tight text-[#0A436A]">
                                Understanding Port State Control (PSC)
                            </h2>
                            <p className="mt-3 leading-relaxed text-slate-700">
                                Port State Control (PSC) is the inspection of foreign ships in national ports to
                                verify that the condition of the ship, its equipment, and its crew meet the
                                requirements of international maritime conventions. PSC Officers (PSCOs) are
                                authorized to verify compliance with major regulations, including:
                            </p>
                            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                                {[
                                    "Safety of Life at Sea (SOLAS)",
                                    "Prevention of Pollution from Ships (MARPOL)",
                                    "Maritime Labour Convention (MLC, 2006)",
                                    "Standards of Training, Certification and Watchkeeping for Seafarers (STCW)",
                                    "International Load Line Convention (ILLC)",
                                    "And other mandatory international codes.",
                                ].map((t) => (
                                    <li key={t}
                                        className="group flex items-start gap-3 rounded-sm border border-slate-200/70 p-3 dark:border-white/10 dark:bg-white/5">
                                            <span
                                                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0A436A] ring-2 ring-[#0A436A]/20"/>
                                        <span
                                            className="leading-snug text-slate-800">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* Global PSC Network */}
                        <motion.section id="global-psc-network" variants={item} className="scroll-mt-24">
                            <h2 className="text-2xl font-semibold tracking-tight text-[#0A436A]">
                                The Global PSC Network: A Coordinated System
                            </h2>
                            <p className="mt-3 leading-relaxed text-slate-700">
                                To ensure consistent enforcement worldwide, the International Maritime Organization
                                (IMO) has encouraged regional PSC agreements, known as Memoranda of Understanding
                                (MoU). It is crucial to understand the specific focus areas of the regions your
                                vessels trade in. The world&#39;s oceans are covered by nine regional MoUs:
                            </p>
                            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                                {[
                                    "Paris MoU (Europe and the North Atlantic)",
                                    "Tokyo MoU (Asia-Pacific)",
                                    "Acuerdo de Viña del Mar (Latin America)",
                                    "Caribbean MoU",
                                    "Abuja MoU (West and Central Africa)",
                                    "Black Sea MoU",
                                    "Mediterranean MoU",
                                    "Indian Ocean MoU",
                                    "Riyadh MoU (Persian Gulf)",
                                ].map((t) => (
                                    <li key={t}
                                        className="flex items-start gap-3 rounded-sm border border-slate-200/70 p-3 dark:border-white/10 dark:bg-white/5">
                                            <span
                                                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0A436A] ring-2 ring-[#0A436A]/20"/>
                                        <span
                                            className="leading-snug text-slate-800">{t}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 leading-relaxed text-slate-700">
                                Each MoU maintains its own risk profiles, targeting specific ship types, flags, and
                                recognized organizations. They also conduct regular Concentrated Inspection
                                Campaigns (CICs) focusing on specific areas of compliance, which requires constant
                                vigilance from shipowners.
                            </p>
                        </motion.section>

                        {/* High Stakes */}
                        <motion.section id="high-stakes" variants={item} className="scroll-mt-24">
                            <h2 className="text-2xl font-semibold tracking-tight text-[#0A436A]">
                                The High Stakes of Non-Compliance
                            </h2>
                            <ul className="mt-4 space-y-3">
                                {[
                                    {
                                        title: "Operational Delays",
                                        desc:
                                            "The vessel is held in port until all deficiencies are rectified, disrupting schedules and leading to significant off-hire costs.",
                                    },
                                    {
                                        title: "Financial Penalties",
                                        desc:
                                            "Fines, additional survey fees, and the direct costs of rectifying deficiencies can be substantial.",
                                    },
                                    {
                                        title: "Reputational Damage",
                                        desc:
                                            "Detentions are publicly recorded in databases like those of the Paris and Tokyo MoUs, harming the reputation of the ship, its operator, and its flag.",
                                    },
                                    {
                                        title: "Increased Scrutiny",
                                        desc:
                                            "A detention raises a vessel's risk profile, leading to more frequent and detailed inspections in the future across all MoU regions.",
                                    },
                                ].map(({title, desc}) => (
                                    <li key={title}
                                        className="rounded-sm border border-slate-200/70 p-4 dark:border-white/10 dark:bg-white/5">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0A436A] ring-2 ring-[#0A436A]/20"/>
                                            <div>
                                                <p className="font-semibold text-slate-900">{title}</p>
                                                <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* Proactive Preparation */}
                        <motion.section id="proactive-prep" variants={item} className="scroll-mt-24">
                            <h2 className="text-2xl font-semibold tracking-tight text-[#0A436A]">
                                Our Proactive PSC Preparation Services
                            </h2>
                            <p className="mt-3 leading-relaxed text-slate-700">
                                The most effective way to handle a PSC inspection is to prevent a detention before
                                it happens. BKI offers expert services to ensure your fleet is always prepared:
                            </p>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {[
                                    {
                                        title: "PSC Pre-Arrival Audits",
                                        desc:
                                            "We can conduct voluntary, pre-emptive mock PSC inspections to identify and rectify potential deficiencies before your vessel enters a high-scrutiny port region.",
                                    },
                                    {
                                        title: "Fleet Trend Analysis",
                                        desc:
                                            "We analyze global and regional PSC data to identify common deficiencies and CIC focus areas, providing your fleet with targeted guidance.",
                                    },
                                    {
                                        title: "Crew Training & Awareness",
                                        desc:
                                            "We offer customized training for your crew on how to prepare for and confidently manage a PSC inspection, focusing on the most common areas of questioning and inspection.",
                                    },
                                ].map(({title, desc}) => (
                                    <div key={title}
                                         className="rounded-sm border border-slate-200/70 p-4 shadow-sm transition-shadow hover:shadow-md">
                                        <p className="font-semibold text-[#0A436A]">{title}</p>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Rapid Response */}
                        <motion.section id="rapid-response" variants={item} className="scroll-mt-24">
                            <h2 className="text-2xl font-semibold tracking-tight text-[#0A436A]">
                                Our Rapid Response Detention Support
                            </h2>
                            <p className="mt-3 leading-relaxed text-slate-700">
                                In the unfortunate event a detention occurs on an Indonesian-flagged vessel, BKI
                                provides urgent and expert support as a Recognized Organization. When requested by
                                the owner, our goal is to resolve the situation and get your vessel sailing as
                                quickly as possible. Our process includes:
                            </p>
                            <ol className="mt-4 space-y-3">
                                {[
                                    {
                                        title: "Immediate Mobilization",
                                        desc:
                                            "Our nearest technical expert is dispatched to liaise with the Port State authorities, the crew, and the owner.",
                                    },
                                    {
                                        title: "Detailed Root Cause Analysis",
                                        desc:
                                            "We conduct a thorough re-examination of the findings from the Port State to understand the root cause of each deficiency.",
                                    },
                                    {
                                        title: "Corrective Action Plan",
                                        desc:
                                            "We work with you to develop a clear, practical plan of corrective actions—both temporary and permanent—that satisfies the PSCOs.",
                                    },
                                    {
                                        title: "Verification and Release",
                                        desc:
                                            "We oversee the implementation of the corrective actions and present the evidence to the authorities to facilitate the vessel's release.",
                                    },
                                ].map(({title, desc}, i) => (
                                    <li key={title}
                                        className="rounded-sm border border-slate-200/70 p-4">
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0A436A]/30 text-sm font-semibold text-[#0A436A]">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#0A436A]">{title}</p>
                                                <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </motion.section>
                    </motion.div>
                </div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
