import { motion } from "framer-motion";
import { motion as m, easing } from "../styles/animationTokens";

const AnimatedBox = ({ children, hover }) => (
  <motion.div
    whileHover={hover && { y: -4 }}
    transition={{ duration: m.normal, ease: easing.smooth }}
  >
    {children}
  </motion.div>
);

export default AnimatedBox;
