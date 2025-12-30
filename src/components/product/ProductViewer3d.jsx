import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import ProductModel from "./ProductModel";
import {
  overlay,
  modal,
  fadeUp,
} from "../animations/motions";



export default function ProductViewer3D({ product, onClose }) {
  return (
    <motion.div
      variants={overlay}
      initial="hidden"
      animate="show"
      exit="exit"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      {/* ===== MODAL ===== */}
      <motion.div
        variants={modal}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 760,
          background: "#0f1318",
          border: "1px solid #2a2f36",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* ===== 3D PANEL ===== */}
        <motion.div variants={fadeUp} style={{ height: 360 }}>
          <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[6, 6, 6]}
              intensity={1.4}
            />
            <ProductModel product={product} />
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              rotateSpeed={0.8}
              zoomSpeed={0.8}
              minDistance={3}
              maxDistance={10}
            />
          </Canvas>
        </motion.div>

        {/* ===== INFO PANEL ===== */}
        <motion.div
          variants={fadeUp}
          style={{ padding: 24, fontSize: 14 }}
        >
          <motion.h2 variants={fadeUp} style={{ marginTop: 0 }}>
            {product.name}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            style={{ opacity: 0.7, marginBottom: 12 }}
          >
            {product.seo}
          </motion.div>

          <hr style={{ opacity: 0.2 }} />

          {/* SPEC LIST */}
          <motion.div
            variants={fadeUp}
            style={{ marginTop: 12 }}
          >
            {product.spec &&
              Object.entries(product.spec).map(([k, v]) => (
                <motion.div
                  key={k}
                  variants={fadeUp}
                  style={{ marginBottom: 6 }}
                >
                  <strong>{k}:</strong> {v}
                </motion.div>
              ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{ marginTop: 16, fontWeight: 700 }}
          >
            Giá: {product.price.toLocaleString()}₫
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{ marginTop: 6, fontSize: 13 }}
          >
            Tình trạng: {product.stock}
          </motion.div>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            style={{
              marginTop: 20,
              padding: "10px 16px",
              border: "none",
              background: "#f59e0b",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Đóng
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
