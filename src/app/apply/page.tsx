"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle2, CalendarDays } from "lucide-react";

interface ConfettiPiece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  width: number;
  height: number;
  color: string;
  gravity: number;
  opacity: number;
}

function Confetti({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const piecesRef = useRef<ConfettiPiece[]>([]);
  const animRef = useRef<number>(0);

  const colors = ["#C9A84C", "#1B2A4A", "#E8D5A3", "#FFD700", "#FFFFFF", "#B8860B", "#2C3E6B"];

  const launch = useCallback(() => {
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 150; i++) {
      pieces.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 20,
        vy: -(Math.random() * 18 + 5),
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        width: Math.random() * 10 + 5,
        height: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        gravity: 0.15 + Math.random() * 0.1,
        opacity: 1,
      });
    }
    piecesRef.current = pieces;
  }, []);

  useEffect(() => {
    if (!active) return;
    launch();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pieces = piecesRef.current;
      let alive = false;

      for (const p of pieces) {
        p.x += p.vx;
        p.vy += p.gravity;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.vx *= 0.99;
        // Bounce off bottom and keep floating
        if (p.y > canvas.height - 10) {
          p.vy *= -0.5;
          p.y = canvas.height - 10;
        }
        // Slowly fade but keep minimum opacity
        if (p.opacity > 0.3) {
          p.opacity -= 0.001;
        }

        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
          ctx.restore();
        }
      }

      if (alive) {
        animRef.current = requestAnimationFrame(animate);
      }
    }

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [active, launch]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ display: "block" }}
    />
  );
}

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
    setShowConfetti(true);
  }

  if (submitted) {
    return (
      <>
        <Confetti active={showConfetti} />
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-white">
              Enquiry <span className="text-gold">Submitted</span>
            </h1>
          </div>
        </section>
        <Section>
          <div className="mx-auto max-w-xl text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-gold" />
            <h2 className="mt-6 font-heading text-2xl font-bold text-navy">
              Thank You!
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;ve received your referral enquiry and will introduce you to a
              licensed mortgage broker within one business day.
            </p>
            <div className="mt-8 rounded-xl bg-gold/5 border border-gold/20 p-6">
              <CalendarDays className="mx-auto h-8 w-8 text-gold" />
              <p className="mt-3 font-heading text-lg font-semibold text-navy">
                Want to speed things up?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Book a call and we&apos;ll arrange your broker introduction sooner.
              </p>
              <Button
                asChild
                className="mt-4 bg-gold text-navy font-semibold hover:bg-gold-light"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Mazal Mortgages is a referral service only. We do not provide credit
              advice or arrange loans. The broker you are introduced to will assess
              your needs independently.
            </p>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Get Introduced
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Request a <span className="text-gold">Broker Introduction</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Tell us a little about yourself and we&apos;ll connect you with a
            licensed mortgage broker suited to your needs.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <Card className="border-border/60">
            <CardContent className="p-6 sm:p-8">
              <form
                name="referral-enquiry"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="referral-enquiry" />

                <div className="space-y-5">
                  <h2 className="font-heading text-xl font-bold text-navy">
                    Your Details
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="applyEmail">Email</Label>
                      <Input id="applyEmail" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="applyPhone">Phone</Label>
                      <Input id="applyPhone" name="phone" type="tel" required />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="suburb">Suburb</Label>
                      <Input id="suburb" name="suburb" placeholder="e.g. Richmond" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select name="state">
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="VIC">VIC</SelectItem>
                          <SelectItem value="NSW">NSW</SelectItem>
                          <SelectItem value="QLD">QLD</SelectItem>
                          <SelectItem value="WA">WA</SelectItem>
                          <SelectItem value="SA">SA</SelectItem>
                          <SelectItem value="TAS">TAS</SelectItem>
                          <SelectItem value="ACT">ACT</SelectItem>
                          <SelectItem value="NT">NT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="enquiryType">What are you looking for?</Label>
                    <Select name="enquiryType">
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-loan">Home loan</SelectItem>
                        <SelectItem value="investment-loan">Investment loan</SelectItem>
                        <SelectItem value="refinancing">Refinancing</SelectItem>
                        <SelectItem value="first-home">First home buyer assistance</SelectItem>
                        <SelectItem value="commercial">Commercial loan</SelectItem>
                        <SelectItem value="construction">Construction loan</SelectItem>
                        <SelectItem value="other">Other / not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message (optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Briefly describe your situation or any questions you'd like the broker to address."
                    />
                  </div>

                  {/* Consent checkbox */}
                  <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 accent-gold"
                        required
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        I consent to Mazal Mortgages sharing my details and enquiry
                        information with a licensed mortgage broker, and understand
                        Mazal Mortgages may receive a referral fee. I have read and
                        agree to the{" "}
                        <a href="/privacy" className="text-gold underline">
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!consent}
                    className="w-full bg-gold text-navy font-semibold hover:bg-gold-light disabled:opacity-50"
                  >
                    Submit Referral Enquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Mazal Mortgages is a referral service only. We do not provide
                    credit advice, assess loan applications, or arrange credit
                    contracts. The broker you are introduced to operates
                    independently under their own Australian Credit Licence.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
