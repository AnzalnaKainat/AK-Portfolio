"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  React.useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [data-cursor-hover]")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ translateX: springX, translateY: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      aria-hidden
    >
      <motion.div
        animate={{
          width: hovering ? 36 : 16,
          height: hovering ? 36 : 16,
          opacity: hovering ? 0.9 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="rounded-full bg-white"
      />
    </motion.div>
  );
}
