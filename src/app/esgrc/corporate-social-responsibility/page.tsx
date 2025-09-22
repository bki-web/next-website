'use client';
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion, Variants} from "framer-motion";

const fadeIn = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}},
} as Variants;

const stagger = {
    hidden: {},
    show: {transition: {staggerChildren: 0.08, delayChildren: 0.1}},
} as Variants;

export default function CorporateSocialResponsibility() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white">
            <PageTransition/>

            {/* Hero Section */}
            <Hero
                routes={[
                    {
                        text: "Home",
                        href: "/",
                    },
                    {
                        text: "ESGRC - Corporate Social Responsibility",
                    },
                ]}
                backgroundClass="bg-[url('/environment-bg.jpg')]"
                title={"Corporate Social Responsibility"}
            />

            <section
                className="relative isolate overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
                {/* decorative blob */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-3xl bg-sky-500/10"
                />

                <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                    {/* Header */}
                    <motion.header
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: false, margin: "-10%"}}
                        className="relative"
                    >
                        <motion.div variants={fadeIn} className="mb-4 inline-flex items-center gap-3">
            <span
                className="rounded-full px-3 py-1 text-xs font-medium tracking-wide ring-1 bg-sky-900/40 text-sky-200 ring-sky-800">
              Tahun 2007
            </span>
                            <span
                                className="text-xs text-slate-400">Corporate Social Responsibility</span>
                        </motion.div>

                        <motion.h2
                            variants={fadeIn}
                            className="text-2xl font-bold leading-tight md:text-4xl text-white"
                        >
                            Environmental Partnership & Development Program
                        </motion.h2>

                        <motion.p
                            variants={fadeIn}
                            className="mt-4 max-w-3xl text-base leading-relaxed md:text-lg text-slate-300"
                        >
                            In 2007, the company allocated <strong
                            className="font-semibold text-white">Rp. 700,000,000,-</strong> for
                            Environmental Partnership and Development Program. The fund originates from profit
                            appropriation as already
                            mentioned in resolution of Shareholders Meeting and from loan returns.
                        </motion.p>

                        {/* Stat card */}
                        <motion.div
                            variants={fadeIn}
                            className="mt-6 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
                        >
                            <div
                                className="rounded-2xl border p-5 shadow-sm border-slate-800 bg-slate-900/50">
                                <div
                                    className="text-xs uppercase tracking-wide text-slate-400">Allocated
                                </div>
                                <div className="mt-1 text-2xl font-semibold text-white">Rp.
                                    700,000,000,-
                                </div>
                            </div>
                            <div
                                className="rounded-2xl border p-5 shadow-sm border-slate-800 bg-slate-900/50">
                                <div
                                    className="text-xs uppercase tracking-wide text-slate-400">Source
                                </div>
                                <div className="mt-1 text-base font-medium text-slate-200">Profit
                                    appropriation & loan returns
                                </div>
                            </div>
                            <div
                                className="rounded-2xl border p-5 shadow-sm border-slate-800 bg-slate-900/50">
                                <div
                                    className="text-xs uppercase tracking-wide text-slate-400">Focus
                                    Year
                                </div>
                                <div className="mt-1 text-base font-medium text-slate-200">2007
                                </div>
                            </div>
                        </motion.div>
                    </motion.header>

                    {/* Body */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: false, margin: "-10%"}}
                        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5"
                    >
                        {/* Left column: narrative */}
                        <motion.div variants={fadeIn} className="md:col-span-3">
                            <article className="prose prose-slate max-w-none prose-p:leading-relaxed prose-invert">
                                <p>
                                    The Environmental Partnership and Development Program is intended to develop and
                                    create a sound business
                                    climate and maintain the relationship that motivates the growth of mutually
                                    supporting conditions between
                                    State-Owned Corporations, cooperatives and private parties as well as motivates the
                                    cooperatives and small
                                    scale business as people’s economic institutions to implement, increase and develop
                                    their business more
                                    effectively and efficiently as well as give the utmost added value and benefit to
                                    their members or the
                                    community surroundings.
                                </p>
                                <p>
                                    It is also targeted to create wider business and work opportunities to small scale
                                    business and
                                    cooperatives and rural community, as well as implement more rationale and efficient
                                    management system
                                    followed by the capability improvement both capitalization, personnel,
                                    administration, finance and
                                    entrepreneurship independence. 2007 development is given priority to small scale
                                    business both
                                    individual, entities and cooperatives (Rural Unit Cooperatives) particularly the
                                    prospective independent
                                    Rural Unit Cooperatives.
                                </p>
                            </article>
                        </motion.div>

                        {/* Right column: goals list */}
                        <motion.div variants={fadeIn} className="md:col-span-2">
                            <div className="sticky top-8 space-y-4">
                                <div
                                    className="rounded-2xl border p-6 shadow-sm border-slate-800 bg-slate-900/50">
                                    <h3 className="text-sm font-semibold tracking-wide text-white">Program
                                        Outcomes</h3>
                                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500/80"/>
                                            Wider business & work opportunities
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500/80"/>
                                            Stronger cooperatives & small-scale enterprises
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500/80"/>
                                            Rational, efficient management systems
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500/80"/>
                                            Capability uplift: capitalization, people, admin, finance
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500/80"/>
                                            Entrepreneurship independence
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className="rounded-2xl border p-6 shadow-sm border-slate-800 bg-slate-900/50">
                                    <h3 className="text-sm font-semibold tracking-wide text-white">Priority
                                        (2007)</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                        Small-scale businesses (individuals, entities, and cooperatives / Rural Unit
                                        Cooperatives), with special
                                        emphasis on prospective independent Rural Unit Cooperatives.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* bottom border flourish */}
                <div
                    className="h-px w-full bg-gradient-to-r from-transparent to-transparent via-sky-700/30"/>
            </section>
        </div>
    )
}