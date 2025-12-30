import { useEffect, useRef, useState } from "react";

const FISH_TYPES = [
  { emoji: "🐟", size: 28 },
  { emoji: "🐠", size: 32 },
  { emoji: "🐡", size: 26 },
  { emoji: "🦈", size: 38 },
];

const random = (min, max) => Math.random() * (max - min) + min;

const createFish = (id) => {
  const type = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
  return {
    id,
    ...type,
    x: random(0, 80),
    y: random(10, 70),
    dx: random(-1, 1),
    dy: random(-0.6, 0.6),
    speed: random(0.4, 1.2),
  };
};

export default function AquariumNavbar() {
  const [fishList, setFishList] = useState(
    Array.from({ length: 8 }, (_, i) => createFish(i))
  );
  const hoverRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFishList((prev) =>
        prev.map((fish) => {
          let { x, y, dx, dy, speed } = fish;

          // random đổi hướng nhẹ
          if (Math.random() < 0.05) {
            dx += random(-0.3, 0.3);
            dy += random(-0.2, 0.2);
          }

          const boost = hoverRef.current ? 2 : 1;

          x += dx * speed * boost;
          y += dy * speed * boost;

          // chạm biên → quay đầu
          if (x < 0 || x > 90) dx *= -1;
          if (y < 5 || y > 75) dy *= -1;

          return { ...fish, x, y, dx, dy };
        })
      );
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      style={{
        position: "relative",
        height: 80,
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      {/* Sóng nước */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), transparent 40%)",
          animation: "wave 6s infinite alternate",
        }}
      />

      {/* Cá */}
      {fishList.map((fish) => {
        const angle = Math.atan2(fish.dy, fish.dx) * (180 / Math.PI);
        const flip = fish.dx < 0 ? "rotateY(180deg)" : "";

        return (
          <div
            key={fish.id}
            style={{
              position: "absolute",
              left: `${fish.x}%`,
              top: `${fish.y}%`,
              fontSize: fish.size,
              transition: "left 0.3s linear, top 0.3s linear",
              transform: `${flip} rotate(${angle}deg)`,
              filter: "drop-shadow(0 0 6px rgba(0,255,255,0.6))",
              userSelect: "none",
            }}
          >
            {fish.emoji}
          </div>
        );
      })}

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

      {/* Keyframes inline */}
      <style>
        {`
          @keyframes wave {
            from { opacity: 0.4 }
            to { opacity: 0.7 }
          }
        `}
      </style>
    </div>
  );
}
