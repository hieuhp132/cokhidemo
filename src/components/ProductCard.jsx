import { motion } from "framer-motion";
import theme from "../styles/theme";
import { materialMap } from "../styles/materialBadge";

const gearSpin = {
  hover: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 1.2,
    },
  },
};


const ProductCard = ({ product }) => {
    const material =
    materialMap[product.material] || {
      label: "VẬT LIỆU",
      color: "#9ca3af",
      border: "#6b7280",
    };

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      style={{
        background: "#fff",
        padding: 18,
        borderRadius: 14,
        border: `1px solid ${theme.border}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={gearSpin}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          fontSize: 22,
          opacity: 0.25,
        }}
      >
        ⚙️
      </motion.div>


      {/* BADGE MATERIAL */}
      <div
        style={{
          display: "inline-block",
          padding: "4px 10px",
          fontSize: 12,
          fontWeight: 700,
          borderRadius: 999,
          color: material.color,
          border: `1px solid ${material.border}`,
          marginBottom: 10,
        }}
      >
        {material.label}
      </div>


      {/* IMAGE PLACEHOLDER */}
      <div
        style={{
          height: 150,
          background: "#f1f5f9",
          borderRadius: 10,
          marginBottom: 12,
        }}
      />

      <h4 style={{ fontSize: 16, fontWeight: 700 }}>
        {product.name}
      </h4>

      {/* SPEC TABLE */}
      <table
        style={{
          width: "100%",
          fontSize: 13,
          marginTop: 8,
          borderCollapse: "collapse",
          color: "#374151",
        }}
      >
        <tbody>
          {Object.entries(product.spec).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: "4px 0", opacity: 0.7 }}>{key}</td>
              <td style={{ padding: "4px 0", fontWeight: 600 }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CTA */}
      <motion.button
        whileTap={{ scale: 0.96 }}
        style={{
          marginTop: 14,
          width: "100%",
          padding: 10,
          background: theme.accent,
          color: "#fff",
          border: "none",
          borderRadius: 10,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Xem chi tiết
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
