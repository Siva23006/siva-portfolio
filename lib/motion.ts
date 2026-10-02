import type { Variants } from "framer-motion";
export const ease = [0.76, 0, 0.24, 1] as const;
export const reveal: Variants = {
  hidden: { y: "105%" },
  show: (i: number = 0) => ({ y: 0, transition: { duration: 1.1, ease, delay: i * 0.08 } }),
};
