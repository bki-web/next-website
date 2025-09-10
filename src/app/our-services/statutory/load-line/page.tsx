"use client";
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion, Variants} from "framer-motion";
import {Anchor, CheckCircle2, ClipboardList, Compass, MapPinned, ShieldCheck, Timer} from "lucide-react";

const container: Variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.1, delayChildren: 0.05},
    },
};

const fadeUp: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

const steps = [
    {
        title: "Step 1: Application & Documentation Submission",
        desc:
            "Submit your application to the nearest BKI branch office. At this stage, you will also need to submit key technical documents, including the General Arrangement drawingand Stability Calculation, for our review.",
        icon: <ClipboardList className="size-5" aria-hidden/>,
    },
    {
        title: "Step 2: Onboard Verification Survey",
        desc:
            "A BKI Surveyor will visit your vessel to verify that all requirements related to the load line are met onboard.",
        icon: <Compass className="size-5" aria-hidden/>,
    },
    {
        title: "Step 3: Freeboard Mark Installation Instruction",
        desc:
            "Following a successful survey and review, the BKI Head Office or a Regional Office will issue a formal \"Instruction of Freeboard Mark Installation.\"",
        icon: <MapPinned className="size-5" aria-hidden/>,
    },
    {
        title: "Step 4: Supervised Mark Installation",
        desc:
            "The installation of the official freeboard marks on the vessel's hull must be supervised by a BKI Surveyor to ensure it is done accurately and according to regulations.",
        icon: <ShieldCheck className="size-5" aria-hidden/>,
    },
    {
        title: "Step 5: Issuance of Load Line Certificate",
        desc:
            "Once the marks are correctly installed and verified, BKI will issue the final Load Line Certificate for your vessel.",
        icon: <CheckCircle2 className="size-5" aria-hidden/>,
    },
];

export default function LoadLinePage() {
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
                        text: "Load Line",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Load Line"}
            />

            <section
                className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100 2xl:px-28 xl:px-24 lg:px-20 px-4">
                {/* Decorative glow */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(40rem_20rem_at_50%_-10%,white,transparent)]"
                >
                    <div
                        className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"/>
                    <div className="absolute left-[15%] top-[30%] h-72 w-72 rounded-full bg-emerald-400/10 blur-2xl"/>
                </div>

                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-80px"}}
                        variants={container}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                        >
                            Ensuring Safety and Stability
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-slate-300">
                            The load line (Plimsoll Mark) is a vital safety standard that marks the maximum depth at
                            which a ship can be safely loaded—maintaining stability, buoyancy, and structural integrity
                            during a voyage.
                            As a Flag State-approved agency, BKI has full authority to conduct surveys, calculations,
                            and certification to ensure your ship&apos;s load line markings are accurate and valid.
                        </motion.p>
                    </motion.div>

                    {/* Two column: why it matters + periodic survey */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-80px"}}
                        variants={container}
                        className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2"
                    >
                        <motion.div variants={fadeUp}
                                    className="relative rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <div className="flex items-start gap-4">
                                <div className="rounded-sm bg-emerald-400/10 p-2 ring-1 ring-inset ring-emerald-400/20">
                                    <ShieldCheck className="size-5 text-emerald-300"/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">The Critical Importance of the Load
                                        Line</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                        Preventing overloading is key to maritime safety. Proper markings ensure the
                                        vessel maintains stability, buoyancy, and an adequate safety margin throughout
                                        its voyage.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp}
                                    className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
                            <div className="flex items-start gap-4">
                                <div className="rounded-sm bg-cyan-400/10 p-2 ring-1 ring-inset ring-cyan-400/20">
                                    <Timer className="size-5 text-cyan-300"/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Maintaining Your Certification:
                                        Periodic Surveys</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                        A Load Line Certificate is valid for five years, with periodic surveys required.
                                        BKI surveyors will assess and validate your certificate once the requirements
                                        are met, ensuring its validity.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Certificates */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-80px"}}
                        variants={container}
                        className="mt-14"
                    >
                        <motion.h2 variants={fadeUp} className="text-xl font-semibold text-white">
                            Our Load Line Certification Services
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-2 max-w-3xl text-sm text-slate-300">
                            BKI offers two types of load line certification, depending on your vessel&apos;s area of
                            operation and regulatory framework. Both certificates are valid for a period of 5 (five)
                            years, conditional upon successful periodic surveys.
                        </motion.p>

                        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <motion.article
                                variants={fadeUp}
                                className="group relative rounded-sm border border-white/10 bg-white/5 p-6 transition-all hover:border-emerald-400/30 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.15)]"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="rounded-sm bg-emerald-400/10 p-2 ring-1 ring-inset ring-emerald-400/20">
                                        <Anchor className="size-5 text-emerald-300"/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">1. National Load Line
                                            Certificate (PM 29 Tahun 2016)</h3>
                                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                            <li>
                                                <span className="font-medium text-slate-200">Applicability:</span> This
                                                certificate applies to ships engaged in Indonesian domestic waters. It
                                                also applies to non-convention ships that are engaged in international
                                                waters.
                                            </li>
                                            <li>
                                                <span className="font-medium text-slate-200">Regulation:</span> Issued
                                                in accordance with the Indonesian Minister of Transportation Regulation
                                                No. 29 of 2016.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.article>

                            <motion.article
                                variants={fadeUp}
                                className="group relative rounded-sm border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)]"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="rounded-sm bg-cyan-400/10 p-2 ring-1 ring-inset ring-cyan-400/20">
                                        <Anchor className="size-5 text-cyan-300"/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">2. International Load Line
                                            Certificate (ILLC 1966)</h3>
                                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                            <li>
                                                <span className="font-medium text-slate-200">Applicability:</span> This
                                                certificate applies to all convention ships engaged in international
                                                voyages. It can also be chosen by ships operating in Indonesian waters
                                                that opt for certification under the international convention.
                                            </li>
                                            <li>
                                                <span className="font-medium text-slate-200">Regulation:</span> Issued
                                                in accordance with the International Convention on Load Lines (ILLC),
                                                1966.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.article>
                        </div>
                    </motion.div>

                    {/* Steps timeline */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-80px"}}
                        variants={container}
                        className="mt-16"
                    >
                        <motion.h2 variants={fadeUp} className="text-xl font-semibold text-white">
                            Your Path to Certification: A Step-by-Step Guide
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-2 max-w-3xl text-sm text-slate-300">
                            BKI has a clear and efficient procedure to guide you through the certification process from
                            start to finish.
                        </motion.p>

                        <ol className="mt-6 space-y-4">
                            {steps.map((s, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={fadeUp}
                                    className="relative grid grid-cols-[auto,1fr] items-start gap-4 rounded-sm border border-white/10 bg-white/5 p-4"
                                >
                                    <div
                                        className="relative mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                                        <span className="text-sm font-semibold text-white">{idx + 1}</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-slate-200">
                                            {s.icon}
                                            <h3 className="text-base font-semibold">{s.title}</h3>
                                        </div>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-300">{s.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ol>
                    </motion.div>
                </div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
