export default function Header() {
  return (
    <header
      style={{
        height: 64,
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: 800, letterSpacing: 1 }}>
        INDUSTRIAL<span style={{ color: "var(--accent)" }}>3D</span>
      </div>

      <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
