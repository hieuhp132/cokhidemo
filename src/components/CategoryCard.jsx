import { motion } from "framer-motion";
import theme from "../styles/theme";

const CategoryCard = ({ title }) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 300 }}
    style={{
      padding: 24,
      background: "#fff",
      borderRadius: 12,
      border: `1px solid ${theme.border}`,
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 600,
    }}
  >
    <motion.div
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.4 }}
      style={{
        height: 3,
        background: theme.accent,
        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    />
    {title}
  </motion.div>
);

export default CategoryCard;
