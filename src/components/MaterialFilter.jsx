import { materialMap } from "../styles/materialBadge";

const MaterialFilter = ({ active, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        justifyContent: "center",
        marginBottom: 32,
      }}
    >
      {Object.entries(materialMap).map(([key, m]) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          style={{
            padding: "8px 16px",
            borderRadius: 999,
            border: `2px solid ${m.border}`,
            background: active === key ? m.border : "transparent",
            color: active === key ? "#111" : m.border,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
        >
          {m.label}
        </button>
      ))}

      <button
        onClick={() => onChange("all")}
        style={{
          padding: "8px 16px",
          borderRadius: 999,
          border: "2px solid #6b7280",
          background: active === "all" ? "#6b7280" : "transparent",
          color: active === "all" ? "#fff" : "#6b7280",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        TẤT CẢ
      </button>
    </div>
  );
};

export default MaterialFilter;
