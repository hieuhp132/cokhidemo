export default function HexKeySet() {
  return (
    <group>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[i * 0.15 - 0.3, 0, 0]}>
          <boxGeometry args={[0.08, 1.6, 0.08]} />
          <meshStandardMaterial color="#4b5563" />
        </mesh>
      ))}
    </group>
  );
}
