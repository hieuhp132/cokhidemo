import {motion} from "framer-motion";
import { stagger, fadeUp } from "../animations/motions";

export default function Industries() {
  const industries = [
    "Manufacturing & Assembly",
    "Automation Systems",
    "Heavy Machinery",
    "Maintenance & Repair (MRO)",
    "Industrial Retrofit",
  ];

  return (
    <section style={{ padding: "64px", background: "#0f1318" }}>
      <h2 style={{ marginBottom: 24 }}>
        Applications Across Industries
      </h2>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          listStyle: "none",
          padding: 0,
        }}
      >
        {industries.map((i) => (
          <motion.li
            variants={fadeUp}
            key={i}
            style={{
              border: "1px solid var(--border)",
              padding: 16,
              fontSize: 14,
            }}
          >
            {i}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
