'use client';
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion, Variants} from "framer-motion";

const container: Variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.08, delayChildren: 0.05},
    },
};

const item: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

const fadeInUp: Variants = {
    hidden: {opacity: 0, y: 18},
    show: {opacity: 1, y: 0, transition: {duration: 0.55}},
};

const card: Variants = {
    hidden: {opacity: 0, scale: 0.98, y: 20},
    show: {opacity: 1, scale: 1, y: 0, transition: {duration: 0.55, ease: "easeOut"}},
};

export default function MaritimeLabourConventionPage() {
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
                        text: "Maritime Labour Convention",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Maritime Labour Convention"}
            />

            <section
                className="relative isolate overflow-hidden bg-gradient-to-b from-[#0A436A] via-[#0A436A]/90 to-[#0A436A]/70 text-slate-100">
                {/* Glow accents */}
                <div
                    className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[56rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"/>
                <div
                    className="pointer-events-none absolute -bottom-24 right-1/2 h-56 w-[48rem] translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"/>

                <div className="py-20 sm:py-24 2xl:px-28 xl:px-24 lg:px-20 px-4">
                    {/* HERO */}
                    <motion.header
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-80px"}}
                        variants={container}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <motion.p variants={item}
                                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Statutory Compliance
                        </motion.p>
                        <motion.h1
                            variants={item}
                            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
                        >
                            Maritime Labour Convention (MLC, 2006)
                        </motion.h1>
                        <motion.p
                            variants={item}
                            className="mt-6 text-base leading-7 text-slate-300 sm:text-lg"
                        >
                            “BKI provides comprehensive approval and audit services to ensure your fleet meets the
                            global standard for seafarers&apos; rights, safeguarding both your crew and your
                            operations.”
                        </motion.p>
                    </motion.header>

                    {/* Intro: Bill of Rights */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-60px"}}
                        variants={fadeInUp}
                        className="mx-auto mt-12 max-w-4xl"
                    >
                        <div className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
                            <h2 className="text-xl font-semibold text-white sm:text-2xl">The Seafarers&apos; Bill of
                                Rights</h2>
                            <p className="mt-4 text-slate-300">
                                The Maritime Labour Convention (MLC, 2006), established by the International Labour
                                Organization (ILO), is a comprehensive international standard that protects the rights
                                and working conditions of the world&apos;s seafarers. Compliance is not only a moral and
                                legal obligation but a commercial necessity, as Port State Control (PSC) enforces MLC
                                standards rigorously.
                            </p>
                            <p className="mt-4 text-slate-300">
                                As a fully authorized Recognized Organization (RO), BKI offers end-to-end services to
                                guide you through the two critical stages of compliance: <span
                                className="font-medium text-white">initial approval</span> of your plans and <span
                                className="font-medium text-white">ongoing audits</span> to maintain certification. Our
                                goal is to make the process clear, efficient, and effective.
                            </p>
                        </div>
                    </motion.div>

                    {/* Approval Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-80px"}}
                        variants={container}
                        className="mt-16 grid gap-6 lg:grid-cols-2"
                    >
                        {/* DMLC Card */}
                        <motion.article variants={card}
                                        className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
                            <h3 className="text-lg font-semibold text-white sm:text-xl">Achieving Initial Compliance
                                (MLC Approval)</h3>
                            <p className="mt-3 text-slate-300">
                                Before a vessel can be certified, it must have a <span
                                className="font-medium text-white">Declaration of Maritime Labour Compliance (DMLC)</span>.
                                This is a two-part document that forms the basis for all inspections and audits.
                            </p>
                            <div className="mt-5 rounded-sm border border-white/10 bg-slate-900/40 p-5">
                                <h4 className="text-base font-semibold text-white">Understanding the DMLC:</h4>
                                <ul className="mt-3 space-y-2 text-slate-300">
                                    <li className="flex gap-3"><span
                                        className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan-400"/>
                                        <p><span className="font-medium text-white">DMLC Part I:</span> This is a
                                            standardized document issued by the ship&apos;s Flag State Administration.
                                            It
                                            outlines the national requirements and laws that implement the MLC, 2006.
                                        </p>
                                    </li>
                                    <li className="flex gap-3"><span
                                        className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-400"/>
                                        <p><span className="font-medium text-white">DMLC Part II:</span> This is a
                                            customized document completed by the shipowner. It details the specific
                                            measures and procedures that have been put in place on board to ensure
                                            ongoing compliance with the national requirements listed in Part I.</p>
                                    </li>
                                </ul>
                            </div>
                        </motion.article>

                        {/* Approval Services Card */}
                        <motion.article variants={card}
                                        className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
                            <h3 className="text-lg font-semibold text-white sm:text-xl">Our MLC Approval Services</h3>
                            <p className="mt-3 text-slate-300">
                                BKI&apos;s crucial role is to meticulously review and approve your DMLC Part II. Our
                                experienced team will verify that the measures you have documented are robust and
                                sufficient to meet the standards of the convention.
                            </p>
                            <p className="mt-3 text-slate-300">
                                We will assess the documented procedures for all 14 key areas, including:
                            </p>
                            <ul className="mt-4 grid grid-cols-1 gap-2 text-slate-300 sm:grid-cols-2">
                                {[
                                    "Minimum age of seafarers",
                                    "Medical certification",
                                    "Seafarers' employment agreements (SEAs)",
                                    "Payment of wages",
                                    "Hours of work and rest",
                                    "Accommodation, recreational facilities, food, and catering",
                                    "On-board medical care",
                                    "Health and safety protection and accident prevention",
                                    "On-board complaint procedures",
                                ].map((text) => (
                                    <li key={text}
                                        className="flex gap-3 rounded-sm border border-white/10 bg-slate-900/40 p-3">
                                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan-400"/>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-slate-300">
                                A BKI-approved DMLC Part II is your foundational step towards full MLC certification.
                            </p>
                        </motion.article>
                    </motion.section>

                    {/* Audit & Certification */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-80px"}}
                        variants={container}
                        className="mt-16"
                    >
                        <motion.div variants={item} className="mx-auto max-w-3xl text-center">
                            <h3 className="text-xl font-semibold text-white sm:text-2xl">Maintaining Compliance (MLC
                                Audits & Certification)</h3>
                            <p className="mt-4 text-slate-300">
                                With an approved DMLC in place, the next step is to verify its implementation through a
                                series of onboard audits. Successful completion leads to the issuance and maintenance of
                                the <span className="font-medium text-white">Maritime Labour Certificate</span>, which
                                is valid for five years.
                            </p>
                        </motion.div>

                        <motion.ul variants={container}
                                   className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
                            {[
                                {
                                    title: "Initial Audit",
                                    desc:
                                        "A full inspection is carried out to verify that the ship complies with the MLC requirements and that the measures in the DMLC Part II are being implemented. A successful audit leads to the issuance of the initial Maritime Labour Certificate.",
                                },
                                {
                                    title: "Intermediate Audit",
                                    desc:
                                        "This inspection takes place between the second and third anniversary dates of the certificate. It ensures that the standards of compliance are being maintained and remain effective.",
                                },
                                {
                                    title: "Renewal Audit",
                                    desc:
                                        "A comprehensive audit is conducted before the expiry of the existing certificate to ensure continued compliance, allowing for the issuance of a new five-year Maritime Labour Certificate.",
                                },
                            ].map((it) => (
                                <motion.li
                                    key={it.title}
                                    variants={card}
                                    className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur"
                                >
                                    <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>
                                        Audit Stage
                                    </div>
                                    <h4 className="text-lg font-semibold text-white">{it.title}</h4>
                                    <p className="mt-2 text-sm leading-6 text-slate-300">{it.desc}</p>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div
                            variants={fadeInUp}
                            className="mx-auto mt-10 max-w-3xl text-center"
                        >
                            <p className="text-slate-300">
                                Partner with BKI to ensure your vessels are not just certified, but are truly safe and
                                supportive environments for your crew, protecting your most valuable asset and securing
                                your license to trade globally.
                            </p>
                        </motion.div>
                    </motion.section>
                </div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
