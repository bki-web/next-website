"use client";

import {motion, Variants} from "framer-motion";
import {
    BadgeCheck,
    BookText,
    Building2,
    CheckCircle2,
    Clock,
    FileCheck2,
    ListChecks,
    ScrollText,
    Shield,
    Ship,
    Workflow
} from "lucide-react";
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";

const fadeIn: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

const container: Variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.08, delayChildren: 0.06}},
};

const staggerCols: Variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.12}},
};

const objectives = [
    {
        title: "International cooperation framework",
        desc:
            "Establish a collaborative structure to detect security threats and prevent incidents across borders.",
    },
    {
        title: "Clearly defined responsibilities",
        desc:
            "Clarify roles at national and international levels for every party involved in maritime security.",
    },
    {
        title: "Efficient information exchange",
        desc:
            "Ensure timely collection and dissemination of security-related information.",
    },
    {
        title: "Risk-based assessments",
        desc:
            "Provide a methodology so plans and procedures adapt to changing threat levels.",
    },
    {
        title: "Proportionate measures",
        desc:
            "Maintain confidence that adequate and proportionate security measures are in place.",
    },
];

const applicability = [
    "Passenger ships, including high-speed passenger craft",
    "Cargo ships of 500 GT and above, including high-speed craft",
    "Mobile Offshore Drilling Units (MODUs)",
    "Port facilities serving such ships on international voyages",
];

const interimReqs = [
    "Ship Security Assessment (SSA) completed",
    "Approved Ship Security Plan (SSP) is on board and implemented",
    "Ship Security Alert System (SSAS) installed and compliant",
    "CSO ensures SSP application: drills, training, internal audits",
    "Master, SSO, and crew are knowledgeable of security duties",
];

export default function InternationalShipAndPortFacilitySecurityPage() {
    const router = useRouter();
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
                        text: "International Ship & Port Facility Security",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"International Ship & Port Facility Security"}
            />

            <section id="isps"
                     className="relative isolate overflow-hidden bg-gradient-to-b from-[#0A436A] via-[#0A436A]/90 to-[#0A436A]/75 text-slate-100 2xl:px-28 xl:px-24 lg:px-20 px-4">
                {/* Backdrop aesthetics */}
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"/>
                    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-2xl"/>
                    <div
                        className="absolute left-0 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-400/10 blur-2xl"/>
                </div>

                {/* Hero */}
                <div className="py-20 md:py-28">
                    <motion.div variants={container} initial="hidden" whileInView="show"
                                viewport={{once: true, margin: "-80px"}}
                                className="grid items-center gap-10 md:grid-cols-[1.2fr,0.8fr]">
                        <motion.div variants={fadeIn} className="space-y-6">
                            <div
                                className="inline-flex items-center gap-2 rounded-full border border-slate-800/60 bg-slate-900/50 px-3 py-1 text-xs text-slate-300 backdrop-blur">
                                <Shield className="h-4 w-4"/>
                                <span>International Ship and Port Facility Security (ISPS) Code</span>
                            </div>
                            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                                A New Era of Maritime Security
                            </h1>
                            <p className="max-w-2xl text-pretty text-slate-300">
                                In December 2002, the IMO introduced SOLAS XI-2, mandating the ISPS Code: a
                                comprehensive framework for governments, shipping companies, and port authorities to
                                detect and deter threats to maritime security. Compliance with Part A is mandatory for
                                applicable ships and port facilities.
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button text={'Go to ISPS Register'} style="white"
                                        onClick={() => router.push('/our-services/statutory/international-ship-port-facility-security/isps-register')}/>
                                <div className="text-sm text-slate-400">SOLAS XI-2 • Mandatory since 1 July 2004</div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="relative">
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
                                <div className="flex items-center gap-3">
                                    <Ship className="h-6 w-6 text-cyan-400"/>
                                    <span className="text-sm font-medium text-slate-300">Scope & Applicability</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                                    {applicability.map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-400"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div
                                    className="mt-4 rounded-lg border border-slate-800/70 bg-slate-900/60 p-3 text-xs text-slate-400">
                                    Failure to comply can result in severe operational restrictions, especially in
                                    international waters.
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Objectives */}
                <div className="pb-6">
                    <motion.div variants={container} initial="hidden" whileInView="show"
                                viewport={{once: true, margin: "-80px"}} className="grid gap-6 md:grid-cols-3">
                        <motion.div variants={fadeIn}
                                    className="col-span-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <Workflow className="h-6 w-6 text-cyan-400"/>
                                <h2 className="text-lg font-semibold">The Objectives of the ISPS Code</h2>
                            </div>
                            <motion.ul variants={staggerCols} initial="hidden" whileInView="show"
                                       viewport={{once: true}} className="grid gap-4 sm:grid-cols-2">
                                {objectives.map((o) => (
                                    <motion.li key={o.title} variants={fadeIn}
                                               className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-4">
                                        <p className="font-medium text-slate-200">{o.title}</p>
                                        <p className="mt-1 text-sm text-slate-400">{o.desc}</p>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        <motion.aside variants={fadeIn}
                                      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <Building2 className="h-6 w-6 text-cyan-400"/>
                                <h3 className="text-lg font-semibold">BKI as Recognized Security Organization (RSO)</h3>
                            </div>
                            <p className="text-sm text-slate-300">
                                Appointed by the Government of Indonesia, BKI performs security-related tasks on behalf
                                of the administration: approval of security plans and verification with issuance of
                                interim/short-term International Ship Security Certificates (ISSC). Permanent ISSCs are
                                issued by the Directorate General of Sea Transportation; BKI manages the application and
                                maintains the official ISPS Code Register Book.
                            </p>
                        </motion.aside>
                    </motion.div>
                </div>

                {/* Path to Certification */}
                <div className="py-12">
                    <motion.div variants={container} initial="hidden" whileInView="show"
                                viewport={{once: true, margin: "-80px"}}
                                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-10">
                        <div className="mb-6 flex items-center gap-3">
                            <ScrollText className="h-6 w-6 text-cyan-400"/>
                            <h2 className="text-xl font-semibold">The Path to Certification</h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Phase 1 */}
                            <motion.div variants={fadeIn}
                                        className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <BadgeCheck className="h-5 w-5 text-emerald-400"/>
                                    <h3 className="font-medium">Phase 1: Ship Security Plan (SSP) Approval</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li className="flex items-start gap-2"><FileCheck2
                                        className="mt-0.5 h-4 w-4 text-cyan-400"/><span><span
                                        className="font-medium">Application:</span> Submit the SSP, the Ship Security Assessment (SSA), and copies of CSO & SSO certificates to BKI.</span>
                                    </li>
                                    <li className="flex items-start gap-2"><BookText
                                        className="mt-0.5 h-4 w-4 text-cyan-400"/><span><span className="font-medium">Plan Review:</span> BKI reviews the SSP. Insufficiencies are returned for correction.</span>
                                    </li>
                                    <li className="flex items-start gap-2"><BadgeCheck
                                        className="mt-0.5 h-4 w-4 text-cyan-400"/><span><span
                                        className="font-medium">Approval:</span> Once compliant, BKI issues an SSP Conformance Document and places an "Approval" stamp on each SSP page.</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Phase 2 */}
                            <motion.div variants={fadeIn}
                                        className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <BadgeCheck className="h-5 w-5 text-emerald-400"/>
                                    <h3 className="font-medium">Phase 2: Onboard Verification & Certification</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li className="flex items-start gap-2"><ListChecks
                                        className="mt-0.5 h-4 w-4 text-cyan-400"/><span><span
                                        className="font-medium">Implementation:</span> SSP implemented on board for a minimum of three months.</span>
                                    </li>
                                    <li className="flex items-start gap-2"><Shield
                                        className="mt-0.5 h-4 w-4 text-cyan-400"/><span><span className="font-medium">Initial Verification:</span> BKI auditor verifies implementation and ISPS compliance.</span>
                                    </li>
                                    <li className="flex items-start gap-2"><BadgeCheck
                                        className="mt-0.5 h-4 w-4 text-cyan-400"/><span><span
                                        className="font-medium">Certification:</span> BKI issues an Initial Verification Report and a short-term ISSC (valid 5 months), then manages issuance of the permanent ISSC.</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {/* Maintaining Certification */}
                            <motion.div variants={fadeIn}
                                        className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-cyan-400"/>
                                    <h3 className="font-medium">Maintaining Your Certification</h3>
                                </div>
                                <p className="text-sm text-slate-300">
                                    The International Ship Security Certificate (ISSC) is valid for five years and
                                    requires periodic verifications:
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                    <li className="flex items-start gap-2"><CheckCircle2
                                        className="mt-0.5 h-4 w-4 text-emerald-400"/><span><span
                                        className="font-medium">Intermediate Verification:</span> Conduct between the 2nd and 3rd anniversary dates.</span>
                                    </li>
                                    <li className="flex items-start gap-2"><CheckCircle2
                                        className="mt-0.5 h-4 w-4 text-emerald-400"/><span><span
                                        className="font-medium">Renewal Verification:</span> Conduct within six months prior to the expiry date.</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Interim ISSC */}
                            <motion.div variants={fadeIn}
                                        className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-cyan-400"/>
                                    <h3 className="font-medium">Interim ISSC Certification</h3>
                                </div>
                                <p className="text-sm text-slate-300">
                                    BKI may issue an Interim ISSC, valid for six months, to allow operation while
                                    completing full certification—e.g., for new ships, ship transfers to new companies,
                                    or flag changes.
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                    {interimReqs.map((r) => (
                                        <li key={r} className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400"/>
                                            <span>{r}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Register anchor */}
                <div id="isps-register" className="pb-20">
                    <motion.div variants={container} initial="hidden" whileInView="show"
                                viewport={{once: true, margin: "-80px"}}
                                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-10">
                        <div className="mb-4 flex items-center gap-3">
                            <ScrollText className="h-6 w-6 text-cyan-400"/>
                            <h2 className="text-lg font-semibold">ISPS Register</h2>
                        </div>
                        <p className="max-w-3xl text-sm text-slate-300">
                            All certified companies and ships are registered and published by BKI in the official ISPS
                            Code Register Book. Contact BKI to validate entries or request publication updates.
                        </p>
                    </motion.div>
                </div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
