"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Avoid useReducedMotion() in initial styles — it differs between SSR and client
 * and causes React hydration mismatches. CSS prefers-reduced-motion still applies site-wide.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      style={{ overflow: "visible" }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
