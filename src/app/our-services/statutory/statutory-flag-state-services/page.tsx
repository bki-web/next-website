"use client";

import {motion, Variants} from "framer-motion";
import {Anchor, BadgeCheck, CheckCircle2, FileCheck, Flag, Globe2, Landmark, ScrollText, Ship} from "lucide-react";
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";

const container: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.6, ease: "easeOut", staggerChildren: 0.06, delayChildren: 0.1},
    },
};

const item: Variants = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0, transition: {duration: 0.55, ease: "easeOut"}},
};

function Bullet({children}: { children: React.ReactNode }) {
    return (
        <li className="relative pl-7 leading-relaxed text-sm md:text-base text-zinc-700 dark:text-zinc-300">
            <CheckCircle2 className="absolute left-0 top-1.5 h-4 w-4 md:h-5 md:w-5 text-emerald-500" aria-hidden/>
            {children}
        </li>
    );
}

function Card({icon: Icon, title, children}: { icon: React.ElementType; title: string; children: React.ReactNode }) {
    return (
        <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-sm border border-[#0A436A]/90 bg-slate-500/10 backdrop-blur p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -inset-40 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.05),transparent_50%)]"/>
            </div>
            <div className="flex items-center gap-3">
                <div
                    className="h-10 w-10 grid place-items-center rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon className="h-5 w-5" aria-hidden/>
                </div>
                <h3 className="font-semibold text-zinc-100">{title}</h3>
            </div>
            <div className="mt-4 text-zinc-300/90 text-sm md:text-[0.95rem] leading-relaxed">
                {children}
            </div>
        </motion.div>
    );
}

export default function StatutoryFlagStateServicesPage() {
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
                        text: "Statutory Flag State Services",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Statutory Flag State Services"}
            />

            <section id="statutory" className="relative py-16 md:py-24 bg-[#0A436A]">
                {/* subtle background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A436A]/10 to-transparent"/>
                    <div
                        className="absolute left-1/2 top-10 -translate-x-1/2 h-72 w-[42rem] blur-3xl opacity-40 bg-[#0A436A]/20 rounded-full"/>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.2}}
                    className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                >
                    {/* Header */}
                    <motion.div variants={item} className="max-w-3xl">
                        <h2 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight text-white">
                            A Dual Approach to Global & National Compliance
                        </h2>
                        <p className="mt-4 text-zinc-300">
                            Every commercial vessel operates under a complex web of regulations, from broad
                            international conventions set by the IMO to the specific national laws of its Flag State.
                            Navigating this requires a partner with a dual perspective—one that understands the global
                            stage and has deep, authoritative knowledge of local requirements.
                        </p>
                        <p className="mt-3 text-zinc-300">
                            As a Recognized Organization (RO) for numerous Flag States worldwide, BKI provides this
                            unique advantage. We offer a comprehensive suite of statutory services that ensure your
                            vessels meet the highest standards of safety and environmental protection, whether trading
                            internationally or operating in domestic waters.
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <motion.div variants={item}
                                className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"/>

                    {/* Two-column content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <motion.div variants={item} className="lg:col-span-5 space-y-6">
                            <Card icon={Globe2} title="Our Comprehensive Statutory Services">
                                <p>
                                    BKI provides a seamless, end-to-end service to ensure shipowners can meet the
                                    requirements of their flag, wherever their vessels may be.
                                </p>
                            </Card>

                            <Card icon={Flag} title="Global Services for International Fleets">
                                <ul className="mt-2 space-y-2">
                                    <Bullet>
                                        Conduct all required surveys for <span className="font-medium">SOLAS, MARPOL, MLC</span>,
                                        and other key IMO conventions.
                                    </Bullet>
                                    <Bullet>Review and approve vessel plans and manuals.</Bullet>
                                    <Bullet>Issue and endorse all necessary international certificates to ensure your
                                        vessel&apos;s uninterrupted worldwide operation.</Bullet>
                                </ul>
                            </Card>
                        </motion.div>

                        <motion.div variants={item} className="lg:col-span-7">
                            <Card icon={Landmark} title="Unmatched Expertise for the Indonesian Flag">
                                <p>
                                    Our global capabilities are complemented by our deep, authoritative knowledge as the
                                    national classification society for Indonesia. We are the leading experts in
                                    verifying compliance with all Indonesian national regulations.
                                </p>

                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="rounded-sm border border-emerald-500/60 p-4">
                                        <div
                                            className="flex items-center gap-2 text-sm font-semibold text-emerald-500">
                                            <BadgeCheck className="h-4 w-4 text-emerald-500" aria-hidden/> Mandatory
                                            Classification
                                        </div>
                                        <ul className="mt-3 space-y-2">
                                            <Bullet>Length between perpendiculars of <strong>20 meters</strong> or more.</Bullet>
                                            <Bullet>Gross Tonnage of <strong>100</strong> or more.</Bullet>
                                            <Bullet>Main propulsion engine of <strong>250 HP</strong> or more.</Bullet>
                                        </ul>
                                    </div>

                                    <div className="rounded-sm border border-emerald-500/60 p-4">
                                        <div
                                            className="flex items-center gap-2 text-sm font-semibold text-emerald-500">
                                            <Ship className="h-4 w-4 text-emerald-500" aria-hidden/> Regulations for
                                            Convention Vessels
                                        </div>
                                        <p className="mt-3 text-sm text-zinc-300">
                                            Ensuring Indonesian flagged vessels subject to international conventions
                                            meet all standards stipulated by the Government of Indonesia.
                                        </p>
                                    </div>

                                    <div
                                        className="rounded-sm border border-emerald-500/60  p-4 md:col-span-2">
                                        <div
                                            className="flex items-center gap-2 text-sm font-semibold text-emerald-500">
                                            <ScrollText className="h-4 w-4 text-emerald-500" aria-hidden/> Standards for
                                            Non-Convention Vessels (NCVS)
                                        </div>
                                        <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                            <Bullet>All merchant vessels on domestic voyages.</Bullet>
                                            <Bullet>Merchant vessels &lt; 500 GT on international voyages.</Bullet>
                                            <Bullet>Vessels with non-mechanical propulsion (barges, pontoons, sailing
                                                vessels).</Bullet>
                                            <Bullet>Traditional wooden motor sailing vessels (KLM) and other wooden
                                                vessels with propulsion engines.</Bullet>
                                            <Bullet>Fishing vessels.</Bullet>
                                            <Bullet>Pleasure craft.</Bullet>
                                            <Bullet>Vessels with novel designs.</Bullet>
                                            <Bullet>State vessels used for commercial purposes.</Bullet>
                                            <Bullet>All existing vessels modified for other purposes.</Bullet>
                                        </ul>
                                    </div>

                                    <div
                                        className="rounded-sm border border-emerald-500/60 p-4 md:col-span-2">
                                        <div
                                            className="flex items-center gap-2 text-sm font-semibold text-emerald-500">
                                            <FileCheck className="h-4 w-4 text-emerald-500" aria-hidden/> Governing
                                            National Legislation
                                        </div>
                                        <ul className="mt-3 space-y-2">
                                            <Bullet>
                                                Regulation of the Minister of Transportation No. <strong>KM 65 of
                                                2009</strong> concerning the Standard for Indonesian Flagged
                                                Non-Convention Vessels.
                                            </Bullet>
                                            <Bullet>
                                                The <strong>Official NCVS Books</strong> and their associated technical
                                                guidelines.
                                            </Bullet>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Outro */}
                    <motion.div variants={item} className="mt-10">
                        <div className="flex flex-wrap items-center gap-3">
                            <div
                                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                                <Anchor className="h-4 w-4" aria-hidden/>
                                Single, reliable partner for all your statutory needs.
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
