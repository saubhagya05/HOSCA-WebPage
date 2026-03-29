"use client";

import React, { Suspense } from "react";
import { cn } from "@/lib/utils";

const Particles = React.lazy(() =>
  import("@/components/magicui/particles").then((m) => ({
    default: m.Particles,
  })),
);

type StarrySkyBackdropProps = {
  className?: string;
  particleQuantity?: number;
  /** Slightly softer stars on secondary surfaces (navbar/footer) */
  intensity?: "full" | "subtle";
};

export function StarrySkyBackdrop({
  className,
  particleQuantity = 72,
  intensity = "full",
}: StarrySkyBackdropProps) {
  const q = intensity === "subtle" ? Math.min(particleQuantity, 36) : particleQuantity;
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030508]",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(30,58,138,0.25),transparent_55%),radial-gradient(ellipse_80%_50%_at_80%_100%,rgba(88,28,135,0.12),transparent_50%)]" />
      <Suspense fallback={null}>
        <Particles
          className="absolute inset-0"
          quantity={q}
          color={intensity === "subtle" ? "#94a3b8" : "#a8b4c8"}
          size={intensity === "subtle" ? 0.45 : 0.65}
          ease={80}
          staticity={50}
        />
      </Suspense>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
