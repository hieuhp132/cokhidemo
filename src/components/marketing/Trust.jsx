import {motion} from "framer-motion";

export default function Trust() {
  return (
    <section style={{ padding: "64px" }}>
      <h2 style={{ marginBottom: 24 }}>
        Built for Engineering Teams
      </h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ maxWidth: 720, color: "var(--text-dim)" }}
      >
        <p>
          Chúng tôi tập trung vào việc cung cấp vật tư và linh kiện
          cơ khí với thông tin rõ ràng, nhất quán và phù hợp tiêu chuẩn.
        </p>

        <p>
          Mỗi sản phẩm được trình bày với dữ liệu kỹ thuật cần thiết,
          giúp giảm thời gian trao đổi giữa kỹ sư, mua hàng và nhà cung cấp.
        </p>

        <p>
          Phù hợp cho cả đơn hàng nhỏ lẻ và nhu cầu triển khai hệ thống.
        </p>
      </motion.div>
    </section>
  );
}
