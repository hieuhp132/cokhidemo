import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motion";

export default function AnimatedSection({ children }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      style={{ padding: "64px" }}
    >
      {children}
    </motion.section>
  );
}
