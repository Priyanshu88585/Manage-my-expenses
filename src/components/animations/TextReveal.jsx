"use client";

import { motion } from "framer-motion";

export const TextReveal = ({
  children,
  className = "",
  as: Component = "div",
  animation = "fade-in",
}) => {
  const animations = {
    "fade-in": {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.7 },
    },
    "blur-in": {
      initial: { opacity: 0, filter: "blur(10px)", y: 10 },
      whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
      viewport: { once: true },
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const selectedAnimation = animations[animation] || animations["fade-in"];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={selectedAnimation.viewport}
      transition={selectedAnimation.transition}
      className={className}
    >
      <Component>{children}</Component>
    </motion.div>
  );
};
