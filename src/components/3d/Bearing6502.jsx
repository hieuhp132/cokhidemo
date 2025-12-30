import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Bearing6502({ rotate = true }) {
  const ref = useRef();

  useFrame(() => {
    if (rotate && ref.current) {
      ref.current.rotation.y += 0.004;
    }
  });

  return (
    <group ref={ref}>
      {/* ===== OUTER RING ===== */}
      <mesh>
        <torusGeometry args={[0.9, 0.15, 24, 64]} />
        <meshStandardMaterial
          color="#bfc3c6"
          metalness={0.85}
          roughness={0.45}
        />
      </mesh>

      {/* ===== INNER RING ===== */}
      <mesh>
        <torusGeometry args={[0.55, 0.12, 24, 64]} />
        <meshStandardMaterial
          color="#cfd3d6"
          metalness={0.9}
          roughness={0.35}
        />
      </mesh>

      {/* ===== BALLS ===== */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const r = 0.72;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * r,
              0,
              Math.sin(angle) * r,
            ]}
          >
            <sphereGeometry args={[0.08, 24, 24]} />
            <meshStandardMaterial
              color="#e5e7eb"
              metalness={0.95}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}
