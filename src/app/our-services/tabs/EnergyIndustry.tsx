import {Fragment, RefObject} from "react";
import WhyTrustSection from "@/components/WhyTrustSection";
import SliderSection from "@/app/our-services/components/SliderSection";
import Image from "next/image";
import {motion, Variants} from "framer-motion";
import {classes} from "@/utils/string";
import Pillar from "../components/Pillar";

interface Props {
    keyContent: string;
    activeIndex: number;
    prevIndex: RefObject<number>;
}

// =====================================
// Anim Variants
// =====================================
const fadeInUp: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}},
};


const stagger: Variants = {
    hidden: {},
    show: {transition: {staggerChildren: 0.08, delayChildren: 0.05}},
};


const zoomCard: Variants = {
    hidden: {opacity: 0, scale: 0.96},
    show: {opacity: 1, scale: 1, transition: {duration: 0.45, ease: "easeOut"}},
};


// =====================================
// Helpers
// =====================================
const Section = ({id, className = "", children}: { id?: string; className?: string; children: React.ReactNode }) => (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">{children}</div>
    </section>
);


const Kicker = ({children}: { children: React.ReactNode }) => (
    <motion.span
        variants={fadeInUp}
        className="inline-block text-sm tracking-wide uppercase text-[#0A436A]"
    >
        {children}
    </motion.span>
);


const Heading = ({title, subtitle, align = "center" as const}: {
    title: string;
    subtitle?: string;
    align?: "left" | "center"
}) => (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once: true, margin: "-12% 0px"}}
                className={align === "center" ? "text-center" : "text-left"}>
        {subtitle && (
            <motion.p variants={fadeInUp} className="text-sm md:text-base text-white/70 mb-2">
                {subtitle}
            </motion.p>
        )}
        <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-bold text-white">
            {title}
        </motion.h2>
    </motion.div>
);

const Paragraph = ({children, className = ""}: { children: React.ReactNode; className?: string }) => (
    <motion.p variants={fadeInUp} className={classes("text-white/80 leading-relaxed", className)}>{children}</motion.p>
);


// =====================================
// Data
// =====================================
const data = {
    brand: {
        name: "Biro Klasifikasi Indonesia (BKI)",
        primary: "#0A436A",
        bg: "bg-[#0A436A]",
        gradient: "from-[#0A436A] to-[#021E31]",
    },
    hero: {
        title: "Expert Technical Solutions for Energy & Industry",
        text:
            "At the heart of a thriving economy are the energy and industrial sectors—the engines of progress and development. Biro Klasifikasi Indonesia (BKI) stands as a key partner to these vital industries, providing the technical certainty needed to build, operate, and innovate with confidence.",
        subtext:
            "From upstream oil and gas exploration to downstream refining, from large-scale power generation to complex manufacturing and transportation infrastructure, we deliver independent assurance and expert solutions. We help you safeguard your assets, ensure regulatory compliance, and drive performance across every phase of your operations.",
        image: "/company-profile/hero-energy.jpg",
    },
    overview: {
        heading: "Our Core Service Pillars",
        text: "We have organized our comprehensive capabilities into four key pillars that address the most critical challenges facing the energy and industrial sectors today.",
    },
    pillars: [
        {
            key: "project",
            title: "Project Lifecycle Assurance: From Vision to Operation",
            lead:
                "Great projects demand meticulous oversight. BKI provides end-to-end project management and technical supervision to ensure your vision is realized safely, on time, and to the highest quality standards. We act as your independent partner from design review to final commissioning.",
            bullets: [
                {
                    title: "Energy Infrastructure",
                    desc:
                        "Full lifecycle assurance for Refineries, Offshore Platforms (SKKP), Pipelines (SKPP), and Power Generation facilities (SLO DJK).",
                },
                {
                    title: "Industrial & Public Infrastructure",
                    desc:
                        "Complete project services for Ports, Rail systems, Heliports (DEPHUB), and other major industrial installations.",
                },
                {
                    title: "Design & Engineering",
                    desc: "In-depth analysis, verification, and consultancy for all structural and mechanical designs."
                },
            ],
            image: "/our-services/energy-industry/pillar-1.jpg",
        },
        {
            key: "integrity",
            title: "Asset Integrity Management: Ensuring Peak Performance & Safety",
            lead:
                "The integrity of your assets is the bedrock of your success. We specialize in advanced inspection and testing methodologies that provide a clear picture of your equipment's condition, helping you optimize maintenance, prevent failures, and extend operational life.",
            bullets: [
                {
                    title: "Advanced Inspection",
                    desc: "Comprehensive services including Risk-Based Inspection (RBI) and Remaining Life Assessment (RLA) for aging assets."
                },
                {
                    title: "Non-Destructive Testing (NDT)",
                    desc: "UT, RT, MT, PT, Eddy Current, dan lainnya—mendeteksi cacat tanpa merusak komponen."
                },
                {
                    title: "Equipment Certification",
                    desc: "Pressure Vessels, Boilers (DISNAKER), Cranes, Storage Tanks, Rotating Equipment, dan peralatan kritikal lain."
                },
                {
                    title: "Corrosion Control",
                    desc: "Analisis & monitoring untuk coating, painting, dan cathodic protection systems."
                },
            ],
            image: "/our-services/energy-industry/pillar-2.jpg",
        },
        {
            key: "compliance",
            title: "Regulatory & Systems Compliance: Your Guide Through Complexity",
            lead:
                "Navigating the web of national and international regulations can be daunting. BKI is your expert guide to achieving and maintaining full compliance, ensuring your operations are licensed, lawful, and aligned with global best practices.",
            bullets: [
                {
                    title: "National Fitness Certificates",
                    desc: "Sertifikasi wajib untuk sektor energi (SKPI, SKPP) dan industri (DISNAKER, DEPHUB)."
                },
                {
                    title: "Health, Safety & Environment (HSE)",
                    desc: "Audit dan sertifikasi Sistem Manajemen K3 (SMK3)."
                },
                {
                    title: "Specialized Equipment",
                    desc: "Kepatuhan untuk Well Head, Drilling Units, Lifting Gear, dan Instalasi Kelistrikan pabrik."
                },
            ],
            image: "/our-services/energy-industry/pillar-3.jpg",
        },
        {
            key: "people",
            title: "Workforce Competency & Development: Empowering Your People",
            lead:
                "Your greatest asset is your workforce. We help you build a team that is skilled, certified, and safe, ensuring that human performance matches the high standards of your physical assets.",
            bullets: [
                {
                    title: "Personnel Certification",
                    desc: "Kualifikasi & sertifikasi independen untuk Welder, Welding Inspector, dan Operator Alat Angkat (SIO)."
                },
                {
                    title: "Specialized Technical Training",
                    desc: "Program peningkatan kompetensi, termasuk manajemen HSE (SMK3)."
                },
                {
                    title: "Skilled Labor Supply",
                    desc: "Penyediaan teknisi NDT tersertifikasi dan tenaga ahli teknis sesuai kebutuhan proyek."
                },
            ],
            image: "/our-services/energy-industry/pillar-4.jpg",
        },
    ],
    cta: {
        heading: "Ready to strengthen your energy & industry operations?",
        sub: "Partner with BKI for independent assurance, compliance, and performance excellence across your full asset lifecycle.",
        btnText: "Consult with BKI",
        href: "/contact",
    },
};


// =====================================
// UI Blocks
// =====================================

export default function EnergyIndustryTabContent({
                                                     keyContent: key,
                                                     activeIndex,
                                                     prevIndex,
                                                 }: Props) {
    return (
        <Fragment>
            <SliderSection
                keyContent={key}
                activeIndexParent={activeIndex}
                prevIndexParent={prevIndex}
            />

            <WhyTrustSection/>

            {/*Hero Section*/}
            <section className="relative overflow-hidden bg-white">
                {/* Background Image (optional) */}
                {data.hero.image && (
                    <div className="absolute inset-0 -z-10 opacity-20">
                        <Image src={data.hero.image} alt="BKI Energy Hero" fill className="object-cover"/>
                    </div>
                )}
                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Text content */}
                        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
                            <Kicker>{data.brand.name}</Kicker>
                            <motion.h1 variants={fadeInUp}
                                       className="text-3xl md:text-5xl font-bold text-[#0A436A] mt-2">
                                {data.hero.title}
                            </motion.h1>
                            <Paragraph className="mt-5 !text-[#0A436A]">{data.hero.text}</Paragraph>
                            <Paragraph className="mt-4 !text-[#0A436A]">{data.hero.subtext}</Paragraph>
                        </motion.div>

                        {/* Local video content */}
                        <motion.div variants={fadeInUp} initial="hidden" animate="show"
                                    className="w-full h-[-webkit-fill-available]">
                            <div
                                className="relative w-full h-[-webkit-fill-available] aspect-video overflow-hidden shadow-lg border border-[#0A436A]/20 rounded-sm">
                                <video
                                    className="absolute inset-0 w-full h-[-webkit-fill-available] object-cover"
                                    src="/our-services/energy-industry/video.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                        </motion.div>
                    </div>
                </Section>
            </section>

            {/*Overview Section*/}
            <section className="bg-[#072F4B]">
                <Section id="pillars">
                    <div className="grid gap-6 md:grid-cols-12 items-end">
                        <div className="md:col-span-7">
                            <Heading title={data.overview.heading} subtitle="What we do" align="left"/>
                            <motion.p variants={fadeInUp} initial="hidden" whileInView="show" viewport={{once: true}}
                                      className="mt-4 text-white/80 max-w-2xl">
                                {data.overview.text}
                            </motion.p>
                        </div>
                        {/*<motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{once: true}}*/}
                        {/*            className="md:col-span-5 justify-self-end">*/}
                        {/*    <a href="#"*/}
                        {/*       className="inline-flex items-center rounded-xl bg-white text-[#0A436A] px-4 py-2 font-medium hover:opacity-90 transition">*/}
                        {/*        Get in touch*/}
                        {/*    </a>*/}
                        {/*</motion.div>*/}
                    </div>
                    {/* Pillar mini-cards */}
                    <motion.div variants={stagger} initial="hidden" whileInView="show"
                                viewport={{once: true, margin: "-10% 0px"}}
                                className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {data.pillars.map((p) => (
                            <motion.div key={p.key} variants={zoomCard}
                                        className="group border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="shrink-0 p-1.5 pb-0 rounded-xl border border-white/15 bg-white/10 group-hover:scale-105 transition flex items-center justify-center">
                                        {/*className="shrink-0 p-1.5 rounded-xl border border-white/15 bg-white/10 grid place-items-center group-hover:scale-105 transition flex items-center justify-center">*/}
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" stroke="currentColor"
                                                  strokeWidth="1.4"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold leading-snug">{p.title}</h3>
                                        <p className="mt-1 text-sm text-white/70">{p.lead}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>
            </section>

            {/*Pillar Section*/}
            {data.pillars.map((p, idx) => (
                <Pillar key={p.key} keyId={p.key} index={idx} title={p.title} lead={p.lead} bullets={p.bullets}
                        image={p.image}/>
            ))}

            {/*CTA Section*/}
            <section id="contact" className="bg-gradient-to-b from-[#072F4B] to-[#021E31]">
                <Section>
                    <motion.div variants={stagger} initial="hidden" whileInView="show"
                                viewport={{once: true, margin: "-15% 0px"}} className="text-center max-w-3xl mx-auto">
                        <Heading title={data.cta.heading} subtitle="Next step"/>
                        <Paragraph className="mt-4">{data.cta.sub}</Paragraph>
                        <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-3">
                            <a href={data.cta.href}
                               className="inline-flex items-center bg-white text-[#0A436A] px-5 py-3 font-medium hover:opacity-90 transition">
                                {data.cta.btnText}
                            </a>
                            <a href="#"
                               className="inline-flex items-center border border-white/25 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
                                Explore services
                            </a>
                        </motion.div>
                    </motion.div>
                </Section>
            </section>
        </Fragment>
    );
}
