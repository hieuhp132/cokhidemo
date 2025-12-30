export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const hoverCard = {
  whileHover: {
    y: -6,
    boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
  },
};

export const hoverButton = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.97 },
};
