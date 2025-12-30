import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {motion} from "framer-motion"
import { stagger, fadeUp } from "../animations/motions";
function HeroBlock() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[3.8, 2.2, 0.4]} />
      <meshStandardMaterial
        color="#2b2b2b"
        metalness={0.85}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        padding: "80px 64px",
        alignItems: "center",
      }}
    >
      {/* TEXT */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUp}>
          Industrial Products.
          <br />
          <span style={{ color: "var(--accent)" }}>
            Engineered in 3D.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{ color: "var(--text-dim)", maxWidth: 420 }}
        >
          Mechanical components presented with modern 3D visualization,
          optimized for performance and clarity.
        </motion.p>
      </motion.div>


      {/* 3D */}
      <div style={{ height: 300 }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <HeroBlock />
        </Canvas>
      </div>
    </section>
  );
}
