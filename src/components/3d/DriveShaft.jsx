import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function DriveShaft({
  length = 3.6,
  rotate = true,
}) {
  const ref = useRef();

  useFrame(() => {
    if (rotate && ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={ref}>
      {/* ===== MAIN SHAFT ===== */}
      <mesh>
        <cylinderGeometry
          args={[
            0.25, // radius
            0.25,
            length,
            48,
          ]}
        />
        <meshStandardMaterial
          color="#9ca3af"
          metalness={0.8}
          roughness={0.45}
        />
      </mesh>

      {/* ===== CHAMFER TOP ===== */}
      <mesh position={[0, length / 2, 0]}>
        <coneGeometry args={[0.25, 0.25, 32]} />
        <meshStandardMaterial
          color="#9ca3af"
          metalness={0.8}
          roughness={0.45}
        />
      </mesh>

      {/* ===== CHAMFER BOTTOM ===== */}
      <mesh position={[0, -length / 2, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.25, 0.25, 32]} />
        <meshStandardMaterial
          color="#9ca3af"
          metalness={0.8}
          roughness={0.45}
        />
      </mesh>

      {/* ===== KEY SLOT (FAKE CUT) ===== */}
      <mesh position={[0.26, 0, 0]}>
        <boxGeometry args={[0.05, length * 0.6, 0.08]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
    </group>
  );
}
