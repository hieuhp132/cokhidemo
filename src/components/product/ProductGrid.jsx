import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProductCard3D from "./ProductCard3d";
import ProductViewer3D from "./ProductViewer3d";
import { products } from "../../data/products";

export default function ProductGrid() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="grid">
        {products.map(p => (
          <ProductCard3D
            key={p.id}
            product={p}
            onOpen={setActive}
          />
        ))}
      </div>

      <AnimatePresence>
      {active && (
        <ProductViewer3D
          product={active}
          onClose={() => setActive(null)}
        />
      )}</AnimatePresence>
    </>
  );
}
