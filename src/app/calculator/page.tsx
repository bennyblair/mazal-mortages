"use client";

import { useState, useMemo } from "react";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, DollarSign, Percent, Calendar, Wallet, TrendingDown, CreditCard } from "lucide-react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateRepayment(principal: number, annualRate: number, years: number) {
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = years * 12;
  if (monthlyRate === 0) return principal / numPayments;
  return (
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)
  );
}

function calculateBorrowingPower(
  income: number,
  otherIncome: number,
  expenses: number,
  existingRepayments: number,
  interestRate: number,
  loanTerm: number
) {
  // Simplified serviceability calculation
  // Banks typically use ~30% of gross income minus commitments
  const assessmentRate = interestRate + 2; // Buffer rate
  const monthlyIncome = (income + otherIncome) / 12;
  const monthlyAvailable = monthlyIncome * 0.3 - expenses - existingRepayments;
  if (monthlyAvailable <= 0) return 0;

  const monthlyRate = assessmentRate / 100 / 12;
  const numPayments = loanTerm * 12;
  // Reverse the repayment formula to get principal
  const borrowingPower =
    (monthlyAvailable * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
    (monthlyRate * Math.pow(1 + monthlyRate, numPayments));

  return Math.max(0, Math.round(borrowingPower / 1000) * 1000);
}

export default function CalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(600000);
  const [interestRate, setInterestRate] = useState(5.6);
  const [loanTerm, setLoanTerm] = useState(30);

  // Borrowing power state
  const [annualIncome, setAnnualIncome] = useState(120000);
  const [otherIncome, setOtherIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(2500);
  const [existingRepayments, setExistingRepayments] = useState(0);
  const [bpRate, setBpRate] = useState(5.6);
  const [bpTerm, setBpTerm] = useState(30);

  const results = useMemo(() => {
    const monthly = calculateRepayment(loanAmount, interestRate, loanTerm);
    const totalPaid = monthly * loanTerm * 12;
    const totalInterest = totalPaid - loanAmount;
    return { monthly, totalPaid, totalInterest };
  }, [loanAmount, interestRate, loanTerm]);

  const borrowingPower = useMemo(() => {
    return calculateBorrowingPower(annualIncome, otherIncome, monthlyExpenses, existingRepayments, bpRate, bpTerm);
  }, [annualIncome, otherIncome, monthlyExpenses, existingRepayments, bpRate, bpTerm]);

  const borrowingPercentage = Math.min((borrowingPower / 2000000) * 100, 100);

  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Tools
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Mortgage <span className="text-gold">Calculator</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Get an estimate of your monthly repayments and total loan cost.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Inputs */}
          <div className="lg:col-span-2">
            <Card className="border-border/60">
              <CardContent className="space-y-6 p-6">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="flex items-center gap-2 text-navy font-medium">
                    <DollarSign className="h-4 w-4 text-gold" />
                    Loan Amount
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    min={10000}
                    max={10000000}
                    step={10000}
                    className="text-lg"
                  />
                  <input
                    type="range"
                    min={50000}
                    max={3000000}
                    step={10000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$50k</span>
                    <span>$3M</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rate" className="flex items-center gap-2 text-navy font-medium">
                    <Percent className="h-4 w-4 text-gold" />
                    Interest Rate (% p.a.)
                  </Label>
                  <Input
                    id="rate"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    min={0.1}
                    max={15}
                    step={0.1}
                    className="text-lg"
                  />
                  <input
                    type="range"
                    min={1}
                    max={12}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1%</span>
                    <span>12%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="term" className="flex items-center gap-2 text-navy font-medium">
                    <Calendar className="h-4 w-4 text-gold" />
                    Loan Term (years)
                  </Label>
                  <Input
                    id="term"
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    min={1}
                    max={30}
                    step={1}
                    className="text-lg"
                  />
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5 yrs</span>
                    <span>30 yrs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="border-gold/30 bg-navy text-white">
              <CardContent className="p-8">
                <p className="text-sm font-medium text-gold uppercase tracking-wider">
                  Monthly Repayment
                </p>
                <p className="mt-2 font-heading text-5xl font-bold">
                  {formatCurrency(results.monthly)}
                </p>
                <p className="mt-1 text-sm text-white/50">per month (principal & interest)</p>
              </CardContent>
            </Card>

            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="border-border/60">
                <CardContent className="p-6 text-center">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Loan Amount
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold text-navy">
                    {formatCurrency(loanAmount)}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="p-6 text-center">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Total Interest
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold text-gold">
                    {formatCurrency(results.totalInterest)}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="p-6 text-center">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Total Cost
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold text-navy">
                    {formatCurrency(results.totalPaid)}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/60 bg-gold/5">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="font-heading text-lg font-semibold text-navy">
                    Want a personalised quote?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This is an estimate only. Speak to a licensed broker for accurate figures.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-gold text-navy font-semibold hover:bg-gold-light shrink-0"
                >
                  <Link href="/apply">
                    Get Introduced <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Borrowing Power Calculator */}
      <Section className="bg-navy/[0.03]">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            How Much Can I <span className="text-gold">Borrow</span>?
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Get an estimate of your borrowing capacity based on your income, expenses, and current commitments.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Inputs */}
          <div className="lg:col-span-2">
            <Card className="border-border/60">
              <CardContent className="space-y-5 p-6">
                <div className="space-y-2">
                  <Label htmlFor="bp-income" className="flex items-center gap-2 text-navy font-medium">
                    <Wallet className="h-4 w-4 text-gold" />
                    Annual Income (before tax)
                  </Label>
                  <Input
                    id="bp-income"
                    type="number"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    min={0}
                    max={1000000}
                    step={5000}
                    className="text-lg"
                  />
                  <input
                    type="range"
                    min={30000}
                    max={1000000}
                    step={5000}
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$30k</span>
                    <span>$1M</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bp-other" className="flex items-center gap-2 text-navy font-medium">
                    <DollarSign className="h-4 w-4 text-gold" />
                    Other Annual Income
                  </Label>
                  <Input
                    id="bp-other"
                    type="number"
                    value={otherIncome}
                    onChange={(e) => setOtherIncome(Number(e.target.value))}
                    min={0}
                    max={1000000}
                    step={1000}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bp-expenses" className="flex items-center gap-2 text-navy font-medium">
                    <TrendingDown className="h-4 w-4 text-gold" />
                    Monthly Living Expenses
                  </Label>
                  <Input
                    id="bp-expenses"
                    type="number"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                    min={0}
                    max={5000}
                    step={100}
                    className="text-lg"
                  />
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    step={100}
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$500</span>
                    <span>$5k</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bp-repayments" className="flex items-center gap-2 text-navy font-medium">
                    <CreditCard className="h-4 w-4 text-gold" />
                    Existing Monthly Repayments
                  </Label>
                  <Input
                    id="bp-repayments"
                    type="number"
                    value={existingRepayments}
                    onChange={(e) => setExistingRepayments(Number(e.target.value))}
                    min={0}
                    max={10000}
                    step={50}
                  />
                  <p className="text-xs text-muted-foreground">Car loans, personal loans, credit cards, etc.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="border-gold/30 bg-navy text-white">
              <CardContent className="p-8">
                <p className="text-sm font-medium text-gold uppercase tracking-wider">
                  Estimated Borrowing Power
                </p>
                <p className="mt-2 font-heading text-5xl font-bold">
                  {formatCurrency(borrowingPower)}
                </p>
                <p className="mt-1 text-sm text-white/50">based on a {bpRate}% assessment rate + 2% buffer</p>

                {/* Visual gauge */}
                <div className="mt-6">
                  <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold/80 to-gold transition-all duration-700 ease-out"
                      style={{ width: `${borrowingPercentage}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-white/40">
                    <span>$0</span>
                    <span>$500k</span>
                    <span>$1M</span>
                    <span>$1.5M</span>
                    <span>$2M</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-border/60">
                <CardContent className="p-6 text-center">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Monthly Repayment at Max
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold text-navy">
                    {formatCurrency(calculateRepayment(borrowingPower, bpRate, bpTerm))}
                  </p>
                  <p className="text-xs text-muted-foreground">per month (P&I)</p>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="p-6 text-center">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Income-to-Loan Ratio
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold text-gold">
                    {annualIncome > 0 ? (borrowingPower / annualIncome).toFixed(1) : "0"}x
                  </p>
                  <p className="text-xs text-muted-foreground">your annual income</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/60 bg-gold/5">
              <CardContent className="p-6">
                <p className="text-xs font-medium text-muted-foreground">
                  ⚠️ This is an indicative estimate only. Actual borrowing capacity depends on 
                  your full financial profile, credit history, and lender criteria. Assessment uses 
                  a +2% buffer rate per APRA guidelines. Speak to a licensed broker for an accurate figure. 
                  Mazal Mortgages does not provide credit advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
