import { motion, Variants } from "framer-motion";
import Section from "./Section";
import Image from 'next/image';
import Heading from "./Heading";
import Paragraph from "./Paragraf";

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

export default function Pillar({index, title, lead, bullets, image, keyId, hidePillarText = false}: {
    index: number;
    title: string;
    lead: string;
    bullets: { title: string; desc: string }[];
    image?: string;
    keyId: string
    hidePillarText?: boolean
}) {
    const isEven = index % 2 === 0;
    const bg = isEven ? "bg-[#0A436A]" : "bg-[#072F4B]";


    return (
        <div id={`pillar-${keyId}`} className={`${bg}`}>
            <Section>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{once: true}}
                                className={isEven ? "order-1" : "order-2 md:order-2"}>
                        <div
                            className={`relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]`}>
                            {image ? (
                                <Image src={image} alt={title} fill className="object-cover"/>
                            ) : (
                                <div className="absolute inset-0 grid place-items-center bg-white/10 text-white/70">Add
                                    image</div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"/>
                        </div>
                    </motion.div>


                    <motion.div variants={stagger} initial="hidden" whileInView="show"
                                viewport={{once: true, margin: "-15% 0px"}}
                                className={isEven ? "order-2" : "order-1 md:order-1"}>
                        <Heading title={title} subtitle={hidePillarText ? "" : `Pillar ${index + 1}`} align="left"/>
                        <Paragraph className="mt-3">{lead}</Paragraph>
                        <motion.ul variants={stagger} className="mt-6 space-y-4">
                            {bullets.map((b, i) => (
                                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/70"/>
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