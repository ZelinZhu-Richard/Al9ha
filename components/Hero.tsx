"use client";

import { motion } from "framer-motion";
import { ParticleBackground } from "./ui/ParticleBackground";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-grid-lines bg-[size:64px_64px] opacity-30" />
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px circle at 50% 20%, rgba(0,240,255,0.08), transparent 60%), radial-gradient(600px circle at 80% 80%, rgba(240,165,0,0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/60 px-3 py-1 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" />
          <span className="font-mono text-xs text-text-muted">
            v0.1 — paper trading only
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-mono text-7xl tracking-tight sm:text-8xl md:text-[10rem]"
        >
          <span className="text-text">Al</span>
          <span className="group relative inline-block text-accent-gold animate-glow">
            9
          </span>
          <span className="text-text">ha</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-balance font-mono text-sm uppercase tracking-[0.2em] text-text-muted"
        >
          /ˈalfə/ &nbsp;·&nbsp; pronounced “alpha”
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl text-balance text-2xl text-text sm:text-3xl md:text-4xl"
        >
          AI-native research operating system for{" "}
          <span className="text-accent-cyan">evidence-backed</span> equity
          research.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#architecture"
            className="group inline-flex items-center gap-2 rounded-md border border-accent-cyan/40 bg-accent-cyan/10 px-5 py-3 font-mono text-sm text-accent-cyan transition-all hover:border-accent-cyan hover:bg-accent-cyan/15"
          >
            View the Architecture{" "}
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#philosophy"
            className="group inline-flex items-center gap-2 rounded-md border border-border-strong bg-bg-elevated px-5 py-3 font-mono text-sm text-text transition-all hover:border-text-muted"
          >
            Read Our Research Philosophy{" "}
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex items-center gap-4 font-mono text-xs text-text-dim"
        >
          <span>Built from first principles.</span>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-text-dim">
          <span>scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-text-dim to-transparent" />
        </div>
      </div>
    </section>
  );
}
