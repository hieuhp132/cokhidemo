import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Bulong Inox M8 – simplified industrial 3D
 */
export default function BoltM8({ rotate = true }) {
  const group = useRef();

  useFrame(() => {
    if (rotate && group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group}>
      {/* ================= HEAD (HEX) ================= */}
      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry
          args={[
            0.42, // top radius
            0.42, // bottom radius
            0.3,  // height
            6,    // hex shape
          ]}
        />
        <meshStandardMaterial
          color="#cfd3d6"
          metalness={0.9}
          roughness={0.35}
        />
      </mesh>

      {/* ================= SHAFT ================= */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry
          args={[
            0.2, // radius
            0.2,
            2.4, // length
            32,
          ]}
        />
        <meshStandardMaterial
          color="#cfd3d6"
          metalness={0.9}
          roughness={0.4}
        />
      </mesh>

      {/* ================= THREAD (FAKE RINGS) ================= */}
      {Array.from({ length: 14 }).map((_, i) => (
        <mesh
          key={i}
          position={[0, -1.1 + i * 0.16, 0]}
        >
          <torusGeometry
            args={[
              0.21, // main radius
              0.03, // tube
              8,
              24,
            ]}
          />
          <meshStandardMaterial
            color="#bfc3c6"
            metalness={0.85}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}
