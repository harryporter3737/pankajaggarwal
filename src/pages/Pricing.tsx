import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingPlans = [
  {
    name: "Basic Website",
    price: "₹35,000 – ₹45,000",
    popular: false,
    features: [
      "Theme-based layout",
      "Responsive design",
      "3–4 pages",
      "Enquiry form",
      "1 revision round",
      "Basic SEO setup",
    ],
    cta: "Start with Basic",
  },
  {
    name: "Premium Website",
    price: "₹50,000 – ₹65,000",
    popular: true,
    features: [
      "Custom layout & design",
      "Modern UI/UX",
      "5–7 pages",
      "Conversion-focused sections",
      "2 revision rounds",
      "Performance optimization",
      "Enhanced SEO",
    ],
    cta: "Choose Premium",
  },
  {
    name: "Full Brand + Custom",
    price: "₹80,000 – ₹1,20,000",
    popular: false,
    features: [
      "Fully custom UI/UX",
      "Brand visual direction",
      "Advanced components",
      "Multiple revision rounds",
      "Complete brand package",
      "Priority support",
    ],
    cta: "Discuss Custom",
  },
];

const maintenancePlans = [
  {
    name: "Basic Care",
    price: "from ₹3,500/month",
    features: ["2 minor updates/month", "Performance checks", "Security monitoring", "Email support"],
  },
  {
    name: "Growth Care",
    price: "from ₹6,000–₹8,000/month",
    features: [
      "4–5 updates/month",
      "Priority support",
      "Quarterly UI refinements",
      "Analytics review",
      "WhatsApp support",
    ],
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Basic websites take 2-3 weeks, Premium sites 3-4 weeks, and custom projects 4-6 weeks. Timeline depends on content readiness and revision rounds.",
  },
  {
    question: "What do I need to provide?",
    answer: "Content (text, images), brand assets (logo, colors), and clear goals. I'll guide you through everything needed during our initial call.",
  },
  {
    question: "Do you offer hosting?",
    answer: "I can recommend reliable hosting providers and help with setup. Hosting costs are separate from development fees.",
  },
  {
    question: "What about ongoing updates?",
    answer: "Choose a maintenance plan for regular updates, or request changes on an as-needed basis. All plans include documentation for self-management if preferred.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-sora font-bold text-text mb-4">Simple, transparent pricing</h1>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Pick a plan that matches where your business is today — we'll customise details on a quick call.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pricingPlans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-8 bg-surface border transition-all duration-300 animate-fade-up ${
                plan.popular
                  ? "border-accent shadow-card-hover -translate-y-2 relative"
                  : "border-border shadow-card hover:shadow-card-hover hover:-translate-y-1"
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-accent text-accent-cta-text text-xs font-medium rounded-full">
                    Most Sensible Choice
                  </span>
                </div>
              )}
              
              <h3 className="font-sora font-bold text-xl mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-accent mb-6">{plan.price}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="block">
                <Button
                  className={`w-full transition-all duration-200 hover:-translate-y-1 ${
                    plan.popular
                      ? "bg-accent hover:bg-accent/90 text-accent-cta-text shadow-card hover:shadow-card-hover"
                      : "bg-surface hover:bg-accent hover:text-accent-cta-text border border-border"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="p-8 bg-surface border border-border shadow-card mb-20">
          <h2 className="font-sora font-bold text-2xl mb-6 text-center">What's included</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Basic</th>
                  <th className="text-center py-4 px-4 font-semibold">Premium</th>
                  <th className="text-center py-4 px-4 font-semibold">Custom</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Price Range", "₹35k-45k", "₹50k-65k", "₹80k-1.2L"],
                  ["Design Type", "Theme-based", "Custom", "Fully Custom"],
                  ["Pages", "3-4", "5-7", "Unlimited"],
                  ["SEO", "Basic", "Enhanced", "Advanced"],
                  ["Revisions", "1 round", "2 rounds", "Multiple"],
                  ["Brand Work", "—", "—", "✓"],
                  ["Ideal for", "Startups", "Growing businesses", "Established brands"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-4 px-4 text-muted font-medium">{row[0]}</td>
                    <td className="py-4 px-4 text-center text-muted">{row[1]}</td>
                    <td className="py-4 px-4 text-center text-muted">{row[2]}</td>
                    <td className="py-4 px-4 text-center text-muted">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Payment Terms */}
        <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border mb-20">
          <h2 className="font-sora font-bold text-2xl mb-4">Payment Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>50% advance to start the project</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>50% payable before final handover</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Payments via UPI / GPay / bank transfer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Invoice provided post-payment confirmation</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Maintenance Plans */}
        <div className="mb-20">
          <h2 className="font-sora font-bold text-2xl mb-8 text-center">Maintenance Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maintenancePlans.map((plan, idx) => (
              <Card
                key={idx}
                className="p-6 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-sora font-semibold text-lg mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-accent mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="font-sora font-bold text-2xl mb-8 text-center">Frequently Asked Questions</h2>
          <Card className="p-8 bg-surface border border-border shadow-card max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Final CTA */}
        <Card className="p-12 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border text-center">
          <h2 className="font-sora font-bold text-text mb-4">Not sure which plan fits?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Tell me about your business and I'll help you choose the right approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-cta-text font-medium transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
              >
                Get in touch
              </Button>
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-accent hover:text-accent transition-all duration-200"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
