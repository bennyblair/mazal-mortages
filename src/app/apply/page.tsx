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
import { ArrowRight, ArrowLeft, CheckCircle2, CalendarDays } from "lucide-react";

const steps = ["Personal Details", "Loan Requirements", "Financial Situation", "Review & Submit"];

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
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  function handleSubmit() {
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
              Application <span className="text-gold">Submitted</span>
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
              We&apos;ve received your application and will be in touch within one
              business day to discuss next steps.
            </p>
            <div className="mt-8 rounded-xl bg-gold/5 border border-gold/20 p-6">
              <CalendarDays className="mx-auto h-8 w-8 text-gold" />
              <p className="mt-3 font-heading text-lg font-semibold text-navy">
                Want to speed things up?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Book a call so we can get started right away.
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
            Get Started
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Start Your <span className="text-gold">Application</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Tell us about yourself and what you&apos;re looking for. This takes
            about 5 minutes.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl">
          {/* Progress */}
          <div className="mb-8 flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                    i <= step
                      ? "bg-gold text-navy"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <span className="hidden text-sm font-medium text-navy sm:inline">
                  {s}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={`hidden h-0.5 w-8 sm:block ${
                      i < step ? "bg-gold" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <Card className="border-border/60">
            <CardContent className="p-6 sm:p-8">
              <form
                name="application"
                method="POST"
                data-netlify="true"
                onSubmit={(e) => {
                  if (step < steps.length - 1) {
                    e.preventDefault();
                    setStep(step + 1);
                  } else {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              >
                <input type="hidden" name="form-name" value="application" />

                {step === 0 && (
                  <div className="space-y-5">
                    <h2 className="font-heading text-xl font-bold text-navy">
                      Personal Details
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
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5">
                    <h2 className="font-heading text-xl font-bold text-navy">
                      Loan Requirements
                    </h2>
                    <div className="space-y-2">
                      <Label htmlFor="loanPurpose">What do you need the loan for?</Label>
                      <Select name="loanPurpose">
                        <SelectTrigger>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="purchase">Purchase a property</SelectItem>
                          <SelectItem value="refinance">Refinance existing loan</SelectItem>
                          <SelectItem value="investment">Investment property</SelectItem>
                          <SelectItem value="construction">Construction / renovation</SelectItem>
                          <SelectItem value="commercial">Commercial property</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="propertyValue">Estimated Property Value</Label>
                        <Input id="propertyValue" name="propertyValue" type="number" placeholder="e.g. 800000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="loanAmountNeeded">Loan Amount Needed</Label>
                        <Input id="loanAmountNeeded" name="loanAmount" type="number" placeholder="e.g. 640000" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">When do you need the loan?</Label>
                      <Select name="timeline">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-3months">1–3 months</SelectItem>
                          <SelectItem value="3-6months">3–6 months</SelectItem>
                          <SelectItem value="exploring">Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <h2 className="font-heading text-xl font-bold text-navy">
                      Financial Situation
                    </h2>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="income">Annual Income (before tax)</Label>
                        <Input id="income" name="income" type="number" placeholder="e.g. 120000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employment">Employment Type</Label>
                        <Select name="employment">
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fulltime">Full-time (PAYG)</SelectItem>
                            <SelectItem value="parttime">Part-time / casual</SelectItem>
                            <SelectItem value="selfemployed">Self-employed</SelectItem>
                            <SelectItem value="contractor">Contractor</SelectItem>
                            <SelectItem value="retired">Retired</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="savings">Savings / Deposit Available</Label>
                        <Input id="savings" name="savings" type="number" placeholder="e.g. 150000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="debts">Existing Debts (total)</Label>
                        <Input id="debts" name="debts" type="number" placeholder="e.g. 20000" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <h2 className="font-heading text-xl font-bold text-navy">
                      Review & Submit
                    </h2>
                    <p className="text-muted-foreground">
                      Please review the information you&apos;ve provided. Add any
                      additional notes below, then submit your application.
                    </p>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        placeholder="Anything else you'd like us to know?"
                      />
                    </div>
                  </div>
                )}

                {/* Nav buttons */}
                <div className="mt-8 flex justify-between">
                  {step > 0 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}
                  <Button
                    type="submit"
                    className="bg-gold text-navy font-semibold hover:bg-gold-light"
                  >
                    {step < steps.length - 1 ? (
                      <>
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
