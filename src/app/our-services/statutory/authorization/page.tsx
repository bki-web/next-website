"use client";

import {useMemo, useState} from "react";
import {motion, Variants} from "framer-motion";
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";

const containerV: Variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.08, delayChildren: 0.05},
    },
};

const itemV: Variants = {
    hidden: {opacity: 0, y: 16, filter: "blur(6px)"},
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {duration: 0.55, ease: "easeOut"},
    },
};

// ---------- Types ----------

type YesNA = "Yes" | "N/A" | "—";

type Row = {
    no?: string;
    instrument: string;
    cols: (YesNA | string)[]; // variable columns depending on table
};

type TableSpec = {
    columns: string[]; // E.g., ["No.", "Instrument / Certificate", "Survey", "Approval"]
    rows: Row[];
};

type FlagState = {
    key: string;
    name: string;
    intro: string;
    subtables: { title: string; spec: TableSpec }[];
    badges?: string[];
};

// ---------- Data ----------

const ID_rows: Row[] = [
    {instrument: "SOLAS 1974 Convention and Protocol 1988 (as amended)", cols: [""]},
    {no: "1.1", instrument: "Cargo Ship Safety Construction Certificate", cols: ["Yes", "Yes"]},
    {no: "1.2", instrument: "Cargo Ship Safety Equipment Certificate", cols: ["Yes", "Yes"]},
    {no: "1.3", instrument: "Cargo Ship Safety Radio Certificate", cols: ["Yes", "Yes"]},
    {no: "1.4", instrument: "Passenger Ship Safety Certificate", cols: ["Yes", "Yes"]},
    {no: "1.5", instrument: "High Speed Craft Certificate", cols: ["Yes", "Yes"]},
    {
        no: "1.6",
        instrument: "International Certificate of Fitness for the Carriage of Dangerous Chemicals in Bulk (IBC & BCH Codes)",
        cols: ["Yes", "Yes"]
    },
    {
        no: "1.7",
        instrument: "International Certificate of Fitness for the Carriage of Liquefied Gases in Bulk (IGC & GC Codes)",
        cols: ["Yes", "Yes"]
    },
    {no: "1.8", instrument: "Nuclear Cargo Ship Safety Certificate", cols: ["Yes", "Yes"]},
    {no: "1.9", instrument: "International Safety Management Code (ISM Code)", cols: ["Yes", "Yes"]},
    {no: "1.10", instrument: "International Ship and Port Facility Security Code (ISPS Code)", cols: ["Yes", "Yes"]},
    {instrument: "MARPOL 73/78 Convention", cols: [""]},
    {no: "2.1", instrument: "International Oil Pollution Prevention Certificate", cols: ["Yes", "Yes"]},
    {no: "2.2", instrument: "Statement of Compliance for Ship Condition Assessment Scheme (CAS)", cols: ["Yes", "Yes"]},
    {
        no: "2.3",
        instrument: "International Pollution Prevention Certificate for the Carriage of Noxious Liquid Substances in Bulk",
        cols: ["Yes", "Yes"]
    },
    {
        no: "2.4",
        instrument: "Statement of Compliance for Ship Carrying Dangerous Goods in Packages",
        cols: ["Yes", "Yes"]
    },
    {no: "2.5", instrument: "International Sewage Pollution Prevention Certificate", cols: ["Yes", "Yes"]},
    {no: "2.6", instrument: "Statement of Compliance International Garbage Pollution Prevention", cols: ["Yes", "Yes"]},
    {
        no: "2.7",
        instrument: "International Air Pollution Prevention Certificate and the NOx Technical Code",
        cols: ["Yes", "Yes"]
    },
    {no: "2.8", instrument: "International Energy Efficiency Certificate", cols: ["Yes", "Yes"]},
    {no: "2.9", instrument: "Engine International Air Pollution Prevention Certificate", cols: ["Yes", "Yes"]},
    {
        no: "3",
        instrument: "International Convention on Load Lines, 1966 (International Load Line Certificate)",
        cols: ["Yes", "Yes"]
    },
    {no: "4", instrument: "Anti-Fouling System Convention, 2001 (Anti-Fouling Certificate)", cols: ["Yes", "Yes"]},
    {
        no: "5",
        instrument: "Ballast Water Management Convention, 2004 (International Ballast Water Management Certificate)",
        cols: ["Yes", "Yes"]
    },
    {
        no: "6",
        instrument: "The International Convention for Safe Containers, 1972 (Certification of Containers)",
        cols: ["Yes", "Yes"]
    },
    {no: "7", instrument: "Performance Standard for Protective Coatings (PSPC)", cols: ["Yes", "Yes"]},
    {no: "8", instrument: "Indonesia Domestic Load Line Regulation (PM 39 Year 2016)", cols: ["Yes", "Yes"]},
];

const TL_rows: Row[] = [
    {instrument: "1974 SOLAS Convention and the 1988 SOLAS Protocol", cols: [""]},
    {no: "1.1", instrument: "Passenger Ship Safety Certificate", cols: ["Yes", "Yes"]},
    {no: "1.2", instrument: "Cargo Ship Safety Construction Certificate", cols: ["Yes", "Yes"]},
    {no: "1.3", instrument: "Cargo Ship Safety Equipment Certificate", cols: ["Yes", "Yes"]},
    {no: "1.4", instrument: "Cargo Ship Safety Radio Certificate", cols: ["Yes", "Yes"]},
    {no: "1.5", instrument: "Fitness Certificate for Chemical Tanker", cols: ["Yes", "Yes"]},
    {no: "1.6", instrument: "Fitness Certificate for Gas Carrier", cols: ["Yes", "Yes"]},
    {no: "1.7", instrument: "Fitness Certificate for Offshore Support Vessels", cols: ["Yes", "Yes"]},
    {no: "1.8", instrument: "High Speed Craft Safety Certificate", cols: ["Yes", "Yes"]},
    {no: "1.9", instrument: "MODU Safety Certificate", cols: ["Yes", "Yes"]},
    {no: "1.10", instrument: "Noise Survey Report", cols: ["Yes", "N/A"]},
    {no: "1.11", instrument: "Special Purpose Ship Safety Certificate", cols: ["Yes", "Yes"]},
    {no: "1.12", instrument: "Dynamic Positioning Certificate", cols: ["Yes", "Yes"]},
    {no: "1.13", instrument: "ESP Survey Report", cols: ["Yes", "Yes"]},
    {no: "2", instrument: "1966 Load Line Convention, as amended and Protocol 88", cols: ["Yes", "Yes"]},
    {instrument: "MARPOL 73/78, as amended", cols: [""]},
    {no: "3.1", instrument: "International Oil Pollution Prevention Certificate", cols: ["Yes", "Yes"]},
    {no: "3.2", instrument: "Statement of Compliance with CAS", cols: ["Yes", "Yes"]},
    {no: "3.3", instrument: "International Pollution Prevention Certificate for NLS", cols: ["Yes", "Yes"]},
    {no: "3.4", instrument: "International Sewage Pollution Prevention Certificate (ISPP)", cols: ["Yes", "Yes"]},
    {no: "3.5", instrument: "International Air Pollution Prevention Certificate (IAPP)", cols: ["Yes", "Yes"]},
    {no: "3.6", instrument: "Engine International Air Pollution Prevention Certificate", cols: ["Yes", "N/A"]},
    {no: "3.7", instrument: "International Energy Efficiency Certificate", cols: ["Yes", "N/A"]},
    {no: "3.8", instrument: "Statement of Compliance related to fuel oil consumption", cols: ["Yes", "Yes"]},
    {no: "4", instrument: "Anti-Fouling System Convention (AFS)", cols: ["Yes", "Yes"]},
    {no: "5", instrument: "International Safety Management Code (ISM Code) (DOC & SMC)", cols: ["Yes", "Yes"]},
    {
        no: "6",
        instrument: "International Ship and Port Facility Security Code (ISPS Code) (ISSC)",
        cols: ["Yes", "Yes"]
    },
    {no: "7", instrument: "Maritime Labour Convention, 2006 (MLC)", cols: ["Yes", "Yes"]},
    {no: "8", instrument: "Ballast Water Management, 2004 (BWM)", cols: ["Yes", "Yes"]},
    {no: "9", instrument: "Convention for Safe Containers (CSC)", cols: ["Yes", "Yes"]},
    {no: "10", instrument: "The Nairobi International Convention on the Removal of Wrecks, 2007", cols: ["Yes", "Yes"]},
    {no: "11", instrument: "All documents associated with the above conventions", cols: ["N/A", "Yes"]},
];

const MN_rows: Row[] = [
    {instrument: "SOLAS 1974 Convention and Protocol 1988 (as amended)", cols: [""]},
    {no: "1.1", instrument: "Cargo Ship Safety Construction Certificate", cols: ["Yes", "Yes"]},
    {no: "1.2", instrument: "Cargo Ship Safety Equipment Certificate", cols: ["Yes", "N/A"]},
    {no: "1.3", instrument: "Cargo Ship Safety Radio Certificate", cols: ["Yes", "N/A"]},
    {no: "1.4", instrument: "Passenger Ship Safety Certificate", cols: ["Yes", "Yes"]},
    {no: "1.5", instrument: "High Speed Craft Safety Certificate", cols: ["Yes", "Yes"]},
    {no: "1.6", instrument: "International Safety Management Code (ISM Code)", cols: ["Yes", "Yes"]},
    {no: "1.7", instrument: "Carriage of Liquefied Gases in Bulk (GC, IGC Codes)", cols: ["Yes", "Yes"]},
    {no: "1.8", instrument: "Carriage in Bulk of Dangerous Chemicals (BCH, IBC Codes)", cols: ["Yes", "Yes"]},
    {no: "1.9", instrument: "Document of authorization for the Carriage of Grain", cols: ["Yes", "Yes"]},
    {no: "1.10", instrument: "Document of Compliance for Carrying Dangerous Goods", cols: ["Yes", "N/A"]},
    {instrument: "MARPOL 73/78 Convention", cols: [""]},
    {no: "2.1", instrument: "Annex I - International Oil Pollution Prevention Certificate", cols: ["Yes", "Yes"]},
    {no: "2.2", instrument: "Annex II - International Pollution Prevention Certificate for NLS", cols: ["Yes", "Yes"]},
    {no: "2.3", instrument: "Annex III - Harmful Substances, Statement of Fact", cols: ["Yes", "N/A"]},
    {no: "2.4", instrument: "Annex IV - Sewage", cols: ["Yes", "N/A"]},
    {no: "2.5", instrument: "Annex VI - Air Pollution, Statement of Fact", cols: ["Yes", "N/A"]},
    {no: "3", instrument: "International Regulations on Preventing Collision at Sea, 1972", cols: ["Yes", "N/A"]},
    {no: "4", instrument: "International Convention on Tonnage Measurement on Ships, 1969", cols: ["Yes", "N/A"]},
    {no: "5", instrument: "International Load Line Convention, 1966 and the 1988 Protocol", cols: ["Yes", "Yes"]},
    {no: "6", instrument: "Anti-Fouling System (AFS) Convention", cols: ["Yes", "N/A"]},
    {no: "7", instrument: "Mobile Offshore Drilling Unit Codes, 1979 & 1989", cols: ["Yes", "Yes"]},
];

const FLAG_STATES: FlagState[] = [
    {
        key: "id",
        name: "Republic of Indonesia",
        badges: ["National RO", "Full Statutory"],
        intro:
            "As the national classification society, BKI is fully authorized to conduct all statutory surveys, plan approvals, and certifications for Indonesian flagged vessels.",
        subtables: [
            {
                title: "Authorized Instruments & Certificates",
                spec: {
                    columns: ["No.", "Instrument / Certificate", "Survey", "Approval"],
                    rows: ID_rows,
                },
            },
        ],
    },
    {
        key: "tl",
        name: "Democratic Republic of Timor‑Leste",
        badges: ["RO", "Wide Scope"],
        intro:
            "BKI is authorized to conduct a wide range of statutory services for vessels flagged under Timor‑Leste.",
        subtables: [
            {
                title: "Authorized Instruments & Certificates",
                spec: {
                    columns: ["No.", "Instrument / Certificate", "Survey", "Approval"],
                    rows: TL_rows,
                },
            },
        ],
    },
    {
        key: "mn",
        name: "Mongolia",
        badges: ["RO", "Stability Review"],
        intro:
            "BKI is authorized to conduct statutory surveys and stability reviews for Mongolian flagged vessels.",
        subtables: [
            {
                title: "Authorized Instruments & Certificates",
                spec: {
                    columns: ["No.", "Instrument / Certificate", "Survey", "Stability Review"],
                    rows: MN_rows,
                },
            },
        ],
    },
];

// ---------- UI Helpers ----------

function Pill({children}: { children: React.ReactNode }) {
    return (
        <span
            className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
      {children}
    </span>
    );
}

function Divider() {
    return <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"/>;
}

function Table({spec}: { spec: TableSpec }) {
    return (
        <div
            className="relative overflow-hidden rounded-sm border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div
                className="max-h-[56vh] overflow-auto [scrollbar-width:thin] [scrollbar-color:theme(colors.white/.2)_transparent]">
                <table className="min-w-full text-left text-sm">
                    <thead className="sticky top-0 z-10 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur">
                    <tr>
                        {spec.columns.map((c, i) => (
                            <th
                                key={c + i}
                                className={`whitespace-nowrap border-b border-white/10 px-4 py-3 font-semibold text-white/80 ${
                                    i === 1 ? "w-[52%]" : "w-auto"
                                }`}
                            >
                                {c}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {spec.rows.map((r, idx) => {
                        const isSection = !r.no && (r.cols[0] === "" || r.cols.length === 0);
                        return (
                            <tr key={idx} className="odd:bg-white/[0.02]">
                                <td className="px-4 py-3 align-top text-white/60">{r.no ?? (isSection ? "" : idx + 1)}</td>
                                <td className={`px-4 py-3 align-top ${isSection ? "font-semibold text-white" : "text-white/90"}`}>
                                    {r.instrument}
                                </td>
                                {spec.columns.slice(2).map((_, cidx) => (
                                    <td key={cidx} className="px-4 py-3 align-top text-white/80">
                                        {isSection ? "" : r.cols[cidx]}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Collapsible({title, children, defaultOpen = true}: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean
}) {
    return (
        <details className="group rounded-sm border border-white/10 bg-white/[0.04] shadow-inner open:shadow-none"
                 open={defaultOpen}>
            <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm px-4 py-3 transition-colors hover:bg-white/[0.03]">
                <span className="text-base font-semibold text-white/90">{title}</span>
                <span
                    className="grid h-6 w-6 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="px-4 pb-4">
                {children}
            </div>
        </details>
    );
}

export default function AuthorizationPage() {
    const [active, setActive] = useState<string>(FLAG_STATES[0].key);
    const current = useMemo(() => FLAG_STATES.find(f => f.key === active)!, [active]);

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
                        text: "Authorization",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Authorization"}
            />

            <section className="relative isolate overflow-hidden bg-[#0A436A] py-16 text-white">
                {/* Decorative gradient */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div
                        className="absolute -top-40 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl"/>
                    <div
                        className="absolute bottom-[-120px] left-1/4 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.30),transparent_60%)] blur-3xl"/>
                </div>

                <motion.div
                    variants={containerV}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.25}}
                    className="2xl:px-28 xl:px-24 lg:px-20 px-4"
                >
                    {/* Heading */}
                    <motion.header variants={itemV} className="mb-8 grid gap-4">
                        <div className="inline-flex items-center gap-2">
                            <span
                                className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(16,185,129,0.7)]"/>
                            <p className="text-xs uppercase tracking-[0.18em] text-white/60">Our Authorizations</p>
                        </div>
                        <h2 className="text-balance text-3xl font-semibold leading-tight md:text-4xl">A Global
                            Recognition of Trust and Expertise</h2>
                        <p className="max-w-3xl text-pretty text-white/80">
                            To ensure the consistent application of international maritime safety and environmental
                            standards, Flag State Administrations delegate authority to Recognized Organizations (ROs).
                            This page details BKI&apos;s specific authorizations by Flag State.
                        </p>
                    </motion.header>

                    {/* Tabs */}
                    <motion.div variants={itemV} className="mb-6 flex flex-wrap gap-2">
                        {FLAG_STATES.map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setActive(f.key)}
                                className={`group relative rounded-full border px-3.5 py-1.5 text-sm transition-all cursor-pointer ${
                                    active === f.key
                                        ? "border-white/30 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                                        : "border-white/10 bg-white/0 text-white/70 hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
                                }`}
                            >
                                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-70"/>
                                {f.name}
                            </button>
                        ))}
                    </motion.div>

                    {/* Selected State Card */}
                    <motion.div key={current.key}
                                className="rounded-sm border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-2">
                                {current.badges?.map((b) => <Pill key={b}>{b}</Pill>)}
                            </div>
                            <span className="text-xs text-white/60">Updated • Statutory scope summarized</span>
                        </div>

                        <h3 className="text-2xl font-semibold">{current.name}</h3>
                        <p className="mt-2 max-w-3xl text-white/80">{current.intro}</p>

                        <Divider/>

                        <div className="grid gap-6">
                            {current.subtables.map((t, i) => (
                                <motion.div key={i}>
                                    <Collapsible title={t.title} defaultOpen>
                                        <Table spec={t.spec}/>
                                        <p className="mt-3 text-xs text-white/60">Legend: Yes = Authorized • N/A = Not
                                            applicable.</p>
                                    </Collapsible>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom note */}
                    <motion.p variants={itemV} className="mx-auto mt-6 max-w-3xl text-center text-sm text-white/60">
                        Each entry represents formal recognition of BKI’s technical expertise, integrity, and commitment
                        to the maritime industry.
                    </motion.p>
                </motion.div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
