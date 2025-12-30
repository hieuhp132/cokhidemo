import {motion} from "framer-motion";

export default function CTA() {
  return (
    <section
      style={{
        padding: "64px",
        background: "var(--bg-panel)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <h2>Need Technical Details or Quotation?</h2>

      <p style={{ color: "var(--text-dim)", maxWidth: 520 }}>
        Liên hệ với chúng tôi để nhận thông tin kỹ thuật chi tiết,
        tư vấn vật liệu hoặc báo giá cho dự án của bạn.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        style={{
          marginTop: 24,
          padding: "12px 24px",
          background: "var(--accent)",
          border: "none",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Contact Engineering Team
      </motion.button>
    </section>
  );
}
