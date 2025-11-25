import { Link } from "react-router-dom";
import { ArrowRight, Code2, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-sora font-bold text-text mb-6">
              Hi, I'm Pankaj Aggarwal.
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-text mb-6 leading-snug">
              I design and develop websites that are fast, responsive, and built to help businesses grow — without the fluff.
            </p>
            <p className="text-muted text-lg mb-8">
              Whether you're starting out or scaling up, your website should help you move forward — not just exist online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-cta-text font-medium transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover group"
                >
                  Let's build yours
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-accent hover:text-accent transition-all duration-200"
                >
                  View portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
            <Card className="p-8 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Clean Code</h3>
                    <p className="text-sm text-muted">
                      Maintainable, scalable solutions built with engineering best practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-2/10 rounded-lg">
                    <Zap className="h-6 w-6 text-accent-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Performance First</h3>
                    <p className="text-sm text-muted">
                      Fast-loading websites optimized for conversions and user experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Built to Last</h3>
                    <p className="text-sm text-muted">
                      Secure, reliable websites with ongoing support and maintenance
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sora font-bold text-text mb-4">
                Engineer turned Web Developer
              </h2>
              <p className="text-muted mb-6">
                I'm Pankaj Aggarwal, founder of Pankaj Aggarwal Pvt. Ltd. I build websites using engineering logic with modern UI design. My focus is clarity, performance, responsiveness, and long-term sustainability.
              </p>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-border hover:border-accent hover:text-accent transition-all duration-200 group"
                >
                  More about me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Clarity in every decision",
                "Reliable & maintainable code",
                "Performance-driven approach",
              ].map((value, idx) => (
                <Card
                  key={idx}
                  className="p-4 bg-background border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <p className="text-sm font-medium flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    {value}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-sora font-bold text-text mb-4">What I offer</h2>
          <p className="text-muted max-w-2xl mx-auto">
            From design to development, I handle every aspect of your web presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Development",
              items: ["Custom Website Development", "Landing Page Development", "Website Revamp & Modernization"],
            },
            {
              title: "Optimization",
              items: ["Performance Optimization", "UI/UX Layout Structuring", "Basic SEO Setup"],
            },
            {
              title: "Support",
              items: ["Website Maintenance", "Regular Updates", "Technical Support"],
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="p-6 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-sora font-semibold text-lg mb-4">{service.title}</h3>
              <ul className="space-y-2 text-sm text-muted">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/services">
            <Button
              variant="outline"
              className="border-border hover:border-accent hover:text-accent transition-all duration-200"
            >
              View all services
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Project */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-surface border border-border rounded-lg p-8 shadow-card">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent-2/20 rounded-lg flex items-center justify-center">
                <p className="text-muted">Project Preview</p>
              </div>
            </div>
          </div>
            <div className="order-1 lg:order-2">
              <span className="text-accent text-sm font-medium">Featured Project</span>
              <h2 className="font-sora font-bold text-text mt-2 mb-4">Costume Designer Website</h2>
              <p className="text-muted mb-4">
                Built for fashion industry client. Minimal, storytelling layout with mobile-first approach.
              </p>
              <p className="text-muted mb-6">
                Focus: Showcasing portfolio work, smooth navigation, and contact accessibility with clean professional design.
              </p>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  className="border-border hover:border-accent hover:text-accent transition-all duration-200 group"
                >
                  View project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="font-sora font-bold text-text mb-4">Transparent pricing, tailored to your needs</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Pricing depends on project scope. Final costing discussed transparently over call or WhatsApp.
          </p>
          <Link to="/pricing">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-cta-text font-medium transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
            >
              View pricing approach
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-6">
          <Card className="p-12 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border text-center">
            <h2 className="font-sora font-bold text-text mb-4">
              Let's build something that works for your business
            </h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Quick responses and transparent communication. Reach out via WhatsApp or email to get started.
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
                  WhatsApp
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
