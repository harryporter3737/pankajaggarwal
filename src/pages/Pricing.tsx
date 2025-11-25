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
    name: "Basic Website Package",
    description: "Functional & clean online presence",
    popular: false,
    features: [
      "Theme-based layout",
      "Responsive design",
      "3–4 pages",
      "Enquiry form",
      "1 revision round",
      "Basic SEO setup",
    ],
    cta: "Discuss Basic",
  },
  {
    name: "Premium Website Package",
    description: "Modern UI, engaging layout, conversion oriented",
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
    cta: "Discuss Premium",
  },
  {
    name: "Custom Brand Package",
    description: "Tailored design, UI strategy & advanced features",
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
    description: "Essential maintenance & updates",
    features: ["2 minor updates/month", "Performance checks", "Security monitoring", "Email support"],
  },
  {
    name: "Growth Care",
    description: "Priority support & continuous improvement",
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
    question: "How is pricing determined?",
    answer: "Pricing depends on project scope, features required, and timeline. After our initial discussion about your needs, I provide a transparent quote with no hidden costs. We agree on the final cost before starting work.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Basic websites take 2-3 weeks, Premium sites 3-4 weeks, and custom projects 4-6 weeks. Timeline depends on content readiness and revision rounds. I provide realistic estimates upfront.",
  },
  {
    question: "What do I need to provide?",
    answer: "Content (text, images), brand assets (logo, colors), and clear goals. I'll guide you through everything needed during our initial call. If you need help with content, we can discuss options.",
  },
  {
    question: "What about ongoing updates?",
    answer: "Choose a maintenance plan for regular updates, or request changes on an as-needed basis. Optional monthly support & maintenance can be included based on your requirements.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-sora font-bold text-text mb-4">Transparent pricing approach</h1>
          <p className="text-muted max-w-2xl mx-auto text-base leading-relaxed">
            Clear packages tailored to your business needs. Final pricing depends on project scope and is discussed transparently over call or WhatsApp.
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
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="font-sora font-bold text-xl mb-2">{plan.name}</h3>
              <p className="text-sm text-muted mb-6">{plan.description}</p>
              
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

        {/* Pricing Note */}
        <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border mb-20">
          <h2 className="font-sora font-bold text-xl mb-4 text-center">How pricing works</h2>
          <div className="max-w-3xl mx-auto text-muted">
            <p className="mb-4">
              Every project is unique, so I don't believe in fixed pricing tiers. Instead, I provide a custom quote based on your specific requirements after understanding your goals, timeline, and features needed.
            </p>
            <p>
              During our initial discussion (WhatsApp or call), we'll define the scope clearly and I'll provide a transparent, detailed cost breakdown. You'll know exactly what you're paying for — no surprises.
            </p>
          </div>
        </Card>

        {/* Payment Terms */}
        <Card className="p-10 bg-surface border border-border shadow-card max-w-3xl mx-auto mb-20">
          <h2 className="font-sora font-semibold text-2xl mb-6 text-center text-text">Payment Information</h2>
          <div className="space-y-5 text-muted">
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 text-lg">•</span>
              <p className="text-sm leading-relaxed">
                Pricing depends on project scope and is discussed transparently over call or WhatsApp
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 text-lg">•</span>
              <p className="text-sm leading-relaxed">
                Payment accepted via <strong className="text-text">UPI / bank transfer</strong> after scope agreement
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 text-lg">•</span>
              <p className="text-sm leading-relaxed">
                <strong className="text-text">50% advance</strong> required to start, <strong className="text-text">50% before handover</strong>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1 text-lg">•</span>
              <p className="text-sm leading-relaxed">
                Invoice provided post-payment confirmation
              </p>
            </div>
          </div>
        </Card>

        {/* Maintenance Plans */}
        <div className="mb-20">
          <h2 className="font-sora font-bold text-2xl mb-8 text-center">Optional Maintenance Plans</h2>
          <p className="text-muted text-center mb-8 max-w-2xl mx-auto">
            Keep your website running smoothly with ongoing support. Pricing discussed based on your requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {maintenancePlans.map((plan, idx) => (
              <Card
                key={idx}
                className="p-6 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-sora font-semibold text-lg mb-2">{plan.name}</h3>
                <p className="text-sm text-muted mb-4">{plan.description}</p>
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
          <h2 className="font-sora font-bold text-text mb-4">Ready to discuss your project?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Tell me about your business and requirements. I'll provide a transparent quote with no obligations.
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
