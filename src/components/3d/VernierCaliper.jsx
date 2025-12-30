export default function VernierCaliper() {
  return (
    <mesh rotation={[0, 0, Math.PI / 2]}>
      <boxGeometry args={[3.2, 0.25, 0.15]} />
      <meshStandardMaterial metalness={0.6} roughness={0.4} color="#cfd3d6" />
    </mesh>
  );
}
