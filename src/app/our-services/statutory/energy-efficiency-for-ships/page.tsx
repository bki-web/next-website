'use client';
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion, Variants} from "framer-motion";

// Tailwind notes:
// - Uses container mx-auto with responsive paddings
// - Soft gradients, glass cards, and subtle borders for modern/elegant look
// - Replace placeholder hrefs / handlers as needed

const fadeInUp: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

const stagger: Variants = {
    hidden: {},
    show: {transition: {staggerChildren: 0.08, delayChildren: 0.1}},
};

const sectionTitle = (
    title: string,
    subtitle?: string,
    kicker?: string
) => (
    <motion.div
        variants={fadeInUp}
        className="max-w-3xl"
    >
        {kicker && (
            <div
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>
                {kicker}
            </div>
        )}
        <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            {title}
        </h2>
        {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-white/70 md:text-lg">
                {subtitle}
            </p>
        )}
    </motion.div>
);

const measures = [
    {
        title: "Energy Efficiency Design Index (EEDI)",
        desc: "Standar efisiensi energi untuk kapal baru ≥ 400 GT, diverifikasi pada tahap desain dan saat sea trials sebelum penerbitan IEEC.",
    },
    {
        title: "Energy Efficiency eXisting ship Index (EEXI)",
        desc: "Penerapan prinsip efisiensi pada kapal eksisting ≥ 400 GT. Termasuk solusi seperti SHAPOLI/EPL dan re-issue IEEC.",
    },
    {
        title: "Ship Energy Efficiency Management Plan (SEEMP)",
        desc: "Bagian I, II (IMO DCS), dan III (CII): perencanaan, pengumpulan data konsumsi bahan bakar, serta peningkatan performa berkelanjutan.",
    },
];

const services = [
    "Verifikasi Berkas Teknis EEDI (Preliminary & Final)",
    "Persetujuan EEXI & Re-issuance IEEC",
    "Persetujuan SEEMP Bagian I, II, dan III",
    "Penerbitan Confirmation of Compliance (CoC) untuk SEEMP",
    "Verifikasi Data Tahunan Bahan Bakar & SoC untuk IMO DCS",
    "Perhitungan & verifikasi CII tahunan",
    "Persetujuan Rencana Tindakan Korektif untuk rating D/E",
];

const stepsEEDI = [
    {
        step: "1",
        title: "Preliminary Verification",
        desc: "Verifikasi EEDI pada tahap desain sebelum konstruksi.",
    },
    {
        step: "2",
        title: "Final Verification",
        desc: "Survei saat sea trial untuk konfirmasi nilai EEDI & penerbitan IEEC.",
    },
];

const stepsEEXI = [
    {
        step: "A",
        title: "Penilaian Kepatuhan",
        desc: "Bandingkan Attained vs Required EEXI; siapkan tindakan bila belum memenuhi.",
    },
    {
        step: "B",
        title: "Countermeasures",
        desc: "Implementasi SHAPOLI/EPL atau solusi lain, dengan bimbingan & persetujuan BKI.",
    },
    {
        step: "C",
        title: "Verifikasi & Sertifikasi",
        desc: "Verifikasi pada IAPP survey pertama ≥ 1 Jan 2023, lalu re-issue IEEC.",
    },
];

const seempParts = [
    {
        tag: "Part I",
        title: "Fondasi & Pemantauan",
        desc: "Wajib sejak 2013 untuk semua kapal ≥ 400 GT. Rencana peningkatan efisiensi energi kapal.",
    },
    {
        tag: "Part II (IMO DCS)",
        title: "Pengumpulan Data",
        desc: "Untuk kapal ≥ 5.000 GT. Metodologi pengumpulan & pelaporan konsumsi bahan bakar tahunan.",
    },
    {
        tag: "Part III (CII)",
        title: "Performa & Peningkatan",
        desc: "Rencana mencapai rating CII (A–E): metodologi perhitungan, rencana 3 tahun, dan prosedur evaluasi mandiri.",
    },
];

export default function EnergyEfficiencyForShipsPage() {
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
                        text: "Energy Efficiency for Ships",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Energy Efficiency for Ships"}
            />

            <section
                className="relative overflow-hidden bg-gradient-to-b from-[#0A436A] via-[#0A436A]/90 to-[#0A436A]/70">
                {/* Background accents */}
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl"/>
                    <div
                        className="absolute right-[-10rem] top-[20%] h-[22rem] w-[22rem] rounded-full bg-cyan-500/10 blur-3xl"/>
                    <div
                        className="absolute bottom-[-8rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"/>
                </div>

                {/* Hero */}
                <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.2}}
                        variants={stagger}
                        className="grid items-center gap-10 md:grid-cols-2"
                    >
                        <motion.div variants={fadeInUp}>
                            <div
                                className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                                Energy Efficiency for Ships
                            </div>
                            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                                Komitmen Global Menuju Masa Depan yang Lebih Hijau
                            </h1>
                            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                                Selaras dengan SDG 13, IMO menerapkan langkah wajib untuk menekan emisi gas rumah kaca
                                dari pelayaran melalui MARPOL Annex VI. Sebagai Recognized Organization (RO), BKI
                                membantu armada Anda patuh, efisien, dan kompetitif.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="relative"
                        >
                            <div
                                className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                                <ul className="grid gap-3 text-sm text-white/80">
                                    {measures.map((m) => (
                                        <li
                                            key={m.title}
                                            className="flex items-start gap-3 rounded-sm border border-white/10 bg-white/5 p-4"
                                        >
                                            <span
                                                className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-400"/>
                                            <div>
                                                <p className="font-medium text-white">{m.title}</p>
                                                <p className="mt-1 text-white/70">{m.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Technical Measures */}
                <div className="container mx-auto px-4 pb-12 md:pb-16 lg:pb-24">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.2}}
                        variants={stagger}
                        className="grid gap-10 lg:grid-cols-2"
                    >
                        {sectionTitle(
                            "Langkah Teknis: EEDI & EEXI",
                            "Fokus pada desain & peralatan kapal agar memenuhi tingkat efisiensi minimum.",
                            "MARPOL Annex VI"
                        )}

                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur">
                                <h3 className="text-lg font-semibold text-white">Untuk Kapal Baru: EEDI</h3>
                                <p className="mt-2 text-white/70">
                                    EEDI mendorong kapal baru yang lebih efisien & rendah emisi untuk ≥ 400 GT.
                                </p>
                                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                    {stepsEEDI.map((s) => (
                                        <div key={s.step} className="rounded-sm border border-white/10 bg-white/5 p-4">
                                            <div
                                                className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-200">
                                                {s.step}
                                            </div>
                                            <p className="font-medium text-white">{s.title}</p>
                                            <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur">
                                <h3 className="text-lg font-semibold text-white">Untuk Kapal Eksisting: EEXI</h3>
                                <p className="mt-2 text-white/70">
                                    Prinsip serupa EEDI untuk kapal dalam operasi ≥ 400 GT, memastikan armada memenuhi
                                    standar iklim.
                                </p>
                                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                                    {stepsEEXI.map((s) => (
                                        <div key={s.step} className="rounded-sm border border-white/10 bg-white/5 p-4">
                                            <div
                                                className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/20 text-sm font-semibold text-cyan-200">
                                                {s.step}
                                            </div>
                                            <p className="font-medium text-white">{s.title}</p>
                                            <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Operational Measures: SEEMP, DCS, CII */}
                <div className="container mx-auto px-4 pb-12 md:pb-16 lg:pb-24">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.2}}
                        variants={stagger}
                        className="grid gap-10 lg:grid-cols-2"
                    >
                        {sectionTitle(
                            "Langkah Operasional: SEEMP, DCS & CII",
                            "Pengelolaan & pemantauan operasi kapal untuk peningkatan kinerja berkelanjutan.",
                            "Manajemen Energi Kapal"
                        )}

                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-3">
                                {seempParts.map((p) => (
                                    <div key={p.tag}
                                         className="rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur">
                                        <div
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                                            {p.tag}
                                        </div>
                                        <p className="mt-3 font-medium text-white">{p.title}</p>
                                        <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur">
                                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                    <div>
                                        <p className="text-lg font-semibold text-white">Carbon Intensity Indicator
                                            (CII)</p>
                                        <p className="mt-1 text-white/70">
                                            Rating A–E per tahun berdasarkan data IMO DCS: pelaporan ≤ 3 bulan; SoC ≤ 5
                                            bulan; rencana korektif bila rating E (1 tahun) atau D (3 tahun
                                            berturut-turut).
                                        </p>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                                        <span className="h-2 w-6 rounded bg-emerald-400/80"/>
                                        <span className="h-2 w-6 rounded bg-lime-300/80"/>
                                        <span className="h-2 w-6 rounded bg-yellow-300/80"/>
                                        <span className="h-2 w-6 rounded bg-orange-300/80"/>
                                        <span className="h-2 w-6 rounded bg-red-400/80"/>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Services */}
                <div className="container mx-auto px-4 pb-16 md:pb-20 lg:pb-28">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, amount: 0.2}}
                        variants={stagger}
                        className="grid gap-10 lg:grid-cols-2"
                    >
                        {sectionTitle(
                            "Partner Kepatuhan Ujung-ke-Ujung",
                            "BKI menyediakan layanan statutori lengkap agar setiap tenggat & persyaratan terpenuhi dengan percaya diri.",
                            "Layanan BKI"
                        )}

                        <motion.ul
                            variants={fadeInUp}
                            className="grid gap-4 sm:grid-cols-2"
                        >
                            {services.map((s) => (
                                <li
                                    key={s}
                                    className="group rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-emerald-400/30 hover:bg-emerald-400/5"
                                >
                                    <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
                                        <span
                                            className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 transition group-hover:scale-125"/>
                                        Layanan
                                    </div>
                                    <p className="text-white">{s}</p>
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </section>

            <ContactUsSection/>
        </div>
    );
}
