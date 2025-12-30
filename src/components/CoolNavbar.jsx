import { useEffect, useRef } from "react";

/* ================== DATA ================== */
const fishes = [
  { emoji: "🐟", size: 26 },
  { emoji: "🐠", size: 30 },
  { emoji: "🐡", size: 34 },
  { emoji: "🐟", size: 22 },
  { emoji: "🐠", size: 28 },
];

/* ================== FISH ================== */
const Fish = ({ emoji, size }) => {
  const ref = useRef(null);

  useEffect(() => {
    const fish = ref.current;
    if (!fish) return;

    const fromRight = Math.random() > 0.5;

    let x = fromRight ? 110 : -10;
    let y = Math.random() * 45 + 10;
    let direction = fromRight ? -1 : 1;

    const speed = Math.random() * 0.1 + 0.08;
    let wave = Math.random() * Math.PI * 2;

    const depth = Math.random() * 0.5 + 0.6;

    fish.style.transform = `scaleX(${-direction}) scale(${depth})`;
    fish.style.filter = `blur(${(1 - depth) * 2}px)`;

    let raf;
    const move = () => {
      x += direction * speed;
      wave += 0.03;

      const sway = Math.sin(wave) * 0.6;

      if (direction === -1 && x < -10) {
        direction = 1;
        fish.style.transform = `scaleX(-1) scale(${depth})`;
      }

      if (direction === 1 && x > 110) {
        direction = -1;
        fish.style.transform = `scaleX(1) scale(${depth})`;
      }

      fish.style.left = `${x}%`;
      fish.style.top = `${y + sway}%`;

      raf = requestAnimationFrame(move);
    };

    raf = requestAnimationFrame(move);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: 2, // 👈 cá luôn ở sau content
        transition: "transform 0.6s ease",
      }}
    >
      <div
        style={{
          fontSize: size,
          animation: "float 3s ease-in-out infinite",
          transformOrigin: "center",
          filter: "drop-shadow(0 0 6px rgba(255,255,255,0.3))",
        }}
      >
        {emoji}
      </div>
    </div>
  );
};

/* ================== BUBBLE ================== */
const Bubble = () => {
  const ref = useRef(null);

  useEffect(() => {
    const bubble = ref.current;
    if (!bubble) return;

    const x = Math.random() * 100;
    const size = Math.random() * 6 + 4;
    const duration = Math.random() * 6 + 4;

    bubble.style.left = `${x}%`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animation = `bubble ${duration}s linear infinite`;
  }, []);

  return <div ref={ref} className="bubble" />;
};

/* ================== NAVBAR ================== */
export default function AquariumNavbar() {
  return (
    <div className="aquarium">
      <div className="water" />

      {fishes.map((f, i) => (
        <Fish key={i} {...f} />
      ))}

      {Array.from({ length: 16 }).map((_, i) => (
        <Bubble key={i} />
      ))}

      {/* Menu */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          gap: 24,
          padding: "20px 32px",
          color: "#e0f7ff",
          fontWeight: 600,
        }}
      >
        <span>🏠 Home</span>
        <span>🛍 Shop</span>
        <span>📦 Products</span>
        <span>📞 Contact</span>
      </div>

      <style>{`
        .aquarium {
          position: relative;
          height: 90px;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(180deg, #041726, #0b355a, #041726);
          border-bottom: 2px solid rgba(255,255,255,0.1);
        }

        .content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 32px;
          font-size: 22px;
          font-weight: 600;
          color: #e0f7ff;
          letter-spacing: 1px;
        }

        .water {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255,255,255,0.08),
            transparent 40%
          );
          animation: waterMove 12s linear infinite;
        }

        .bubble {
          position: absolute;
          bottom: -10px;
          background: rgba(255,255,255,0.25);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes bubble {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-120px) scale(1.2); opacity: 0; }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }

        @keyframes waterMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
