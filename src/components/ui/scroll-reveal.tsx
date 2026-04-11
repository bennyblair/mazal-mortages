"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "slide-up";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animations: Record<string, { hidden: string; visible: string }> = {
    "fade-up": {
      hidden: "opacity-0 translate-y-12",
      visible: "opacity-100 translate-y-0",
    },
    "fade-left": {
      hidden: "opacity-0 -translate-x-12",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      hidden: "opacity-0 translate-x-12",
      visible: "opacity-100 translate-x-0",
    },
    "zoom-in": {
      hidden: "opacity-0 scale-75",
      visible: "opacity-100 scale-100",
    },
    "slide-up": {
      hidden: "opacity-0 translate-y-20",
      visible: "opacity-100 translate-y-0",
    },
  };

  const anim = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? anim.visible : anim.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
