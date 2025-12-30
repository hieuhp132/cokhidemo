import { motion } from "framer-motion";

const AddToCartFly = ({ trigger }) => {
  if (!trigger) return null;

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      animate={{ opacity: 0, scale: 0.2, x: 300, y: -200 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "fixed",
        width: 40,
        height: 40,
        background: "#F97316",
        borderRadius: "50%",
        top: "50%",
        left: "50%",
        zIndex: 999,
      }}
    />
  );
};

export default AddToCartFly;
