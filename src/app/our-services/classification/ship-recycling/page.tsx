'use client';
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "../../components/DigitalPlatform";
import SliderSection from "@/app/our-services/classification/ship-recycling/components/SliderSection";
import {motion, useReducedMotion} from "framer-motion";
import Link from "next/link";

export default function ShipRecyclingPage() {
    const prefersReducedMotion = useReducedMotion();

    const fadeUp = {
        hidden: {opacity: 0, y: 24},
        show: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]},
        },
    } as const;

    const fade = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 0.5}},
    } as const;

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.06,
                delayChildren: prefersReducedMotion ? 0 : 0.04,
            },
        },
    } as const;
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
                        text: "Classification",
                        href: "/our-services#classification",
                    },
                    {
                        text: "Ship Recycling",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Ship Recycling"}
                description={
                    "A safe and environmentally responsible solution for the end-of-life management of marine vessels."
                }
            />

            <SliderSection/>

            <section className="relative overflow-hidden bg-white text-slate-800">

                {/* Header / Intro */}
                <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-20% 0px"}}
                        variants={container}
                        className="grid grid-cols-1 items-start gap-10 md:grid-cols-12"
                    >
                        <motion.header variants={fadeUp} className="md:col-span-5">
                            <p className="mb-2 inline-flex items-center  bg-[#0A436A]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#0A436A]">
                                Compliance & Sustainability
                            </p>
                            <h2 className="text-3xl font-bold leading-tight text-[#0A436A] sm:text-4xl">
                                Sustainable Ship Recycling & Lifecycle Compliance
                            </h2>
                        </motion.header>

                        <motion.div variants={fadeUp} className="md:col-span-7">
                            <p className="text-base leading-relaxed text-slate-700">
                                As a vessel reaches the end of its operational life, its final journey must be managed
                                with the utmost responsibility to protect human health, safety, and the environment. As
                                part of global efforts to improve safety and environmental sustainability in the
                                maritime sector, the International Maritime Organization (IMO) adopted the Hong Kong
                                International Convention for the Safe and Environmentally Sound Recycling of Ships
                                (HKC). The convention sets requirements to ensure that ship recycling activities are
                                conducted in a safe, controlled, and environmentally responsible manner.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-slate-700">
                                Biro Klasifikasi Indonesia (BKI) promotes these practices, offering a comprehensive
                                suite of services to guide shipowners and recycling facilities toward full regulatory
                                compliance. We partner with you to ensure every vessel is dismantled in a controlled,
                                transparent, and environmentally sound manner—transforming a potential liability into a
                                responsible final act.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Regulatory Landscape */}
                <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-20% 0px"}}
                        variants={container}
                        className=" border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur md:p-8"
                    >
                        <motion.h3 variants={fadeUp} className="text-xl font-semibold text-[#0A436A]">
                            Navigating the Global Regulatory Landscape
                        </motion.h3>
                        <motion.p variants={fadeUp} className="mt-2 text-slate-700">
                            BKI provides expert guidance and certification in line with key international and national
                            frameworks.
                        </motion.p>

                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                            <motion.div variants={fade} className=" border border-slate-200 p-5">
                                <h4 className="text-sm font-semibold text-slate-900">Hong Kong Convention (HKC)</h4>
                                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                                    Ships (commonly ≥500 GT) on international voyages must be recycled at authorized
                                    facilities, with a Document of Authorization to Conduct Ship Recycling (DASR).
                                    Applicability may further require carrying the Inventory of Hazardous Materials
                                    (IHM) Part I.
                                </p>
                            </motion.div>
                            <motion.div variants={fade} className=" border border-slate-200 p-5">
                                <h4 className="text-sm font-semibold text-slate-900">EU Ship Recycling Regulation (EU
                                    SRR)</h4>
                                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                                    EU-flagged vessels must be recycled only in facilities on the official European
                                    List. BKI helps shipowners meet these obligations.
                                </p>
                            </motion.div>
                            <motion.div variants={fade} className=" border border-slate-200 p-5">
                                <h4 className="text-sm font-semibold text-slate-900">Indonesian National Regulation</h4>
                                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                                    Indonesia’s MoT Regulation No. 24/2022 requires Indonesia-flagged vessels ≥100 GT
                                    destined for dismantling to comply with IHM-related requirements.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>
                </div>

                {/* Key Compliance Timeline */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-20% 0px"}}
                        variants={container}
                        className="mt-10  bg-[#0A436A] p-6 text-white md:p-8"
                    >
                        <motion.h3 variants={fadeUp} className="text-xl font-semibold">
                            Key Compliance Timeline
                        </motion.h3>
                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <motion.div variants={fadeUp} className=" bg-white/5 p-5 ring-1 ring-white/10">
                                <div className="text-sm font-medium uppercase tracking-wide text-emerald-300">26 June
                                    2025
                                </div>
                                <p className="mt-1 text-sm leading-relaxed text-white/90">
                                    HKC enters into force. All new ships must carry a certified IHM Part I onboard as a
                                    condition for operation.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeUp} className=" bg-white/5 p-5 ring-1 ring-white/10">
                                <div className="text-sm font-medium uppercase tracking-wide text-emerald-300">26 June
                                    2030
                                </div>
                                <p className="mt-1 text-sm leading-relaxed text-white/90">
                                    Existing ships have a transitional period until this date to fulfill the IHM
                                    requirement.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>
                </div>

                {/* IHM Explained */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-20% 0px"}}
                        variants={container}
                        className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12"
                    >
                        <motion.div variants={fadeUp} className="md:col-span-5">
                            <h3 className="text-xl font-semibold text-[#0A436A]">The Inventory of Hazardous Materials
                                (IHM)</h3>
                            <p className="mt-2 text-slate-700">
                                The IHM identifies hazardous substances onboard to ensure proper management throughout a
                                ship’s life. Vessels must carry a certified IHM.
                            </p>
                            <div className="mt-4  border border-slate-200 bg-white p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Important</p>
                                <p className="mt-1 text-sm text-slate-700">
                                    Only <span className="font-semibold">Part I</span> is mandatory during operation.
                                    Parts II & III are required before recycling.
                                </p>
                            </div>
                        </motion.div>

                        <motion.ul variants={container} className="md:col-span-7 space-y-4">
                            {[
                                {
                                    title: "IHM Part I",
                                    desc:
                                        "Hazardous materials embedded in structure/equipment (e.g., asbestos, PCBs, heavy metals).",
                                },
                                {
                                    title: "IHM Part II",
                                    desc: "Waste generated during operation (e.g., sewage, sludge).",
                                },
                                {
                                    title: "IHM Part III",
                                    desc: "Consumables such as lubricants, paints, batteries.",
                                },
                            ].map((item, idx) => (
                                <motion.li
                                    key={item.title}
                                    variants={fade}
                                    className=" border border-slate-200 bg-white p-5"
                                >
                                    <div className="flex items-start gap-3">
                                        <span
                                            className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center  bg-emerald-600/10 text-emerald-700">{idx + 1}</span>
                                        <div>
                                            <div className="font-semibold text-slate-900">{item.title}</div>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.section>
                </div>

                {/* IHM Development & Maintenance */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-20% 0px"}}
                        variants={container}
                        className="mt-10  border border-slate-200 bg-white/70 p-6 shadow-sm md:p-8"
                    >
                        <h3 className="text-xl font-semibold text-[#0A436A]">IHM Development and Maintenance</h3>
                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
                            {[
                                {
                                    title: "New Ships",
                                    text:
                                        "Develop IHM Part I during design & construction with supplier material traceability.",
                                },
                                {
                                    title: "Existing Ships",
                                    text:
                                        "Compile IHM Part I via onboard surveys by certified hazmat professionals/approved providers.",
                                },
                                {
                                    title: "Verification",
                                    text:
                                        "Documentation verified by a Recognized Organization (RO) appointed by the flag state.",
                                },
                                {
                                    title: "Maintenance",
                                    text:
                                        "Regularly update IHM Part I upon changes to structural material, equipment, or substances.",
                                },
                            ].map((card) => (
                                <motion.div key={card.title} variants={fade}
                                            className=" border border-slate-200 bg-white p-5">
                                    <div className="font-semibold text-slate-900">{card.title}</div>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{card.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                {/* Required Documents Lifecycle */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-20% 0px"}}
                        variants={container}
                        className="mt-10"
                    >
                        <h3 className="text-xl font-semibold text-[#0A436A]">Required Documents Through the Ship’s
                            Lifecycle</h3>
                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {[
                                {
                                    stage: "Construction",
                                    items: [
                                        "IHM Part I",
                                        "International Certificate on IHM",
                                    ],
                                },
                                {
                                    stage: "Operation",
                                    items: [
                                        "Updated IHM Part I",
                                        "International Certificate on IHM (valid)",
                                    ],
                                },
                                {
                                    stage: "Recycling Prep",
                                    items: [
                                        "Updated IHM (Part I, II & III)",
                                        "Valid ICIHM",
                                        "Appointed Recycling Facility",
                                        "Ship Recycling Plan (SRP)",
                                        "International Ready for Recycling Certificate (IRRC)",
                                    ],
                                },
                                {
                                    stage: "At Facilities",
                                    items: [
                                        "Ship Recycling Facility Plan (SRFP)",
                                        "Document of Authorization to Conduct Ship Recycling (DASR)",
                                    ],
                                },
                            ].map((col) => (
                                <motion.div key={col.stage} variants={fade}
                                            className=" border border-slate-200 bg-white p-5">
                                    <div className="text-sm font-semibold text-slate-900">{col.stage}</div>
                                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                                        {col.items.map((i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span
                                                    className="mt-0.5 inline-block h-1.5 w-1.5  bg-emerald-600"/>
                                                <span>{i}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                {/* Services */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-20% 0px"}}
                        variants={container}
                        className="mt-10  border border-slate-200 bg-white/70 p-6 shadow-sm md:p-8"
                    >
                        <h3 className="text-xl font-semibold text-[#0A436A]">Our Comprehensive Ship Recycling
                            Services</h3>
                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                            {[
                                {
                                    title: "IHM Verification & Approval",
                                    text:
                                        "Full-scope verification for IHM Parts I–III to HKC standards.",
                                },
                                {
                                    title: "Certificates & SoC",
                                    text:
                                        "Issue International Certificate on IHM (ICIHM) or Statement of Compliance; audits for facilities.",
                                },
                                {
                                    title: "Final Survey & IRRC",
                                    text:
                                        "Final survey prior to dismantling and issuance of Ready for Recycling Certificate.",
                                },
                                {
                                    title: "Training & Advisory",
                                    text:
                                        "Specialized training and ongoing support for IHM management.",
                                },
                            ].map((s) => (
                                <motion.div key={s.title} variants={fade}
                                            className=" border border-slate-200 bg-white p-5">
                                    <div className="font-semibold text-slate-900">{s.title}</div>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div variants={fadeUp}
                                    className="mt-8 flex flex-col items-start justify-between gap-4  bg-[#0A436A] p-6 text-white md:flex-row md:items-center">
                            <div>
                                <div className="text-sm font-semibold uppercase tracking-wide text-emerald-300">Partner
                                    with BKI
                                </div>
                                <p className="mt-1 text-white/90">
                                    Ensure your end-of-life vessels contribute to a safer and cleaner maritime industry.
                                </p>
                            </div>
                            <Link
                                href="#contact-bki"
                                className="inline-flex items-center justify-center  bg-white px-4 py-2 text-sm font-semibold text-[#0A436A] shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white/60"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.section>
                </div>

                <div className="h-14"/>
            </section>

            <DigitalPlatform/>
            <ContactUsSection/>
        </div>
    );
}
