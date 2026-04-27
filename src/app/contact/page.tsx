"use client";

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
import { Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Have a question about our referral service? Reach out and we&apos;ll get
            back to you within one business day.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="border-border/60">
              <CardContent className="p-6 sm:p-8">
                <h2 className="mb-6 font-heading text-2xl font-bold text-navy">
                  Send Us a Message
                </h2>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" required placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="0400 000 000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loanType">Enquiry Type</Label>
                      <Select name="loanType">
                        <SelectTrigger>
                          <SelectValue placeholder="What can we help with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home Loan</SelectItem>
                          <SelectItem value="investment">Investment Loan</SelectItem>
                          <SelectItem value="refinance">Refinancing</SelectItem>
                          <SelectItem value="first-home">First Home Buyer</SelectItem>
                          <SelectItem value="commercial">Commercial Loan</SelectItem>
                          <SelectItem value="construction">Construction Loan</SelectItem>
                          <SelectItem value="general">General Enquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us a bit about what you're looking for..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold text-navy font-semibold hover:bg-gold-light"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-2">
            <Card className="border-border/60">
              <CardContent className="space-y-5 p-6">
                <h3 className="font-heading text-lg font-semibold text-navy">
                  Contact Details
                </h3>
                <a
                  href="tel:0411969523"
                  className="flex items-center gap-3 text-sm text-foreground/80 hover:text-gold transition-colors"
                >
                  <Phone className="h-5 w-5 text-gold" />
                  0411 969 523
                </a>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <MapPin className="h-5 w-5 text-gold" />
                  Australia Wide
                </div>
              </CardContent>
            </Card>



            <Card className="border-border/60">
              <CardContent className="p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-navy">
                  Office Hours
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p>Saturday: 10:00 AM – 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
