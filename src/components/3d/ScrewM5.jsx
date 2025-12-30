export default function ScrewM5() {
  return (
    <group>
      {/* head */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 32]} />
        <meshStandardMaterial metalness={0.7} roughness={0.5} color="#9ca3af" />
      </mesh>

      {/* shaft */}
      <mesh>
        <cylinderGeometry args={[0.16, 0.16, 2.2, 32]} />
        <meshStandardMaterial metalness={0.7} roughness={0.55} color="#9ca3af" />
      </mesh>
    </group>
  );
}
