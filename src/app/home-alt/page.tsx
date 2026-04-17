"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function MagenDavid({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Two overlapping equilateral triangles */}
      <polygon points="100,10 22,145 178,145" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
      <polygon points="100,190 22,55 178,55" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomeAltPage() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // PowerPoint-style sequential entrance
    const timers = [
      setTimeout(() => setStage(1), 300),   // Star flies in
      setTimeout(() => setStage(2), 2200),   // Star settles, title bounces in
      setTimeout(() => setStage(3), 3000),   // Subtitle swipes in
      setTimeout(() => setStage(4), 3800),   // Buttons zoom in
      setTimeout(() => setStage(5), 4500),   // Tagline typewriter
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <style>{`
        @keyframes spinFlyIn {
          0% {
            transform: translate(-120vw, -80vh) rotate(0deg) scale(0.1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          50% {
            transform: translate(10vw, 5vh) rotate(1080deg) scale(1.3);
          }
          70% {
            transform: translate(-3vw, -2vh) rotate(1440deg) scale(0.9);
          }
          85% {
            transform: translate(1vw, 1vh) rotate(1620deg) scale(1.05);
          }
          100% {
            transform: translate(0, 0) rotate(1800deg) scale(1);
          }
        }

        @keyframes gentleSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes bounceInDown {
          0% {
            transform: translateY(-600px) scaleY(1.2) scaleX(0.8);
            opacity: 0;
          }
          40% {
            transform: translateY(30px) scaleY(0.9) scaleX(1.1);
            opacity: 1;
          }
          60% {
            transform: translateY(-15px) scaleY(1.05) scaleX(0.95);
          }
          80% {
            transform: translateY(8px) scaleY(0.97);
          }
          100% {
            transform: translateY(0) scaleY(1) scaleX(1);
          }
        }

        @keyframes swipeInRight {
          0% {
            transform: translateX(120vw) rotate(8deg);
            opacity: 0;
          }
          60% {
            transform: translateX(-20px) rotate(-2deg);
            opacity: 1;
          }
          80% {
            transform: translateX(8px) rotate(0.5deg);
          }
          100% {
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes zoomBounceIn {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.4) rotate(10deg);
            opacity: 1;
          }
          70% {
            transform: scale(0.85) rotate(-5deg);
          }
          85% {
            transform: scale(1.1) rotate(2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes typewriter {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #C9A84C; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(201, 168, 76, 0.3)); }
          50% { filter: drop-shadow(0 0 60px rgba(201, 168, 76, 0.6)); }
        }

        .star-entrance {
          animation: spinFlyIn 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .star-idle {
          animation: gentleSpin 20s linear infinite, pulseGlow 3s ease-in-out infinite;
        }

        .title-entrance {
          animation: bounceInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .subtitle-entrance {
          animation: swipeInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .button-entrance {
          animation: zoomBounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .typewriter-text {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #C9A84C;
          animation: typewriter 2s steps(40) forwards, blink 0.7s step-end infinite;
          display: inline-block;
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #C9A84C 0%,
            #fff 15%,
            #C9A84C 30%,
            #C9A84C 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-navy">
        {/* Background decorative stars */}
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
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Giant Magen David */}
        <div className="relative mb-8">
          {stage >= 1 && (
            <div
              className={stage >= 2 ? "star-idle" : "star-entrance"}
            >
              <MagenDavid className="h-56 w-56 text-gold sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
            </div>
          )}
          {stage === 0 && (
            <div className="h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
          )}
        </div>

        {/* Title */}
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

        {/* Subtitle */}
        <div className="relative z-10 mt-6 text-center">
          {stage >= 3 ? (
            <p className="subtitle-entrance mx-auto max-w-xl text-lg text-white/70 sm:text-xl">
              Connect with a licensed mortgage broker.
              Your home loan journey starts here.
            </p>
          ) : (
            <p className="mx-auto max-w-xl text-lg text-transparent sm:text-xl">
              placeholder
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          {stage >= 4 ? (
            <>
              <div className="button-entrance" style={{ animationDelay: "0s" }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-navy font-semibold hover:bg-gold-light text-base px-8"
                >
                  <Link href="/apply">
                    Request a Broker Introduction
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="button-entrance" style={{ animationDelay: "0.15s" }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 text-base px-8"
                >
                  <Link href="/calculator">Calculate Repayments</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="h-12" />
          )}
        </div>

        {/* Typewriter tagline */}
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
    </>
  );
}
