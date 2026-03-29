'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function NavbarLogo({ children }: { children: ReactNode }) {
  return <div className="flex items-center space-x-2">{children}</div>;
}

export function NavBody({ children, className }: { children: ReactNode; className?: string }) {
  return <nav className={cn("w-full p-4", className)}>{children}</nav>;
}

export function MobileNavHeader({ children }: { children: ReactNode }) {
  return <div className="flex justify-between items-center px-4 py-2">{children}</div>;
}

export function MobileNavToggle({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} aria-label="Toggle Menu">
      <div className="space-y-1.5">
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
      </div>
    </button>
  );
}

export function MobileNavMenu({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="w-full px-4 pb-4"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MobileNav({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.nav
      className={cn("w-full p-2", className)}
      initial={false}
      animate="open"
      exit="closed"
    >
      {children}
    </motion.nav>
  );
}

export function Navbar({ children, className }: { children: ReactNode; className?: string }) {
  return <header className={cn("fixed z-50 w-full top-0", className)}>{children}</header>;
}
