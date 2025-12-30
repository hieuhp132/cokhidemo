export default function Section({ title, children }) {
  return (
    <section style={{ padding: "64px" }}>
      <h2 style={{ marginBottom: 24 }}>{title}</h2>
      {children}
    </section>
  );
}
