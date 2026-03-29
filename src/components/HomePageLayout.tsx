import React from "react";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen text-white">
      <StarrySkyBackdrop />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
