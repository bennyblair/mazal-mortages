import { Section, SectionHeader } from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Mazal Mortgages",
  description: "Answers to common questions about our broker referral service, home loans, and the mortgage process.",
};

const faqs = [
  {
    q: "What does Mazal Mortgages do?",
    a: "Mazal Mortgages is a referral service. We connect you with licensed Australian mortgage brokers who can help with your lending needs. We do not provide credit advice, assess loan applications, or arrange credit contracts ourselves.",
  },
  {
    q: "Is there a cost to use your referral service?",
    a: "No. Our referral service is completely free for borrowers. We may receive a referral fee from the broker you are introduced to, which we always disclose upfront.",
  },
  {
    q: "What is a mortgage broker?",
    a: "A mortgage broker is a licensed professional who acts as an intermediary between you and lenders. They compare products from multiple lenders to help find a loan suited to your situation. The broker we introduce you to will operate under their own Australian Credit Licence.",
  },
  {
    q: "How long does it take to get introduced to a broker?",
    a: "We aim to introduce you to a suitable licensed broker within one business day of receiving your referral enquiry.",
  },
  {
    q: "What documents will the broker need?",
    a: "Generally, a broker will need: proof of identity (passport or driver's licence), recent payslips or tax returns, bank statements (last 3 months), details of existing debts, and information about the property you're purchasing. The broker will provide a complete checklist tailored to your situation.",
  },
  {
    q: "How much deposit do I need?",
    a: "Most lenders require a minimum 5% deposit, though 20% or more avoids Lenders Mortgage Insurance (LMI). For first home buyers, government schemes may allow purchases with as little as 2–5% deposit. A licensed broker can help you understand your options.",
  },
  {
    q: "What is Lenders Mortgage Insurance (LMI)?",
    a: "LMI is a one-off premium charged when your deposit is less than 20% of the property value. It protects the lender (not you) if you default. A broker can help you calculate whether paying LMI or saving a larger deposit makes more financial sense.",
  },
  {
    q: "Can I get a loan if I'm self-employed?",
    a: "Yes. Self-employed borrowers have several options including low-doc loans and alt-doc loans. You'll typically need at least 1–2 years of tax returns or BAS statements. We can refer you to a broker who specialises in helping self-employed clients.",
  },
  {
    q: "Should I choose a fixed or variable rate?",
    a: "It depends on your circumstances. Fixed rates offer certainty — your repayments won't change during the fixed period. Variable rates may be lower and offer more flexibility (offset accounts, extra repayments). Many borrowers choose a split loan — part fixed, part variable. A licensed broker can help you assess what's right for your situation.",
  },
  {
    q: "How do I know if I should refinance?",
    a: "Consider refinancing if: your current rate is higher than what's available, your fixed rate period is ending, your financial situation has changed, or you want to access equity. A broker can review your current loan and advise whether switching makes sense.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            FAQ
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked{" "}
            <span className="text-gold">Questions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Everything you need to know about our referral service and mortgages.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Accordion multiple={false} className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="rounded-lg border border-border/60 px-6"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy hover:text-gold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section className="bg-navy">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            We&apos;re happy to help. Get in touch and we&apos;ll answer any
            questions you have.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gold text-navy font-semibold hover:bg-gold-light"
          >
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
