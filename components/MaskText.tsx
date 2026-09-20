"use client";

import { motion } from "framer-motion";

type Props = {
  as?: "h2" | "h3";
  className?: string;
  children: React.ReactNode;
};

/** Heading that slides up out of a mask the first time it scrolls into view. */
export default function MaskText({ as = "h2", className = "", children }: Props) {
  const Tag = as;
  return (
    <Tag className={className}>
      <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
        <motion.span
          className="block"
          initial={{ y: "105%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.2, 0.7, 0.1, 1] }}
        >
          {children}
        </motion.span>
      </span>
    </Tag>
  );
}
