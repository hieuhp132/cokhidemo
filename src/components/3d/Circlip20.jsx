export default function Circlip20() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.6, 0.05, 12, 32, Math.PI * 1.6]} />
      <meshStandardMaterial metalness={0.75} roughness={0.5} color="#6b7280" />
    </mesh>
  );
}
