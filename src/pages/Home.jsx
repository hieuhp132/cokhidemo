import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import TypingGroupLoop from "../components/TypingText";
import { catalog } from "../data/catalog";
import { products } from "../data/products";
import MaterialFilter from "../components/MaterialFilter";
/* ================== STYLES ================== */
const styles = {
  /* ===== BANNER ===== */
  banner: {
    position: "relative",
    width: "100%",
    height: 420,
    overflow: "hidden",
    borderRadius: 14,
  },

  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.65), rgba(0,0,0,0.25))",
  },

  textBox: {
    position: "absolute",
    top: "50%",
    left: "8%",
    transform: "translateY(-50%)",
    color: "#fff",
    maxWidth: 560,
  },

  badge: {
    display: "inline-block",
    marginBottom: 14,
    padding: "6px 14px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: ".4px",
    background: "rgba(251,191,36,0.15)",
    color: "#fbbf24",
    border: "1px solid rgba(251,191,36,0.45)",
    textTransform: "uppercase",
  },

  title: {
    fontSize: 44,
    fontWeight: 800,
    letterSpacing: 1,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    color: "#e5e7eb",
    lineHeight: 1.6,
  },

  /* ===== SEARCH ===== */
  searchSection: {
    marginTop: -40,
  },

  searchWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    maxWidth: 900,
    margin: "0 auto 60px",
    background: "#ffffff",
    borderRadius: 14,
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    overflow: "hidden",
  },

  searchInput: {
    flex: 1,
    padding: "20px 22px",
    fontSize: 16,
    border: "none",
    outline: "none",
    color: "#111827",
    background: "transparent",
    zIndex: 2,
  },

  searchTyping: {
    position: "absolute",
    left: 22,
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    zIndex: 1,
  },

  searchTypingTitle: {
    fontSize: 15,
    fontWeight: 500,
    color: "#9ca3af",
  },

  searchButton: {
    padding: "0 30px",
    height: "100%",
    background: "#fbbf24",
    border: "none",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
  },

  /* ===== COMMON ===== */
  sectionTitle: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 32,
  },

  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
  },
};
/* ============================================ */

const Home = () => {
  const [value, setValue] = useState("");
  const [materialFilter, setMaterialFilter] = useState("all");

  const filteredProducts =
    materialFilter === "all"
      ? products
      : products.filter((p) => p.material === materialFilter);

  return (
    <>
      {/* ===== BANNER ===== */}
      <ScrollReveal>
        <div style={styles.banner}>
          <img
            src="./src/assets/mid-section-craftswoman-working-machine.jpg"
            alt="Vật tư cơ khí công nghiệp"
            style={styles.bannerImage}
          />
          <div style={styles.overlay} />

          <div style={styles.textBox}>
            <div style={styles.badge}>⚙️ Giải pháp cơ khí công nghiệp</div>

            <h1 style={styles.title}>Vật Tư Cơ Khí Tổng Hợp</h1>

            <p style={styles.subtitle}>
              Bulong · Vòng bi · Truyền động · Thủy lực
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ===== SEARCH ===== */}
      <ScrollReveal>
        <div style={styles.searchSection}>
          <div style={styles.searchWrapper}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={styles.searchInput}
            />

            {!value && (
              <div style={styles.searchTyping}>
                <TypingGroupLoop
                  items={[
                    { title: "Tìm bulong inox M8" },
                    { title: "Tìm vòng bi 6205" },
                    { title: "Tìm phụ kiện truyền động" },
                  ]}
                  titleStyle={styles.searchTypingTitle}
                  speed={45}
                  deleteSpeed={30}
                  pause={1400}
                />
              </div>
            )}

            <button style={styles.searchButton}>🔍 Tìm kiếm</button>
          </div>
        </div>
      </ScrollReveal>


      {/*Filter */}
      <ScrollReveal>
        <MaterialFilter
        active={materialFilter}
        onChange={setMaterialFilter}
      />
      </ScrollReveal>

      <ScrollReveal>
        <div style={styles.grid4}>
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      </ScrollReveal>




      <ScrollReveal>
        <h4 style={styles.sectionTitle}>Tất cả</h4>
      </ScrollReveal>
      <ScrollReveal>
        <div style={styles.grid4}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </ScrollReveal>


      <Footer />
    </>
  );
};

export default Home;
