'use client';

import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion, Variants} from "framer-motion";

// Elegant Ballast Water Management section
// - Tailwind CSS for styling
// - Framer Motion for subtle scroll/hover animations
// Drop this into something like: src/components/BWMSection.tsx
// Then render <BWMSection /> in your page.

const fadeIn: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

const stagger: Variants = {
    hidden: {},
    show: {transition: {staggerChildren: 0.08, delayChildren: 0.05}},
};


export default function BallastWaterManagementPage() {
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
                        text: "Ballast Water Management",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Ballast Water Management"}
                customOverlayClass={"from-slate-900/60"}
            />

            <section className="relative overflow-hidden bg-[#0A436A] text-slate-100">
                {/* Background aesthetics */}
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"/>
                    <div
                        className="absolute bottom-[-20%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-emerald-400/10 blur-3xl"/>
                    <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900/60 to-transparent"/>
                    <div
                        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900/60 to-transparent"/>
                </div>

                <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                    {/* Eyebrow + Title */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.3}}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                            Protecting Our Marine Ecosystems
                        </h1>
                        <p className="mt-4 text-slate-300">
                            The transfer of harmful aquatic organisms via ballast water threatens
                            biodiversity and coastal economies. The IMO’s BWM Convention sets a
                            global framework to prevent and eliminate these risks.
                        </p>
                    </motion.div>

                    {/* Intro copy */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.2}}
                        className="mx-auto mt-10 max-w-4xl text-slate-300"
                    >
                        <p>
                            When ships intake ballast water in one port and discharge in
                            another, invasive species can disrupt the natural balance and harm
                            local marine life. To combat this, the International Maritime
                            Organization (IMO) established the BWM Convention.
                        </p>
                    </motion.div>

                    {/* Standards cards */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.2}}
                        className="mt-12 grid gap-6 md:grid-cols-2"
                    >
                        <motion.article
                            variants={fadeIn}
                            className="group relative overflow-hidden rounded-sm border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-6 shadow-2xl ring-1 ring-white/5"
                        >
                            <div
                                className="absolute inset-px rounded-[1rem] bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                            <div className="relative">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-sm bg-cyan-500/15 ring-1 ring-cyan-400/30">
                                        <svg viewBox="0 0 24 24" width={20} height={20} className="fill-cyan-300">
                                            <path d="M3 7h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-100">D‑1 Standard — Ballast Water
                                        Exchange</h3>
                                </div>
                                <p className="mt-3 text-slate-300">
                                    Requires open-sea exchange away from coastal areas, with at
                                    least <span
                                    className="font-semibold text-slate-100">95% volumetric efficiency</span>.
                                </p>
                            </div>
                        </motion.article>

                        <motion.article
                            variants={fadeIn}
                            className="group relative overflow-hidden rounded-sm border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-6 shadow-2xl ring-1 ring-white/5"
                        >
                            <div
                                className="absolute inset-px rounded-[1rem] bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                            <div className="relative">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-sm bg-emerald-500/15 ring-1 ring-emerald-400/30">
                                        <svg viewBox="0 0 24 24" width={20} height={20} className="fill-emerald-300">
                                            <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-100">D‑2 Standard — Ballast Water
                                        Performance</h3>
                                </div>
                                <p className="mt-3 text-slate-300">
                                    Limits viable organisms discharged. Most vessels must install an
                                    approved <span className="font-semibold text-slate-100">Ballast Water Management Treatment System (BWMTS)</span>.
                                </p>
                            </div>
                        </motion.article>
                    </motion.div>

                    {/* Convention details */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.2}}
                        className="mt-14 rounded-sm border border-slate-800 bg-slate-900/40 p-6 ring-1 ring-white/5"
                    >
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                            <div>
                                <h4 className="text-xl font-semibold text-slate-100">
                                    The BWM Convention: A Global Standard for Marine Safety
                                </h4>
                                <p className="mt-2 max-w-3xl text-slate-300">
                                    Entered into force on <span
                                    className="font-medium text-slate-100">September 8, 2017</span>, providing a
                                    comprehensive framework for managing ballast water and sediments to protect marine
                                    ecosystems worldwide.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <div
                                    className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-3 py-1 text-sm ring-1 ring-slate-700">
                                    Effective since 2017
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Implementation & Compliance */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.2}}
                        className="mt-12 grid gap-6 md:grid-cols-2"
                    >
                        <motion.div variants={fadeIn}
                                    className="rounded-sm border border-slate-800 bg-slate-900/40 p-6 ring-1 ring-white/5">
                            <h5 className="text-lg font-semibold text-slate-100">Implementation & Compliance —
                                BWMTS</h5>
                            <ul className="mt-4 space-y-3 text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span
                                        className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-cyan-500/15 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/30">1</span>
                                    <div>
                                        <p className="font-medium text-slate-100">New Ships</p>
                                        <p>Keel laid on/after 8 Sep 2017: BWMTS installed upon delivery.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span
                                        className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-emerald-500/15 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-400/30">2</span>
                                    <div>
                                        <p className="font-medium text-slate-100">Existing Ships</p>
                                        <p>Install BWMTS at the first IOPP renewal survey after the Convention date;
                                            certain cases allow final compliance by the second renewal survey.</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm text-slate-400">Non‑compliance can result in fines and vessel
                                detention.</p>
                        </motion.div>

                        {/* Services list */}
                        <motion.div variants={fadeIn}
                                    className="rounded-sm border border-slate-800 bg-slate-900/40 p-6 ring-1 ring-white/5">
                            <h5 className="text-lg font-semibold text-slate-100">Our Services: Your Partner in BWM
                                Compliance</h5>
                            <ul className="mt-4 space-y-3">
                                {[
                                    {
                                        title: "Assistance in Establishing a BWM Plan",
                                        desc: "Develop a compliant plan tailored to your fleet and operations.",
                                    },
                                    {
                                        title: "Approval and Certification Services",
                                        desc: "Issue International BWM Certificates or Statements of Compliance.",
                                    },
                                    {
                                        title: "Technical Advisory",
                                        desc: "Select and install the right, type‑approved BWMTS for your vessels.",
                                    },
                                    {
                                        title: "Crew Training",
                                        desc: "Ensure officers and crew can operate per the BWM plan and BWMTS.",
                                    },
                                ].map((item, i) => (
                                    <li key={i}
                                        className="group flex items-start gap-3 rounded-sm p-2 transition-colors hover:bg-slate-800/40">
                  <span
                      className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-sm bg-emerald-500/15 ring-1 ring-emerald-400/30">
                    <svg viewBox="0 0 24 24" width={16} height={16} className="fill-emerald-300">
                      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </span>
                                        <div>
                                            <p className="font-medium text-slate-100">{item.title}</p>
                                            <p className="text-slate-300">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
