"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Home, TrendingUp, RefreshCw, Key, Shield, Clock } from "lucide-react";

function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "flip" | "slide-up";
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
    "flip": {
      hidden: "opacity-0 rotateY-90",
      visible: "opacity-100 rotateY-0",
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

const services = [
  { icon: Home, title: "Home Loans", desc: "Find the perfect loan for your dream home." },
  { icon: TrendingUp, title: "Investment Loans", desc: "Grow your portfolio with tailored solutions." },
  { icon: RefreshCw, title: "Refinancing", desc: "Switch to a better deal and save thousands." },
  { icon: Key, title: "First Home Buyers", desc: "Navigate grants, schemes, and your first purchase." },
  { icon: Shield, title: "Commercial Loans", desc: "Finance your business property needs." },
  { icon: Clock, title: "Construction", desc: "Build your vision with progress-draw financing." },
];

export default function ScrollAnimationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4">
              Design Example
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Scroll-Triggered <span className="text-gold">Animations</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={400}>
            <p className="mt-6 max-w-2xl text-lg text-white/60">
              Elements animate into view as you scroll down the page. Each element
              can have its own animation style and delay for a staggered, polished effect.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Fade Up Cards */}
      <Section>
        <ScrollReveal animation="fade-up">
          <SectionHeader
            title="Fade Up — Staggered Cards"
            subtitle="Each card fades in and slides up with an increasing delay"
          />
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={i * 150}>
              <Card className="group h-full border-border/60 transition-all hover:border-gold/40 hover:shadow-lg">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 transition-colors group-hover:bg-gold/10">
                    <service.icon className="h-6 w-6 text-navy transition-colors group-hover:text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Slide from sides */}
      <Section className="bg-navy/[0.03]">
        <ScrollReveal animation="fade-up">
          <SectionHeader
            title="Slide from Sides"
            subtitle="Content slides in from the left and right"
          />
        </ScrollReveal>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal animation="fade-left">
            <div className="rounded-2xl bg-navy p-8 lg:p-12">
              <h3 className="font-heading text-2xl font-bold text-white">From the Left</h3>
              <p className="mt-4 text-white/60 leading-relaxed">
                This block slides in from the left side of the screen. Great for
                alternating content layouts where text and images sit side by side.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="font-heading text-2xl font-bold text-gold">15+</p>
                  <p className="text-xs text-white/50">Years</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="font-heading text-2xl font-bold text-gold">50+</p>
                  <p className="text-xs text-white/50">Lenders</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={200}>
            <div className="rounded-2xl bg-gold/10 border border-gold/20 p-8 lg:p-12">
              <h3 className="font-heading text-2xl font-bold text-navy">From the Right</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                And this block slides in from the right. Together they create a
                satisfying reveal effect that draws the eye and keeps users engaged
                as they scroll through the page.
              </p>
              <div className="mt-6 flex gap-2">
                {["Fast", "Trusted", "Expert", "Licensed"].map((tag) => (
                  <span key={tag} className="rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Zoom In */}
      <Section>
        <ScrollReveal animation="fade-up">
          <SectionHeader
            title="Zoom In Effect"
            subtitle="Elements scale up from small to full size"
          />
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-4">
          {["$500M+", "2,000+", "50+", "15+"].map((stat, i) => (
            <ScrollReveal key={stat} animation="zoom-in" delay={i * 200}>
              <div className="rounded-2xl bg-navy p-8 text-center">
                <p className="font-heading text-4xl font-bold text-gold">{stat}</p>
                <p className="mt-2 text-sm text-white/50">
                  {["Settled", "Clients", "Lenders", "Years"][i]}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy">
        <ScrollReveal animation="zoom-in">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Bring Your Pages to <span className="text-gold">Life</span>
            </h2>
            <p className="mt-4 mx-auto max-w-lg text-white/60">
              These animations can be applied to any section across the site.
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
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
