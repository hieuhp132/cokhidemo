import theme from "../styles/theme";

const categories = [
  {
    title: "Bulong – Ốc vít – Đinh tán",
    items: [
      "Bulong (bu lông), ốc vít, đai ốc",
      "Long đen (vòng đệm), vòng hãm",
      "Đinh tán (rivet)",
    ],
  },
  {
    title: "Phụ kiện nối và liên kết",
    items: [
      "Khớp nối trục, khớp nối mềm – cứng",
      "Coupling, pulley (puly), đai truyền, xích – líp",
      "Mối ghép ren, then – chốt, bạc đạn",
    ],
  },
  {
    title: "Vòng bi – Bạc đạn",
    items: [
      "Vòng bi cầu, vòng bi đũa, vòng bi kim",
      "Gối đỡ (bearing housing)",
    ],
  },
  {
    title: "Phụ kiện thủy lực – khí nén",
    items: [
      "Van (1 chiều, tiết lưu, an toàn…)",
      "Xi lanh khí / xi lanh thủy lực",
      "Đầu nối ống, ống dẫn",
      "Đồng hồ đo áp suất",
    ],
  },
  {
    title: "Truyền động – Truyền lực",
    items: [
      "Bánh răng, trục răng",
      "Dây đai, xích, bánh xích",
      "Trục, bạc, nhông",
    ],
  },
  {
    title: "Phụ kiện hàn – gia công",
    items: [
      "Kẹp hàn, kẹp gá",
      "Mỏ hàn, mỏ cắt, đầu phun",
      "Vật tư hàn (que, dây, thuốc hàn)",
    ],
  },
  {
    title: "Lò xo – Gioăng – Phớt",
    items: [
      "Lò xo nén, kéo, xoắn",
      "Gioăng cao su, silicone",
      "Phớt chắn dầu, phớt bụi",
    ],
  },
  {
    title: "Phụ kiện bảo vệ – hỗ trợ",
    items: [
      "Ống luồn dây, ốp bảo vệ, lưới chắn",
      "Vít khóa, tay vặn, tay nắm",
      "Bản lề, khóa, thanh giằng",
    ],
  },
  {
    title: "Phụ kiện điện – điều khiển",
    items: [
      "Công tắc, relay, cảm biến",
      "Tủ điện, cầu đấu, dây dẫn",
    ],
  },
];

const CategoryList = () => {
  const wrapper = {
    background: "#fff",
    border: `1px solid ${theme.border}`,
    borderRadius: 8,
    padding: 16,
  };

  const titleStyle = {
    fontSize: 15,
    fontWeight: 700,
    color: theme.primary,
    marginBottom: 6,
  };

  const itemStyle = {
    fontSize: 14,
    color: theme.textMain,
    padding: "4px 0",
    cursor: "pointer",
  };

  return (
    <div style={wrapper}>
      {categories.map((cat, idx) => (
        <div key={idx} style={{ marginBottom: 16 }}>
          <div style={titleStyle}>{cat.title}</div>
          <div>
            {cat.items.map((item, i) => (
              <div
                key={i}
                style={itemStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color = theme.secondary)
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = theme.textMain)
                }
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
