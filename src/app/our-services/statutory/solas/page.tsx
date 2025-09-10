'use client';
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion, Variants} from "framer-motion";
import {Boxes, FileCheck, FileCog, LifeBuoy, Package, Radio, ShieldCheck, Ship, Shuffle} from "lucide-react";

const container: Variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.08, delayChildren: 0.05}},
};

const fadeUp: Variants = {
    hidden: {opacity: 0, y: 16, filter: "blur(4px)"},
    show: {opacity: 1, y: 0, filter: "blur(0px)", transition: {duration: 0.5, ease: "easeOut"}},
};

const card: Variants = {
    hidden: {opacity: 0, y: 18},
    show: {opacity: 1, y: 0, transition: {duration: 0.45, ease: "easeOut"}},
    hover: {y: -4, transition: {type: "spring", stiffness: 260, damping: 20}},
};

export default function SOLASPage() {
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
                        text: "SOLAS",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"SOLAS"}
                description={
                    "The Cornerstone of Maritime Safety"
                }
            />

            <section
                className="relative overflow-hidden bg-[radial-gradient(60%_60%_at_100%_0%,#0ea5e980,#0A436A70),radial-gradient(60%_60%_at_0%_100%,#22d3ee66,transparent)]">
                {/* Subtle grid + vignette */}
                <div
                    className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
                    <div
                        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]"/>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.2}}
                    className="py-20 2xl:px-28 xl:px-24 lg:px-20 px-4"
                >
                    {/* Heading */}
                    <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
                        {/*<div*/}
                        {/*    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">*/}
                        {/*    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"/>*/}
                        {/*    SOLAS*/}
                        {/*</div>*/}
                        {/*<h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">*/}
                        {/*    The Cornerstone of Maritime Safety*/}
                        {/*</h1>*/}
                        <p className="mt-5 text-base leading-7 text-white/80 md:text-lg">
                            A Commitment to the Safety of Life at Sea
                        </p>
                    </motion.div>

                    {/* Intro copy */}
                    <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-4xl text-balance text-white/85">
                        The International Convention for the Safety of Life at Sea (SOLAS) is the single most important
                        international treaty concerning the safety of merchant ships. Its primary objective is to
                        specify the minimum standards for the construction, equipment, and operation of ships,
                        compatible with their safety.
                        <br/>
                        <br/>
                        As a fully authorized Recognized Organization (RO) for numerous Flag Administrations, BKI
                        provides the comprehensive statutory services required to ensure your vessels comply with every
                        applicable SOLAS requirement. Our expert surveyors and technical staff are dedicated to
                        upholding these critical safety standards, protecting your crew, your cargo, and your assets.
                    </motion.p>

                    {/* Divider */}
                    <motion.hr variants={fadeUp} className="mx-auto mt-10 h-px w-full max-w-5xl border-0 bg-white/10"/>

                    {/* Section 1: Safety Management & Security Systems */}
                    <motion.div variants={fadeUp} className="mt-14 grid gap-6 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-semibold text-white md:text-2xl">Safety
                                Management &amp; Security Systems</h2>
                            <p className="mt-2 text-white/80">
                                Effective safety goes beyond hardware. It requires robust management systems to ensure a
                                culture of safety and security is practiced every day.
                            </p>
                        </div>
                        <div className="md:col-span-3 grid gap-4 sm:grid-cols-2">
                            <motion.article variants={card} whileHover="hover"
                                            className="group rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur-md">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <ShieldCheck className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">International Safety Management (ISM
                                            Code)</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            BKI audits both shoreside SMS and onboard implementation, leading to the
                                            issuance of the <em>Document of Compliance (DOC)</em> and <em>Safety
                                            Management Certificate (SMC)</em>.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                            <motion.article variants={card} whileHover="hover"
                                            className="group rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur-md">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <Radio className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">International Ship and Port Facility
                                            Security (ISPS Code)</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Approval of the Ship Security Plan (SSP) and onboard audits to verify
                                            implementation, culminating in the <em>International Ship Security
                                            Certificate (ISSC)</em>.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        </div>
                    </motion.div>

                    {/* Section 2: Core Surveys & Ship Certification */}
                    <motion.div variants={fadeUp} className="mt-16 grid gap-6 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-semibold text-white md:text-2xl">Core Surveys &amp; Ship
                                Certification</h2>
                            <p className="mt-2 text-white/80">
                                Full-spectrum onboard surveys certifying construction, equipment, and communication
                                systems against SOLAS standards.
                            </p>
                        </div>
                        <div className="md:col-span-3 grid gap-4 sm:grid-cols-2">
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <Ship className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Safety Construction</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Surveys of hull, machinery, and equipment to verify compliance with SOLAS
                                            construction standards; issuance of the Safety Construction Certificate.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-2 00 ring-1 ring-cyan-300/20">
                                        <LifeBuoy className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Safety Equipment</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Certification of lifesaving appliances and fire-fighting systems through
                                            detailed readiness and condition surveys.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <Radio className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Safety Radio</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Inspection of GMDSS-compliant radio installations and issuance of the Safety
                                            Radio Certificate.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <FileCheck className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Passenger Ship Safety Certificate</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Comprehensive verification of passenger ship compliance with all relevant
                                            SOLAS requirements.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        </div>
                    </motion.div>

                    {/* Note on Cargo Ship Certification */}
                    <motion.div variants={fadeUp} className="mt-6">
                        <div className="rounded-sm border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                            <span className="font-semibold text-white">Note on Cargo Ship Certification: </span>
                            For cargo ships, the <em>Safety Construction</em>, <em>Safety Equipment</em>, and <em>Safety
                            Radio</em> requirements are often combined into a single <em>Cargo Ship Safety
                            Certificate</em>. BKI is fully authorized to conduct the integrated surveys required to
                            issue this comprehensive certificate.
                        </div>
                    </motion.div>

                    {/* Section 3: Safe Carriage of Cargoes */}
                    <motion.div variants={fadeUp} className="mt-16 grid gap-6 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-semibold text-white md:text-2xl">Safe Carriage of Cargoes</h2>
                            <p className="mt-2 text-white/80">
                                Ensuring the safety of your cargo is just as important as the safety of your ship. We
                                certify safe loading and transport across cargo types.
                            </p>
                        </div>
                        <div className="md:col-span-3 grid gap-4 sm:grid-cols-2">
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <Ship className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Load Line</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Full certification under the International Convention on Load Lines (ICLL),
                                            preventing overloading and safeguarding stability.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <Package className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Dangerous Goods (IMDG Code)</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Surveys against construction and equipment requirements for packaged
                                            dangerous goods; issuance of a Document of Compliance.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur sm:col-span-2">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <Boxes className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">International Maritime Solid Bulk
                                            Cargoes (IMSBC Code)</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Fitness-for-purpose verification for vessels carrying solid bulk cargoes
                                            with the required documentation.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        </div>
                    </motion.div>

                    {/* Section 4: Specialized Approvals & Vessel Services */}
                    <motion.div variants={fadeUp} className="mt-16 grid gap-6 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-semibold text-white md:text-2xl">Specialized
                                Approvals &amp; Vessel Services</h2>
                            <p className="mt-2 text-white/80">
                                Expert review and approval for specialized vessels and complex operations.
                            </p>
                        </div>
                        <div className="md:col-span-3 grid gap-4 sm:grid-cols-2">
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <Shuffle className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Approval of Ship To Ship (STS) Transfer
                                            Plan</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Review and approval of STS plans for oil tankers—critical for preventing
                                            spills and accidents during transfers.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <FileCog className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Approval of
                                            Procedures &amp; Arrangements (P&amp;A) Manual</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Review and approval for vessels carrying noxious liquid substances, covering
                                            cargo handling and tank cleaning procedures.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                            <motion.article variants={card} whileHover="hover"
                                            className="rounded-sm border border-white/15 bg-white/5 p-5 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="rounded-sm bg-cyan-500/15 p-2.5 text-cyan-200 ring-1 ring-cyan-300/20">
                                        <ShieldCheck className="size-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Fitness for Offshore Support Vessels
                                            (OSV)</h3>
                                        <p className="mt-1 text-sm text-white/80">
                                            Certification under the Code of Safety for OSVs, aligning unique design and
                                            equipment with demanding operations.
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        </div>
                    </motion.div>

                    {/* Footer callout */}
                    <motion.div variants={fadeUp} className="mt-16">
                        <div
                            className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur">
                            <div
                                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"/>
                            <p className="text-balance text-white/85">
                                Partner with BKI to embed SOLAS-grade safety into every voyage—from shore-based systems
                                to shipboard realities.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
