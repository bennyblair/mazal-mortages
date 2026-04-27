"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import {
  Home,
  TrendingUp,
  RefreshCw,
  Key,
  Building2,
  HardHat,
  Star,
  ArrowRight,
  Shield,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";

function MagenDavid({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="100,10 22,145 178,145" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
      <polygon points="100,190 22,55 178,55" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    </svg>
  );
}

const services = [
  {
    icon: Home,
    title: "Home Loans",
    description: "Get introduced to a licensed broker who can help you find competitive home loan options.",
    href: "/services#home-loans",
  },
  {
    icon: TrendingUp,
    title: "Investment Loans",
    description: "Connect with a broker experienced in investment lending and portfolio structuring.",
    href: "/services#investment",
  },
  {
    icon: RefreshCw,
    title: "Refinancing",
    description: "We can refer you to a broker who specialises in reviewing existing loans for better deals.",
    href: "/services#refinancing",
  },
  {
    icon: Key,
    title: "First Home Buyers",
    description: "Be connected with a broker who understands first home buyer grants and schemes.",
    href: "/services#first-home",
  },
  {
    icon: Building2,
    title: "Commercial Loans",
    description: "Request an introduction to a broker with commercial lending expertise.",
    href: "/services#commercial",
  },
  {
    icon: HardHat,
    title: "Construction Loans",
    description: "Get connected with a broker experienced in progress-draw construction financing.",
    href: "/services#construction",
  },
];

const trustPoints = [
  { icon: Shield, title: "Licensed Brokers", description: "We only refer you to fully licensed Australian mortgage brokers" },
  { icon: Clock, title: "Fast Introductions", description: "Receive a broker introduction within 24 hours" },
  { icon: Users, title: "Trusted Network", description: "A curated network of experienced mortgage professionals" },
  { icon: CheckCircle2, title: "No Cost to You", description: "Our referral service is completely free for borrowers" },
];

const testimonials = [
  {
    quote: "Mazal connected us with an amazing broker who saved us over $40,000 in interest. So glad we used the referral service.",
    name: "Sarah & David Chen",
    type: "Home Loan Referral",
    rating: 5,
  },
  {
    quote: "As a first home buyer, I had no idea where to start. Mazal introduced me to a broker who was patient and knowledgeable.",
    name: "James Morrison",
    type: "First Home Buyer Referral",
    rating: 5,
  },
  {
    quote: "The broker Mazal referred us to restructured our investment loans brilliantly. Great referral service.",
    name: "Priya Patel",
    type: "Investment Loan Referral",
    rating: 5,
  },
];

export default function HomePage() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 2200),
      setTimeout(() => setStage(3), 3000),
      setTimeout(() => setStage(4), 3800),
      setTimeout(() => setStage(5), 4500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <style>{`
        @keyframes spinFlyIn {
          0% { transform: translate(-120vw, -80vh) rotate(0deg) scale(0.1); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translate(10vw, 5vh) rotate(1080deg) scale(1.3); }
          70% { transform: translate(-3vw, -2vh) rotate(1440deg) scale(0.9); }
          85% { transform: translate(1vw, 1vh) rotate(1620deg) scale(1.05); }
          100% { transform: translate(0, 0) rotate(1800deg) scale(1); }
        }
        @keyframes gentleSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes bounceInDown {
          0% { transform: translateY(-600px) scaleY(1.2) scaleX(0.8); opacity: 0; }
          40% { transform: translateY(30px) scaleY(0.9) scaleX(1.1); opacity: 1; }
          60% { transform: translateY(-15px) scaleY(1.05) scaleX(0.95); }
          80% { transform: translateY(8px) scaleY(0.97); }
          100% { transform: translateY(0) scaleY(1) scaleX(1); }
        }
        @keyframes swipeInRight {
          0% { transform: translateX(120vw) rotate(8deg); opacity: 0; }
          60% { transform: translateX(-20px) rotate(-2deg); opacity: 1; }
          80% { transform: translateX(8px) rotate(0.5deg); }
          100% { transform: translateX(0) rotate(0deg); }
        }
        @keyframes zoomBounceIn {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.4) rotate(10deg); opacity: 1; }
          70% { transform: scale(0.85) rotate(-5deg); }
          85% { transform: scale(1.1) rotate(2deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes typewriter { 0% { width: 0; } 100% { width: 100%; } }
        @keyframes blink { 0%, 100% { border-color: transparent; } 50% { border-color: #C9A84C; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulseGlow { 0%, 100% { filter: drop-shadow(0 0 20px rgba(201,168,76,0.3)); } 50% { filter: drop-shadow(0 0 60px rgba(201,168,76,0.6)); } }
        .star-entrance { animation: spinFlyIn 1.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        .star-idle { animation: gentleSpin 20s linear infinite, pulseGlow 3s ease-in-out infinite; }
        .title-entrance { animation: bounceInDown 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .subtitle-entrance { animation: swipeInRight 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .button-entrance { animation: zoomBounceIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .typewriter-text { overflow: hidden; white-space: nowrap; border-right: 3px solid #C9A84C; animation: typewriter 2s steps(40) forwards, blink 0.7s step-end infinite; display: inline-block; }
        @media (max-width: 640px) {
          .typewriter-text { white-space: normal; animation: none; border-right: none; width: auto; text-align: center; }
        }
        .shimmer-text { background: linear-gradient(90deg, #C9A84C 0%, #fff 15%, #C9A84C 30%, #C9A84C 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
      `}</style>

      {/* Animated Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {[...Array(6)].map((_, i) => (
            <MagenDavid
              key={i}
              className="absolute text-gold"
              style={{
                width: `${60 + i * 30}px`,
                top: `${10 + i * 15}%`,
                left: `${5 + i * 17}%`,
                animation: `gentleSpin ${15 + i * 5}s linear infinite${i % 2 ? ' reverse' : ''}`,
              }}
            />
          ))}
        </div>

        <div className="relative mb-8">
          {stage >= 1 && (
            <div className={stage >= 2 ? "star-idle" : "star-entrance"}>
              <MagenDavid className="h-56 w-56 text-gold sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
            </div>
          )}
          {stage === 0 && <div className="h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96" />}
        </div>

        <div className="relative z-10 text-center">
          {stage >= 2 ? (
            <h1 className="title-entrance font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="shimmer-text">Mazal</span>{" "}
              <span className="text-white">Mortgages</span>
            </h1>
          ) : (
            <h1 className="font-heading text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
              Mazal Mortgages
            </h1>
          )}
        </div>

        <div className="relative z-10 mt-6 text-center">
          {stage >= 3 ? (
            <p className="subtitle-entrance mx-auto max-w-xl text-lg text-white/70 sm:text-xl">
              Connect with a licensed mortgage broker. Your home loan journey starts here.
            </p>
          ) : (
            <p className="mx-auto max-w-xl text-lg text-transparent sm:text-xl">placeholder</p>
          )}
        </div>

        <div className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          {stage >= 4 ? (
            <>
              <div className="button-entrance" style={{ animationDelay: "0s" }}>
                <Button asChild size="lg" className="bg-gold text-navy font-semibold hover:bg-gold-light text-base px-8">
                  <Link href="/apply">
                    Request a Broker Introduction <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="button-entrance" style={{ animationDelay: "0.15s" }}>
                <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white text-base px-8">
                  <Link href="/calculator">Calculate Repayments</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="h-12" />
          )}
        </div>

        <div className="relative z-10 mt-12">
          {stage >= 5 ? (
            <p className="typewriter-text text-sm font-medium uppercase tracking-[0.3em] text-gold/80">
              Referral Service &bull; Licensed Brokers &bull; Free for Borrowers
            </p>
          ) : (
            <p className="text-sm text-transparent">placeholder</p>
          )}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {trustPoints.map((point, i) => (
              <ScrollReveal key={point.title} animation="fade-up" delay={i * 100}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <point.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{point.title}</p>
                    <p className="text-xs text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <ScrollReveal animation="fade-up">
          <SectionHeader
            title="How We Help"
            subtitle="We connect you with licensed brokers for every stage of your property journey"
          />
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={i * 100}>
              <TiltCard className="rounded-xl h-full">
                <Link href={service.href}>
                  <Card className="group h-full border-border/60 transition-all hover:border-gold/40 hover:shadow-lg">
                    <CardContent className="flex flex-col gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 transition-colors group-hover:bg-gold/10">
                        <service.icon className="h-6 w-6 text-navy transition-colors group-hover:text-gold" />
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
                </Link>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-navy/[0.03]">
        <ScrollReveal animation="fade-up">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Real stories from people who used our referral service"
          />
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} animation="fade-up" delay={i * 150}>
            <Card className="border-border/60">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto pt-4 border-t border-border/60">
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.type}</p>
                </div>
              </CardContent>
            </Card>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal animation="fade-up">
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-navy/20 text-navy">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section className="bg-navy">
        <ScrollReveal animation="zoom-in">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Speak With a <span className="text-gold">Licensed Broker</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Submit a referral enquiry and we&apos;ll introduce you to a licensed mortgage
            broker — no obligation, completely free.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gold text-navy font-semibold hover:bg-gold-light text-base px-8"
            >
              <Link href="/apply">
                Request an Introduction
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 text-base px-8"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
