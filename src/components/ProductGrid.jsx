import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { stagger } from "../styles/motion";

const ProductGrid = ({ products }) => (
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 20,
    }}
  >
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </motion.div>
);

export default ProductGrid;
