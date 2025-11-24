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
              I'm a Software Engineer & Web Developer.
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-text mb-6 leading-snug">
              I build websites that don't just look good — they work, respond, convert, and help businesses grow online.
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
              <a href="#pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-accent hover:text-accent transition-all duration-200"
                >
                  See pricing
                </Button>
              </a>
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

      {/* Services Teaser */}
      <section id="services-teaser" className="bg-surface py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-text mb-4">Core services I provide</h2>
            <p className="text-muted max-w-2xl mx-auto">
              From design to deployment, I handle every aspect of your web presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Core Development",
                items: ["Custom website design & development", "Landing page development", "Responsive UI across devices"],
              },
              {
                title: "Growth & Optimization",
                items: ["Website revamp & modernization", "Performance optimization", "SEO fundamentals"],
              },
              {
                title: "Maintenance",
                items: ["Security best practices", "Regular updates", "Priority support"],
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-6 bg-background border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
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
            <h2 className="font-sora font-bold text-text mt-2 mb-4">Costume Designer Portfolio</h2>
            <p className="text-muted mb-6">
              Designed and developed a clean, professional website for a fashion costume designer.
              Fully responsive. Focused on showcasing portfolio work. Smooth navigation & contact accessibility.
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
      <section id="pricing" className="bg-surface py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-sora font-bold text-text mb-4">Simple, transparent pricing</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Pick a plan that matches where your business is today — we'll customise details on a quick call.
          </p>
          <Link to="/pricing">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-cta-text font-medium transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
            >
              View pricing details
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-20">
        <Card className="p-12 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border text-center">
          <h2 className="font-sora font-bold text-text mb-4">
            Ready to get your business online the right way?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how I can help you achieve your business goals.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-cta-text font-medium transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
            >
              Get in touch
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
