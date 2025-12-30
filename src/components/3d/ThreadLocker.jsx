export default function ThreadLocker() {
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.35, 0.35, 1.6, 32]} />
        <meshStandardMaterial color="#2563eb" roughness={0.6} />
      </mesh>

      <mesh position={[0, 1, 0]}>
        <coneGeometry args={[0.18, 0.4, 24]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
    </group>
  );
}
