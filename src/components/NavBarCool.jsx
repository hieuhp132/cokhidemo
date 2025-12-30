import { useEffect, useRef } from "react";

const FISH_COUNT = 7;
const BUBBLE_COUNT = 20;

export default function AquariumNavbar() {
  const fishesRef = useRef([]);
  const bubblesRef = useRef([]);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const width = nav.offsetWidth;
    const height = nav.offsetHeight;

    // ===== INIT FISH =====
    fishesRef.current = fishesRef.current.map(fish => ({
      ...fish,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() * 0.6 + 0.4) * (Math.random() > 0.5 ? 1 : -1),
      vy: (Math.random() * 0.4 - 0.2),
    }));

    // ===== ANIMATION LOOP =====
    const animate = () => {
      fishesRef.current.forEach(fish => {
        fish.x += fish.vx;
        fish.y += fish.vy;

        // random smooth turning
        if (Math.random() < 0.01) {
          fish.vy += Math.random() * 0.2 - 0.1;
        }

        // vertical bounds
        if (fish.y < 20 || fish.y > height - 40) {
          fish.vy *= -1;
        }

        // horizontal wrap + turn
        if (fish.x > width + 60) {
          fish.x = -60;
        }
        if (fish.x < -60) {
          fish.x = width + 60;
        }

        const facing = fish.vx > 0 ? "rotateY(0deg)" : "rotateY(180deg)";

        fish.el.style.transform = `
          translate(${fish.x}px, ${fish.y}px)
          ${facing}
        `;
      });

      // bubbles
      bubblesRef.current.forEach(bubble => {
        bubble.y -= bubble.speed;
        if (bubble.y < -20) {
          bubble.y = height + 20;
          bubble.x = Math.random() * width;
        }
        bubble.el.style.transform = `translate(${bubble.x}px, ${bubble.y}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={navRef}
      style={{
        position: "relative",
        height: 90,
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #0b4f6c, #0a2f3d)",
      }}
    >
      {/* Waves */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,.08), transparent 40%)",
          animation: "wave 8s ease-in-out infinite",
        }}
      />

      {/* Fish */}
      {[...Array(FISH_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={el => (fishesRef.current[i] = { el })}
          style={{
            position: "absolute",
            width: 40,
            height: 20,
            borderRadius: "50%",
            background: `hsl(${Math.random() * 360},80%,60%)`,
            boxShadow: "0 0 10px rgba(255,255,255,.4)",
            transition: "transform 0.4s linear",
          }}
        >
          {/* tail */}
          <div
            style={{
              position: "absolute",
              right: -8,
              top: 4,
              width: 10,
              height: 10,
              background: "inherit",
              clipPath: "polygon(0 50%,100% 0,100% 100%)",
            }}
          />
        </div>
      ))}

      {/* Bubbles */}
      {[...Array(BUBBLE_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={el =>
            (bubblesRef.current[i] = {
              el,
              x: Math.random() * 1000,
              y: Math.random() * 90,
              speed: Math.random() * 0.5 + 0.3,
            })
          }
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(255,255,255,.4)",
          }}
        />
      ))}
    </div>
  );
}
