"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-white text-slate-950",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#0f172a_10%,#581c87_15%,#7f1d1d_20%,#14532d_25%,#9a3412_30%,#1e1b4b_35%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_7%,transparent_10%,transparent_12%,rgba(255,255,255,0.7)_16%)",

              // Ultra-dark color palette
              "--slate-900": "#0f172a",      // Deep slate
              "--purple-900": "#581c87",     // Deep purple
              "--red-900": "#7f1d1d",        // Deep red
              "--green-900": "#14532d",      // Deep forest green
              "--orange-900": "#9a3412",     // Deep orange
              "--indigo-900": "#1e1b4b",     // Deep indigo
              "--gray-900": "#111827",       // Deep gray
              "--emerald-900": "#064e3b",    // Deep emerald
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-40 blur-[6px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--slate-900)_10%,var(--purple-900)_15%,var(--red-900)_20%,var(--green-900)_25%,var(--orange-900)_30%,var(--indigo-900)_35%)] [--white-gradient:repeating-linear-gradient(100deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_7%,var(--transparent)_10%,var(--transparent)_12%,rgba(255,255,255,0.7)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-multiply after:content-[""]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_15%,var(--transparent)_65%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
