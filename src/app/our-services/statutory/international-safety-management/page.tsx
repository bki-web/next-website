"use client";

import {motion, Variants} from "framer-motion";
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";
import React from "react";

const fadeInUp: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

const stagger: Variants = {
    hidden: {},
    show: {transition: {staggerChildren: 0.08, delayChildren: 0.05}},
};

export default function InternationalSafetyManagementPage() {
    const router = useRouter();
    return (
        <div className="relative min-h-screen w-full overflow-hidden text-white">
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
                        text: "International Safety Management",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"International Safety Management"}
            />

            <section
                className="relative overflow-hidden bg-gradient-to-b from-[#0A436A] to-[#0A436A]/75">
                {/* Subtle background ornament */}
                <div
                    className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
                    <div
                        className="absolute -top-32 left-1/2 h-64 w-[80rem] -translate-x-1/2 rounded-full bg-[conic-gradient(at_top_right,var(--tw-gradient-stops))] opacity-60 blur-2xl from-sky-900/30 via-cyan-900/20 to-slate-800/20"/>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, margin: "-80px"}}
                    className="py-20 2xl:px-28 xl:px-24 lg:px-20 px-4"
                >
                    {/* Header */}
                    <motion.header variants={stagger} className="mb-12">
                        <motion.p
                            variants={fadeInUp}
                            className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-sky-200/90"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-500"/>
                            International Maritime Compliance
                        </motion.p>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white"
                        >
                            International Safety Management (ISM) Code
                        </motion.h1>
                        <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap items-center gap-3">
                            <Button text={'Go to ISM Register'} style="white"
                                    onClick={() => router.push('/our-services/statutory/international-safety-management/ism-register')}/>
                        </motion.div>
                    </motion.header>

                    {/* Intro */}
                    <motion.div variants={fadeInUp} className="prose max-w-none prose-slate">
                        <p className="text-white">
                            Recognizing the critical role of the human factor in maritime safety, the IMO established
                            the
                            <strong> International Safety Management (ISM) Code</strong>. Consolidated within the SOLAS
                            Convention, the ISM Code requires
                            shipping companies to establish and maintain a <strong>Safety Management System
                            (SMS)</strong> to prevent accidents and protect
                            the marine environment. Compliance is mandatory, and vessels without valid certification
                            face operational difficulties
                            in both international and domestic waters.
                        </p>
                    </motion.div>

                    {/* Services: DOC & SMC */}
                    <motion.section
                        variants={stagger}
                        className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
                        aria-labelledby="ism-services"
                    >
                        <h2 id="ism-services" className="sr-only">
                            BKI&apos;s ISM Code Services
                        </h2>
                        <ServiceCard
                            title="Document of Compliance (DOC)"
                            caption="Issued to the company"
                            points={[
                                "Confirms the shoreside SMS meets ISM requirements",
                                "Short-term DOC issued by BKI (valid 5 months)",
                                "Permanent DOC arranged with the Government",
                            ]}
                        />
                        <ServiceCard
                            title="Safety Management Certificate (SMC)"
                            caption="Issued to each vessel"
                            points={[
                                "Confirms onboard SMS is effectively implemented",
                                "Short-term SMC issued by BKI (valid 5 months)",
                                "Permanent SMC arranged with the Government",
                            ]}
                        />
                    </motion.section>

                    {/* Path to Certification */}
                    <motion.section variants={stagger} className="mt-20" aria-labelledby="path">
                        <motion.h2 variants={fadeInUp} id="path"
                                   className="text-2xl font-semibold text-white">
                            The Path to Certification
                        </motion.h2>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {/* DOC Flow */}
                            <motion.div variants={fadeInUp}
                                        className="rounded-sm border p-6 shadow-sm border-slate-800 bg-slate-900">
                                <FlowHeader label="Procedure for Document of Compliance (DOC)"/>
                                <ol className="mt-4 space-y-5">
                                    <StepItem step={1} title="Application"
                                              desc="Submit the form and your company's SMS manual to BKI (Statutory Division) or nearest Branch."/>
                                    <StepItem step={2} title="Manual Approval"
                                              desc="BKI reviews the SMS manual and returns it for correction if any insufficiencies are found."/>
                                    <StepItem step={3} title="Initial Verification (Office Audit)"
                                              desc="A BKI auditor verifies the effective implementation at the company's office."/>
                                    <StepItem step={4} title="Certification"
                                              desc="Audit Report + short-term DOC (valid 5 months). BKI arranges permanent DOC issuance after NCs are closed."/>
                                </ol>
                            </motion.div>

                            {/* SMC Flow */}
                            <motion.div variants={fadeInUp}
                                        className="rounded-sm border p-6 shadow-sm border-slate-800 bg-slate-900">
                                <FlowHeader label="Procedure for Safety Management Certificate (SMC)"/>
                                <ol className="mt-4 space-y-5">
                                    <StepItem step={1} title="Prerequisite"
                                              desc="Vessel must be managed by a company holding a valid DOC."/>
                                    <StepItem step={2} title="Application"
                                              desc="Submit the form with a copy of the company's DOC to BKI."/>
                                    <StepItem step={3} title="Onboard Verification (Ship Audit)"
                                              desc="A BKI auditor verifies the onboard implementation against the ISM Code."/>
                                    <StepItem step={4} title="Certification"
                                              desc="Audit Report + short-term SMC (valid 5 months). BKI arranges permanent SMC issuance with the Government."/>
                                </ol>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Maintenance Schedule */}
                    <motion.section variants={stagger} className="mt-20" aria-labelledby="maintenance">
                        <motion.h2 variants={fadeInUp} id="maintenance"
                                   className="text-2xl font-semibold text-white">
                            Maintaining Your Certification
                        </motion.h2>
                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <motion.div variants={fadeInUp}
                                        className="rounded-sm border p-6 shadow-sm border-slate-800 bg-slate-900">
                                <Badge>For the DOC (Company)</Badge>
                                <ul className="mt-4 space-y-3">
                                    <CheckItem title="Annual Verification"
                                               desc="Every year, within 3 months before/after the anniversary date."/>
                                    <CheckItem title="Renewal Verification"
                                               desc="In the 5th year, within 6 months prior to expiry."/>
                                </ul>
                            </motion.div>
                            <motion.div variants={fadeInUp}
                                        className="rounded-sm border p-6 shadow-sm border-slate-800 bg-slate-900">
                                <Badge>For the SMC (Vessel)</Badge>
                                <ul className="mt-4 space-y-3">
                                    <CheckItem title="Intermediate Verification"
                                               desc="Single audit between the 2nd and 3rd anniversary dates."/>
                                    <CheckItem title="Renewal Verification"
                                               desc="In the 5th year, within 6 months prior to expiry."/>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Interim Certificates */}
                    <motion.section variants={stagger} className="mt-20" aria-labelledby="interim">
                        <motion.h2 variants={fadeInUp} id="interim"
                                   className="text-2xl font-semibold text-white">
                            Interim DOC & SMC Certification
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="mt-3 max-w-3xl text-slate-300">
                            BKI may issue Interim Certificates so companies or vessels can begin operations while
                            preparing for full verification.
                            Requirements: an SMS manual and a clear implementation plan. <strong>Interim DOC</strong> is
                            valid for 12 months; <strong>Interim SMC</strong>
                            is valid for 6 months.
                        </motion.p>

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                "Company is newly established",
                                "New ship type is added to an existing DOC",
                                "Vessel is newly built",
                                "Vessel changes ownership or management",
                                "Vessel changes its flag",
                            ].map((txt) => (
                                <motion.div
                                    key={txt}
                                    variants={fadeInUp}
                                    className="group rounded-sm border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md border-slate-800 bg-slate-900"
                                >
                                    <div className="flex items-start gap-3">
                  <span
                      className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[10px] font-bold border-sky-700 text-sky-300">
                    ✓
                  </span>
                                        <p className="text-sm text-slate-300">{txt}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Indonesian National Requirements */}
                    <motion.section variants={stagger} className="mt-20" aria-labelledby="national">
                        <motion.h2 variants={fadeInUp} id="national"
                                   className="text-2xl font-semibold text-white">
                            Indonesian National Requirements (PM 45 of 2012)
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="mt-3 max-w-3xl text-slate-300">
                            Applicability for Indonesian-flagged vessels under the national Safety Management rules:
                        </motion.p>

                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                            <ApplicabilityCard title="Passenger Ships"
                                               items={["All sizes, including high-speed passenger ships."]}/>
                            <ApplicabilityCard title="Tankers ≥150 GT"
                                               items={["Oil, chemical, and liquefied gas tankers of 150 GT and above."]}/>
                            <ApplicabilityCard
                                title="Other Vessels ≥500 GT"
                                items={[
                                    "Cargo ships, bulk carriers, high-speed cargo ships",
                                    "Fishing vessels, MODUs, FSUs, FPSOs, man-barges",
                                ]}
                            />
                        </div>
                    </motion.section>
                </motion.div>
            </section>

            <ContactUsSection/>
        </div>
    );
}

function ServiceCard({
                         title,
                         caption,
                         points,
                     }: {
    title: string;
    caption: string;
    points: string[];
}) {
    return (
        <motion.article
            variants={fadeInUp}
            className="relative overflow-hidden rounded-sm border p-6 shadow-sm border-slate-800 bg-slate-900"
        >
            <div
                className="absolute right-0 top-0 -z-0 h-24 w-24 -translate-y-1/2 translate-x-1/3 rounded-full blur-2xl bg-sky-900/30"/>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-sky-300/90">{caption}</p>
            <ul className="mt-4 space-y-2">
                {points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-sky-500"/>
                        <span>{p}</span>
                    </li>
                ))}
            </ul>
        </motion.article>
    );
}

function FlowHeader({label}: { label: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className="h-5 w-1.5 rounded-full bg-sky-500"/>
            <h3 className="text-base font-medium text-white">{label}</h3>
        </div>
    );
}

function StepItem({step, title, desc}: { step: number; title: string; desc: string }) {
    return (
        <li className="relative pl-10">
      <span
          className="absolute left-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border font-semibold shadow-sm border-sky-700 bg-slate-900 text-sky-300">
        {step}
      </span>
            <div>
                <p className="font-medium text-white">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{desc}</p>
            </div>
        </li>
    );
}

function Badge({children}: { children: React.ReactNode }) {
    return (
        <span
            className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide border-sky-800 bg-sky-900/30 text-sky-200">
      <span className="h-1.5 w-1.5 rounded-full bg-sky-500"/>
            {children}
    </span>
    );
}

function CheckItem({title, desc}: { title: string; desc: string }) {
    return (
        <li className="flex items-start gap-3">
            <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 text-sky-400">
                <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 0 1 .006 1.414l-6.9 6.95a1 1 0 0 1-1.43.01L3.29 9.58a1 1 0 1 1 1.42-1.41l3.04 3.06 6.18-6.22a1 1 0 0 1 1.414-.006Z"
                    clipRule="evenodd"
                />
            </svg>
            <div>
                <p className="font-medium text-white">{title}</p>
                <p className="text-sm text-slate-300">{desc}</p>
            </div>
        </li>
    );
}

function ApplicabilityCard({title, items}: { title: string; items: string[] }) {
    return (
        <motion.article
            variants={fadeInUp}
            className="rounded-sm border p-6 shadow-sm border-slate-800 bg-slate-900"
        >
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-500"/>
                        <span>{it}</span>
                    </li>
                ))}
            </ul>
        </motion.article>
    );
}

