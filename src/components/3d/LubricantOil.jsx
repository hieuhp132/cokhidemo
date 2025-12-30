export default function LubricantOil() {
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.45, 0.45, 1.8, 32]} />
        <meshStandardMaterial color="#374151" roughness={0.6} />
      </mesh>

      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.3, 24]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
    </group>
  );
}
