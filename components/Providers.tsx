"use client";

import { MotionConfig } from "framer-motion";

/** Respects the visitor's reduced-motion setting for every Motion animation. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
