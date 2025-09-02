import { motion, Variants } from "framer-motion";

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

export default Heading