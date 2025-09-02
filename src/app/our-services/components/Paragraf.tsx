import { classes } from "@/utils/string";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
    hidden: {opacity: 0, y: 24},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}},
};


const Paragraph = ({children, className = ""}: { children: React.ReactNode; className?: string }) => (
    <motion.p variants={fadeInUp} className={classes("text-white/80 leading-relaxed", className)}>{children}</motion.p>
);

export default Paragraph