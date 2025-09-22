import {motion, Variants} from "framer-motion";
import Section from "./Section";
import Image from 'next/image';
import Heading from "./Heading";
import Paragraph from "./Paragraf";
import {classes} from "@/utils/string";

const fadeInUp: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}},
};


const stagger: Variants = {
    hidden: {},
    show: {transition: {staggerChildren: 0.08, delayChildren: 0.05}},
};

export default function Pillar({index, title, lead, bullets, image, keyId, hidePillarText = false, pillarText}: {
    index: number;
    title: string;
    lead: string;
    bullets: { title: string; desc: string }[];
    image?: string;
    keyId: string
    hidePillarText?: boolean
    pillarText?: string
}) {
    const isEven = index % 2 === 0;
    const bg = isEven ? "bg-[#0A436A]" : "bg-[#072F4B]";


    return (
        <div id={`pillar-${keyId}`} className={`${bg}`}>
            <Section>
                {/* give the section content a definite height */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch min-h-[60dvh]">
                    {/* IMAGE COL */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={classes(
                            isEven ? "order-1" : "order-2 md:order-2",
                            "h-full min-h-0 rounded-sm"
                        )}
                    >
                        <div
                            className="
            relative w-full overflow-hidden border border-white/10
            shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            /* mobile: keep aspect; desktop: fill column height */
            aspect-[16/10] md:aspect-auto md:h-full rounded-sm
          "
                        >
                            {image ? (
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover rounded-sm"
                                    priority={index === 0}
                                />
                            ) : (
                                <div className="absolute inset-0 grid place-items-center bg-white/10 text-white/70">
                                    Add image
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                        </div>
                    </motion.div>

                    {/* TEXT COL */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-15% 0px" }}
                        className={classes(
                            isEven ? "order-2" : "order-1 md:order-1",
                            // center just this column vertically instead of the whole grid
                            "self-center"
                        )}
                    >
                        <Heading
                            title={title}
                            subtitle={hidePillarText ? pillarText : `Pillar ${index + 1}`}
                            align="left"
                        />
                        <Paragraph className="mt-3">{lead}</Paragraph>

                        <motion.ul variants={stagger} className="mt-6 space-y-4">
                            {bullets.map((b, i) => (
                                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/70 shrink-0" />
                                    <div>
                                        <p className="text-white font-medium">{b.title}</p>
                                        <p className="text-white/75 text-sm leading-relaxed mt-0.5">{b.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </Section>
        </div>

    );
}