"use client";

import React, { createContext, useContext, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={`py-20 flex items-center justify-center ${containerClassName}`}
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            scale: isMouseEntered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className={`flex items-center justify-center relative w-full h-full ${className}`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </motion.div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`h-96 w-96 [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & React.HTMLAttributes<HTMLElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateXNum = typeof rotateX === 'string' ? parseFloat(rotateX) : rotateX;
  const rotateYNum = typeof rotateY === 'string' ? parseFloat(rotateY) : rotateY;
  const rotateZNum = typeof rotateZ === 'string' ? parseFloat(rotateZ) : rotateZ;
  const translateXNum = typeof translateX === 'string' ? parseFloat(translateX) : translateX;
  const translateYNum = typeof translateY === 'string' ? parseFloat(translateY) : translateY;
  const translateZNum = typeof translateZ === 'string' ? parseFloat(translateZ) : translateZ;

  const rotateXSpring = useSpring(rotateXNum);
  const rotateYSpring = useSpring(rotateYNum);
  const rotateZSpring = useSpring(rotateZNum);

  const translateXSpring = useSpring(translateXNum);
  const translateYSpring = useSpring(translateYNum);
  const translateZSpring = useSpring(translateZNum);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct * 10);
      y.set(yPct * 10);
    };

    if (isMouseEntered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseEntered, x, y]);

  return (
    <Tag
      ref={ref}
      className={`w-fit transition duration-200 ease-out ${className}`}
      style={{
        transform: "translateZ(75px)",
        transformStyle: "preserve-3d",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
}; 