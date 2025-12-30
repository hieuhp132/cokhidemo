import { motion } from "framer-motion";

const SkeletonCard = () => (
  <motion.div
    animate={{ opacity: [0.4, 1, 0.4] }}
    transition={{ repeat: Infinity, duration: 1.2 }}
    style={{
      height: 280,
      borderRadius: 12,
      background: "#E5E7EB",
    }}
  />
);

export default SkeletonCard;
