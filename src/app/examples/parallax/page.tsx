"use client";

import { useRef } from "react";
import { Section, SectionHeader } from "@/components/layout/section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  return ref;
}

export default function ParallaxExamplePage() {
  return (
    <>
      <style>{`
        .parallax-container {
          perspective: 1px;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .parallax-layer-back {
          position: absolute;
          inset: 0;
          transform: translateZ(-2px) scale(3);
        }
        .parallax-layer-mid {
          position: absolute;
          inset: 0;
          transform: translateZ(-1px) scale(2);
        }
        .parallax-layer-front {
          position: relative;
          transform: translateZ(0);
        }
        .parallax-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .float-up {
          animation: floatUp 6s ease-in-out infinite;
        }
        .float-up-delayed {
          animation: floatUp 6s ease-in-out infinite 2s;
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
      `}</style>

      {/* Hero with parallax layers */}
      <section className="parallax-section bg-navy">
        {/* Background layer - slow moving geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="float-up absolute top-[10%] left-[10%] h-64 w-64 rounded-full bg-gold/5" />
          <div className="float-up-delayed absolute top-[30%] right-[15%] h-96 w-96 rounded-full bg-gold/3" />
          <div className="float-up absolute bottom-[20%] left-[40%] h-48 w-48 rounded-full bg-white/5" />
          <div className="float-up-delayed absolute top-[60%] left-[70%] h-72 w-72 rounded-full bg-gold/5" />
        </div>

        {/* Mid layer - floating lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent float-up" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent float-up-delayed" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent float-up" />
        </div>

        {/* Front layer - content */}
        <div className="relative z-10 text-center px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Design Example
          </p>
          <h1 className="font-heading text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Parallax <span className="text-gold">Scrolling</span>
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-lg text-white/60">
            Background elements move at different speeds creating a sense of depth and immersion.
          </p>
        </div>
      </section>

      {/* Section 2 - Gold band with parallax background */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream to-white" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="float-up absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-gold/5" />
          <div className="float-up-delayed absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-navy/5" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Layers of <span className="text-gold">Depth</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            As you scroll, background elements drift at different rates creating a rich, 
            three-dimensional feel. Large soft shapes float behind the content while 
            decorative lines sweep across at their own pace.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="mx-auto h-16 w-16 rounded-full bg-navy/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-navy">1</span>
              </div>
              <p className="text-sm font-medium text-navy">Background Layer</p>
              <p className="text-xs text-muted-foreground">Moves slowest — large shapes</p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto h-16 w-16 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-gold">2</span>
              </div>
              <p className="text-sm font-medium text-navy">Middle Layer</p>
              <p className="text-xs text-muted-foreground">Medium speed — decorative lines</p>
            </div>
            <div className="space-y-2">
              <div className="mx-auto h-16 w-16 rounded-full bg-navy flex items-center justify-center">
                <span className="text-2xl font-bold text-gold">3</span>
              </div>
              <p className="text-sm font-medium text-navy">Content Layer</p>
              <p className="text-xs text-muted-foreground">Moves with scroll — your content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Navy again with floaters */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={i % 2 === 0 ? "float-up" : "float-up-delayed"}
              style={{
                position: "absolute",
                width: `${20 + Math.random() * 80}px`,
                height: `${20 + Math.random() * 80}px`,
                borderRadius: "50%",
                background: i % 3 === 0 ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.03)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            A Premium <span className="text-gold">Experience</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Parallax creates an immersive, magazine-quality feel that elevates the 
            entire brand perception. Perfect for the hero section and section transitions.
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
      </section>
    </>
  );
}
