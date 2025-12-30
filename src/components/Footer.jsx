import { motion } from "framer-motion";
import theme from "../styles/theme";

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "6px 12px",
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 600,
  color: "#e5e7eb",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
};

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      background: theme.primary,
      color: "#e5e7eb",
      padding: "60px 24px 32px",
      marginTop: 100,
    }}
  >
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "2fr 1.5fr 1fr",
        gap: 40,
      }}
    >
      {/* ===== BRAND + BADGES ===== */}
      <div>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 1,
            color: "#fff",
            marginBottom: 12,
          }}
        >
          Vật Tư Cơ Khí Tổng Hợp
        </h2>

        {/* === BADGES === */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            style={badgeStyle}
          >
            🔧 Cơ khí chính xác
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.05 }}
            style={badgeStyle}
          >
            🪛 Lắp ráp – Bảo trì
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.05 }}
            style={badgeStyle}
          >
            ⚙️ DIN · ISO · JIS
          </motion.span>
        </div>

        <p style={{ lineHeight: 1.7 }}>
          Chuyên cung cấp <strong>bulong, ốc vít, đai ốc, vòng bi, phụ kiện cơ khí</strong>
          cho xưởng cơ khí, nhà máy sản xuất và công trình công nghiệp.
        </p>
      </div>

      {/* ===== INTERNAL LINKS ===== */}
      <nav aria-label="Footer navigation">
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            marginBottom: 12,
            color: "#fff",
          }}
        >
          Danh mục sản phẩm
        </h3>

        <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
          <li><a href="/oc-vit-bulong">Ốc vít – Bulong – Đai ốc</a></li>
          <li><a href="/vong-bi">Vòng bi – Bạc đạn</a></li>
          <li><a href="/dem-chot-circlip">Đệm – Chốt – Circlip</a></li>
          <li><a href="/keo-khoa-ren">Keo khóa ren – Dầu bôi trơn</a></li>
          <li><a href="/dung-cu-co-khi">Dụng cụ cơ khí</a></li>
        </ul>
      </nav>

      {/* ===== CONTACT ===== */}
      <div>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            marginBottom: 12,
            color: "#fff",
          }}
        >
          Liên hệ
        </h3>

        <p>📍 TP. Hồ Chí Minh</p>
        <p>📞 Hotline: <strong>090x xxx xxx</strong></p>
        <p>✉️ sales@vattucokhi.vn</p>
      </div>
    </div>

    {/* ===== COPYRIGHT ===== */}
    <div
      style={{
        maxWidth: 1200,
        margin: "32px auto 0",
        paddingTop: 20,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        textAlign: "center",
        fontSize: 13,
        color: "#9ca3af",
      }}
    >
      © {new Date().getFullYear()} Vật Tư Cơ Khí Tổng Hợp – Industrial Hardware Supplier
    </div>
  </motion.footer>
);

export default Footer;
