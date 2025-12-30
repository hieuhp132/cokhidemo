import AquariumNavbar from "../CoolNavbar";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: 32,
        fontSize: 13,
        color: "var(--text-dim)",
        display:"flex", flexDirection:"column", gap:50
      }}
    >
      © 2025 Industrial 3D — Engineering Products
      <AquariumNavbar/>
    </footer>
  );
}
