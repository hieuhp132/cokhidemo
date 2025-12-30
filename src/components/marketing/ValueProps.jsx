import {motion} from "framer-motion";
import { stagger } from "../animations/motions";

export default function ValueProps() {
  const items = [
    {
      title: "Engineered for Industry",
      desc:
        "Sản phẩm cơ khí được chọn lọc theo tiêu chuẩn kỹ thuật, phù hợp cho môi trường sản xuất và vận hành liên tục.",
    },
    {
      title: "Material Transparency",
      desc:
        "Thông tin vật liệu, kích thước và ứng dụng được công bố rõ ràng, giúp kỹ sư và bộ phận mua hàng ra quyết định nhanh.",
    },
    {
      title: "3D Visualization",
      desc:
        "Mô phỏng 3D trực quan giúp kiểm tra hình khối, tỷ lệ và tính phù hợp trước khi đặt hàng.",
    },
  ];

  return (
    <motion.section 
        variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{ padding: "64px" }}
    
    >
      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 32,
        }}
      >
        {items.map((i) => (
          <motion.div
            key={i.title}
            style={{
              background: "var(--bg-panel)",
              border: "1px solid var(--border)",
              padding: 24,
            }}
          >
            <h3>{i.title}</h3>
            <p style={{ color: "var(--text-dim)", fontSize: 14 }}>
              {i.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
