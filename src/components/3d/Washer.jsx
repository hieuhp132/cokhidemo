export default function WasherM8() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.55, 0.08, 16, 48]} />
      <meshStandardMaterial metalness={0.8} roughness={0.4} color="#bfc3c6" />
    </mesh>
  );
}
