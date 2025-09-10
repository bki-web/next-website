'use client';
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion, Variants} from "framer-motion";

const container: Variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.12, delayChildren: 0.05},
    },
};


const item: Variants = {
    hidden: {opacity: 0, y: 18},
    show: {opacity: 1, y: 0, transition: {duration: 0.55, ease: "easeOut"}},
};


const card: Variants = {
    hidden: {opacity: 0, y: 16},
    show: {opacity: 1, y: 0, transition: {duration: 0.55, ease: "easeOut"}},
};

const links = [
    {id: "annex1", label: "Annex I – Oil"},
    {id: "annex2", label: "Annex II – NLS"},
    {id: "annex3", label: "Annex III – Packaged"},
    {id: "annex4", label: "Annex IV – Sewage"},
    {id: "annex5", label: "Annex V – Garbage"},
    {id: "annex6", label: "Annex VI – Air & Efficiency"},
    {id: "related", label: "Related Conventions"},
];

function SectionCard({
                         id,
                         title,
                         children,
                     }: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <motion.section
            id={id}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.2}}
            className="rounded-sm border border-white/10 bg-white/5 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur md:p-8"
        >
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
            <div className="mt-3 text-sm/6 text-slate-300 md:text-base/7">{children}</div>
        </motion.section>
    );
}

function List({
                  items,
              }: {
    items: { k: string; v: string }[];
}) {
    return (
        <ul className="mt-5 divide-y divide-white/5 rounded-sm border border-white/10 bg-white/0">
            {items.map(({k, v}, idx) => (
                <li key={idx} className="grid gap-2 p-4 md:grid-cols-[240px,1fr] md:gap-6 md:p-5">
                    <div className="text-sm font-medium text-slate-100 md:text-base">{k}</div>
                    <div className="text-sm/6 text-slate-300 md:text-base/7">{v}</div>
                </li>
            ))}
        </ul>
    );
}

export default function MarpolPage() {
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
                        text: "MARPOL",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"MARPOL"}
                description={
                    "Protecting the Marine Environment"
                }
            />

            <section
                className="relative isolate overflow-hidden bg-gradient-to-b from-[#0A436A] via-[#0A436A]/90 to-[#0A436A]/70 text-slate-100 2xl:px-28 xl:px-24 lg:px-20 px-4">
                {/* soft glow */}
                <div
                    className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(80%_60%_at_50%_0%,#000_40%,transparent)]">
                    <div
                        className="absolute left-1/2 top-0 h-80 w-[1200px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl"/>
                </div>

                <div className="mx-auto max-w-7xl py-20 md:py-24">
                    {/* Header */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="mx-auto max-w-3xl text-center"
                    >
                        <motion.p variants={item} className="text-sm/6 text-slate-300 md:text-base/7">
                            <span className="font-medium text-slate-100">The Global Standard for Marine Environmental Protection.</span>
                            {" "}The International Convention for the Prevention of Pollution from Ships (MARPOL) is the
                            primary international treaty to prevent pollution from operational or accidental causes. As
                            a fully authorized Recognized Organization (RO), BKI provides end-to-end support across all
                            six technical Annexes—from plan approvals to onboard surveys and certification—so your fleet
                            stays compliant and your operations stay moving worldwide.
                        </motion.p>
                    </motion.div>

                    <div className="mt-14 grid gap-10 md:grid-cols-[260px,1fr]">
                        {/* Side TOC */}
                        <aside className="md:sticky md:top-24 md:self-start">
                            <nav aria-label="On this page"
                                 className="rounded-sm border border-white/10 bg-white/5 p-4 backdrop-blur">
                                <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">Contents
                                </div>
                                <ul className="mt-3 space-y-1.5 text-sm">
                                    {links.map((l) => (
                                        <li key={l.id}>
                                            <a
                                                href={`#${l.id}`}
                                                className="block rounded-sm px-2 py-1.5 text-slate-300 outline-none transition hover:text-slate-100 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-sky-400/50"
                                            >
                                                {l.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>

                        {/* Main content */}
                        <div className="space-y-10">
                            {/* Annex I */}
                            <SectionCard id="annex1" title="Annex I: Prevention of Pollution by Oil">
                                <p>
                                    Covers operational measures and accidental discharges related to oil. BKI performs
                                    the required surveys and issues the International Oil Pollution Prevention (IOPP)
                                    Certificate, approves Shipboard Oil Pollution Emergency Plans (SOPEP), and conducts
                                    Condition Assessment Scheme (CAS) enhanced surveys for single-hull oil tankers.
                                </p>
                                <List items={[
                                    {
                                        k: "International Oil Pollution Prevention (IOPP) Certificate",
                                        v: "Surveys and certification of vessel construction, equipment, and procedures for handling oil and oily water.",
                                    },
                                    {
                                        k: "Approval of Shipboard Oil Pollution Emergency Plan (SOPEP)",
                                        v: "Mandatory spill response plan review and approval for effectiveness and compliance.",
                                    },
                                    {
                                        k: "Condition Assessment Scheme (CAS)",
                                        v: "Enhanced structural surveys for single-hull oil tankers to confirm continued fitness for service.",
                                    },
                                ]}/>
                            </SectionCard>

                            {/* Annex II */}
                            <SectionCard id="annex2"
                                         title="Annex II: Control of Pollution by Noxious Liquid Substances (NLS)">
                                <p>
                                    Sets discharge criteria and control measures for noxious liquid substances carried
                                    in bulk. BKI surveys chemical tankers and issues the Noxious Liquid Substances (NLS)
                                    Certificate in accordance with the IBC Code.
                                </p>
                                <List items={[
                                    {
                                        k: "Noxious Liquid Substances (NLS) Certificate",
                                        v: "Survey and certification for safe handling and transport of NLS in line with the IBC Code.",
                                    },
                                ]}/>
                            </SectionCard>

                            {/* Annex III */}
                            <SectionCard id="annex3" title="Annex III: Harmful Substances in Packaged Form">
                                <p>
                                    Targets pollution prevention from harmful substances transported in packaged form
                                    (e.g., drums, freight containers). Standards cover marking, labeling, documentation,
                                    and stowage; compliance is integrated with the International Maritime Dangerous
                                    Goods (IMDG) Code.
                                </p>
                                <List items={[
                                    {
                                        k: "Scope",
                                        v: "Controls on package marking, labeling, documentation, and stowage to minimize loss overboard and pollution risk.",
                                    },
                                ]}/>
                            </SectionCard>

                            {/* Annex IV */}
                            <SectionCard id="annex4" title="Annex IV: Prevention of Pollution by Sewage">
                                <p>
                                    Regulates sewage discharges from ships. BKI surveys installations and issues the
                                    International Sewage Pollution Prevention (ISPP) Certificate for approved sewage
                                    treatment plants or holding tanks.
                                </p>
                                <List items={[
                                    {
                                        k: "International Sewage Pollution Prevention (ISPP) Certificate",
                                        v: "Verification of approved sewage systems leading to certification.",
                                    },
                                ]}/>
                            </SectionCard>

                            {/* Annex V */}
                            <SectionCard id="annex5" title="Annex V: Prevention of Pollution by Garbage">
                                <p>
                                    Addresses garbage management and prohibits discharge of plastics at sea. BKI reviews
                                    and approves Garbage Management Plans and verifies correct maintenance of the
                                    Garbage Record Book.
                                </p>
                                <List items={[
                                    {
                                        k: "Garbage Management Plan Approval",
                                        v: "Review and approval of shipboard procedures, equipment, and records for compliant garbage handling and disposal.",
                                    },
                                ]}/>
                            </SectionCard>

                            {/* Annex VI */}
                            <SectionCard id="annex6" title="Annex VI: Prevention of Air Pollution & Energy Efficiency">
                                <p>
                                    Limits SOx/NOx and other air pollutants and establishes mandatory energy-efficiency
                                    measures to reduce greenhouse gas emissions.
                                </p>
                                <List items={[
                                    {
                                        k: "International Air Pollution Prevention (IAPP) Certificate",
                                        v: "Surveys and certification of ship and engines against SOx/NOx and other emission standards.",
                                    },
                                    {
                                        k: "Engine International Air Pollution Prevention (EIAPP) & NOx Technical File",
                                        v: "Engine certification review and NOx Technical File verification, prerequisite to IAPP.",
                                    },
                                    {
                                        k: "International Energy Efficiency Certificate (IEEC)",
                                        v: "Compliance with EEDI for newbuilds and EEXI for existing ships.",
                                    },
                                    {
                                        k: "Energy Efficiency Design Index (EEDI) Review",
                                        v: "Two-stage verification at design and sea-trial phases.",
                                    },
                                    {
                                        k: "Ship Energy Efficiency Management Plan (SEEMP) Approval",
                                        v: "Review and approval of SEEMP Parts I–III, supporting CII management.",
                                    },
                                ]}/>
                            </SectionCard>

                            {/* Related Conventions */}
                            <SectionCard id="related" title="Related Environmental Conventions">
                                <p>
                                    BKI also certifies compliance with additional international frameworks that protect
                                    the marine environment.
                                </p>
                                <List items={[
                                    {
                                        k: "Ballast Water Management (BWM) Convention",
                                        v: "Approval of Ballast Water Management Plan (BWMP) and surveys for the International Ballast Water Management Certificate.",
                                    },
                                    {
                                        k: "Anti-Fouling System (AFS) Convention",
                                        v: "Surveys and certification that a ship’s anti-fouling system prevents harmful releases to the sea.",
                                    },
                                ]}/>
                            </SectionCard>
                        </div>
                    </div>
                </div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
