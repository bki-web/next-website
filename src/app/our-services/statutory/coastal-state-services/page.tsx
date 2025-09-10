"use client";

import {motion, Variants} from "framer-motion";
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";

// Tiny inline icons to avoid extra deps
const IconShield = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path d="M12 3l7 3v6c0 4.97-3.05 9.38-7 10-3.95-.62-7-5.03-7-10V6l7-3z" stroke="currentColor"
              strokeWidth="1.5"/>
    </svg>
);
const IconGlobe = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2.5 12h19M12 2.5c3 3 3 16.5 0 19M12 2.5c-3 3-3 16.5 0 19" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
);
const IconHarbor = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path d="M3 20h18M5 16l7-4 7 4M5 8l7-4 7 4v4l-7-4-7 4V8z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);
const IconLeaf = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path d="M20 4s-6 0-9 3-3 9-3 9 6 0 9-3 3-9 3-9z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 20c4-1 9-6 11-11" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const container: Variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.08, delayChildren: 0.05}},
};

const fadeUp: Variants = {
    hidden: {opacity: 0, y: 24, filter: "blur(4px)"},
    show: {opacity: 1, y: 0, filter: "blur(0px)", transition: {duration: 0.55, ease: "easeOut"}},
};

export default function CoastalStateServicesPage() {
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
                        text: "Coastal State Services",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Coastal State Services"}
            />

            <section className="relative overflow-hidden">
                {/* Soft background accents */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div
                        className="absolute -top-24 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/15 via-cyan-400/10 to-teal-300/10 blur-3xl"/>
                    <div
                        className="absolute -bottom-24 right-1/2 h-72 w-[48rem] translate-x-1/3 rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-400/10 to-sky-400/10 blur-3xl"/>
                </div>

                <motion.div
                    className="py-20 bg-[#0A436A] 2xl:px-28 xl:px-24 lg:px-20 px-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.2}}
                >
                    {/* Header */}
                    <motion.div variants={fadeUp}
                                className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                                Safeguarding National Waters
                            </h2>
                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
                                “BKI provides expert technical services to support the responsibilities of a Coastal
                                State, ensuring vessels operating in national waters are safe, compliant, and
                                environmentally sound”
                            </p>
                        </div>
                        <div className="relative">
                            <div
                                className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-teal-400/20 to-sky-400/20 blur"/>
                            <div
                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-sm ring-1 ring-white/10 backdrop-blur">
                                Archipelagic focus • EEZ & Territorial Sea • Compliance-first
                            </div>
                        </div>
                    </motion.div>

                    {/* Body grid */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
                        {/* Left rail: overview */}
                        <motion.aside
                            variants={fadeUp}
                            className="md:col-span-2 md:pr-6"
                        >
                            <div className="sticky top-24 space-y-6">
                                <div
                                    className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 ring-1 ring-inset ring-white/10">
                                    <h3 className="text-xl font-semibold text-white">The Role and Responsibility of a
                                        Coastal State</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                                        In international maritime law, a <span className="font-medium text-white">Coastal State</span> is
                                        a nation that has a coastline. This grants specific rights and imposes
                                        responsibilities over the <span className="font-medium text-white">Territorial Sea</span> (up
                                        to 12 nautical miles) and the <span className="font-medium text-white">Exclusive Economic Zone (EEZ)</span>.
                                    </p>
                                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                                        <li className="flex gap-2"><span
                                            className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400/80"/>Ensure
                                            the safety of navigation for all ships.
                                        </li>
                                        <li className="flex gap-2"><span
                                            className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400/80"/>Protect
                                            the marine environment from pollution.
                                        </li>
                                        <li className="flex gap-2"><span
                                            className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400/80"/>Enforce
                                            national and international regulations on foreign vessels exercising
                                            innocent passage.
                                        </li>
                                    </ul>
                                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                                        As Indonesia's national classification society, BKI brings deep archipelagic
                                        expertise to support these critical national functions.
                                    </p>
                                </div>

                                <div
                                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 ring-1 ring-inset ring-white/10">
                                    <IconShield className="h-5 w-5 text-teal-300"/>
                                    <p className="text-sm text-white/70">Prevention-first classification approach to
                                        minimize PSC detentions.</p>
                                </div>
                            </div>
                        </motion.aside>

                        {/* Right rail: services cards */}
                        <motion.div
                            variants={fadeUp}
                            className="md:col-span-3"
                        >
                            <div className="grid grid-cols-1 gap-6">
                                {/* Service 1 */}
                                <motion.div variants={fadeUp}
                                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-white/[0.07]">
                                    <div className="mb-3 flex items-center gap-3">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/20 to-sky-400/20 ring-1 ring-inset ring-white/10">
                                            <IconGlobe className="h-5 w-5 text-white"/>
                                        </div>
                                        <h4 className="text-lg font-semibold text-white">1. Verification of Compliance
                                            for Foreign Vessels</h4>
                                    </div>
                                    <p className="text-sm leading-relaxed text-white/70">
                                        Foreign vessels entering a nation's waters must comply with specific local
                                        regulations. BKI verifies that these vessels meet the required standards.
                                    </p>
                                    <ul className="mt-3 grid grid-cols-1 gap-2 pl-1 text-sm text-white/80 md:grid-cols-2">
                                        <li className="flex items-start gap-2"><span
                                            className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-300/80"/>
                                            <div>
                                                <span
                                                    className="font-medium text-white">Domestic Regulations:</span> Verification
                                                against national requirements (cabotage, safety equipment, manning).
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2"><span
                                            className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-300/80"/>
                                            <div>
                                                <span
                                                    className="font-medium text-white">Port Entry Requirements:</span> Technical
                                                checks for port-specific safety and environmental standards.
                                            </div>
                                        </li>
                                    </ul>
                                </motion.div>

                                {/* Service 2 */}
                                <motion.div variants={fadeUp}
                                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-white/[0.07]">
                                    <div className="mb-3 flex items-center gap-3">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20 ring-1 ring-inset ring-white/10">
                                            <IconShield className="h-5 w-5 text-white"/>
                                        </div>
                                        <h4 className="text-lg font-semibold text-white">2. Port State Control (PSC)
                                            Support</h4>
                                    </div>
                                    <p className="text-sm leading-relaxed text-white/70">
                                        While PSC is a government function, BKI provides crucial background
                                        support—ensuring ships are compliant before arrival and responding rapidly to
                                        address any deficiencies on BKI-classed vessels.
                                    </p>
                                </motion.div>

                                {/* Service 3 */}
                                <motion.div variants={fadeUp}
                                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-white/[0.07]">
                                    <div className="mb-3 flex items-center gap-3">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-teal-400/20 ring-1 ring-inset ring-white/10">
                                            <IconHarbor className="h-5 w-5 text-white"/>
                                        </div>
                                        <h4 className="text-lg font-semibold text-white">3. Technical Consultancy for
                                            Maritime Infrastructure</h4>
                                    </div>
                                    <div className="text-sm leading-relaxed text-white/70">
                                        <p>BKI provides technical advisory and verification for:</p>
                                        <ul className="mt-3 space-y-2">
                                            <li className="flex items-start gap-2"><span
                                                className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-teal-300/80"/>
                                                <span><span className="font-medium text-white">Aids to Navigation (AtoN):</span> Verification of buoys, beacons, and other navigational aids.</span>
                                            </li>
                                            <li className="flex items-start gap-2"><span
                                                className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-teal-300/80"/>
                                                <span><span className="font-medium text-white">Port & Terminal Development:</span> Technical studies and QA for maritime facilities.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Service 4 */}
                                <motion.div variants={fadeUp}
                                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-white/[0.07]">
                                    <div className="mb-3 flex items-center gap-3">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-400/20 ring-1 ring-inset ring-white/10">
                                            <IconLeaf className="h-5 w-5 text-white"/>
                                        </div>
                                        <h4 className="text-lg font-semibold text-white">4. Environmental Protection
                                            Advisory</h4>
                                    </div>
                                    <p className="text-sm leading-relaxed text-white/70">
                                        Expert guidance on implementing international conventions like MARPOL within
                                        national waters, including practical strategies for pollution prevention and
                                        response.
                                    </p>
                                </motion.div>

                                {/* Advantage card */}
                                <motion.div variants={fadeUp}
                                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 ring-1 ring-inset ring-white/10">
                                    <div
                                        className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-teal-400/30 to-sky-400/30 blur-2xl"/>
                                    <h4 className="text-lg font-semibold text-white">The BKI Advantage: Unmatched
                                        Archipelagic Expertise</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                                        Navigating the waters of an archipelago like Indonesia presents unique
                                        challenges. BKI’s unparalleled experience in this environment makes us the ideal
                                        technical partner. We help ensure that the rights of the Coastal State are
                                        upheld while facilitating safe, efficient, and compliant maritime trade for all.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
