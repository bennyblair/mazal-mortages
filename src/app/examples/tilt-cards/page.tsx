"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, TrendingUp, RefreshCw, Key, Building2, HardHat, ArrowRight } from "lucide-react";

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  }

  function handleMouseLeave() {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare({ x: 50, y: 50, opacity: 0 });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-200 ease-out ${className}`}
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      {children}
      {/* Glare overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-200"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(201,168,76,${glare.opacity}), transparent 60%)`,
        }}
      />
    </div>
  );
}

const services = [
  {
    icon: Home,
    title: "Home Loans",
    description: "Find the perfect loan for your dream home with competitive rates.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Investment Loans",
    description: "Grow your portfolio with tailored investment lending.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: RefreshCw,
    title: "Refinancing",
    description: "Switch to a better deal and potentially save thousands.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Key,
    title: "First Home Buyers",
    description: "Get connected with a broker for your first property purchase.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Building2,
    title: "Commercial Loans",
    description: "Finance your business property with tailored solutions.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Build your vision with progress-draw construction financing.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

export default function TiltCardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Design Example
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            3D Tilt <span className="text-gold">Cards</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Hover over any card below — it tilts toward your cursor in 3D space with
            a gold glare effect that follows your mouse. Best experienced on desktop.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Our Services"
          subtitle="Hover over each card to see the 3D tilt effect"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <TiltCard key={service.title} className="rounded-xl">
              <Card className="group h-full border-border/60 transition-shadow hover:shadow-2xl">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.color} transition-colors`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Large feature tilt card */}
      <Section className="bg-navy/[0.03]">
        <SectionHeader
          title="Featured Card"
          subtitle="The effect scales beautifully to larger cards"
        />
        <div className="mx-auto max-w-2xl">
          <TiltCard className="rounded-2xl">
            <Card className="border-gold/20 bg-navy overflow-hidden">
              <CardContent className="p-8 sm:p-12 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
                  <svg viewBox="0 0 200 200" className="h-12 w-12 text-gold" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round">
                    <polygon points="100,10 22,145 178,145" />
                    <polygon points="100,190 22,55 178,55" />
                  </svg>
                </div>
                <h3 className="font-heading text-3xl font-bold text-white">
                  Premium <span className="text-gold">Experience</span>
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed max-w-md mx-auto">
                  The 3D tilt effect adds a tactile, premium feel to any card or
                  interactive element, making the site feel responsive and alive.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-gold text-navy font-semibold hover:bg-gold-light"
                >
                  <Link href="/">
                    Back to Home <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TiltCard>
        </div>
      </Section>
    </>
  );
}
