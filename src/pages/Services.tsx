import { ArrowRight, Layout, Zap, Shield, Search, Palette, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "Custom Website Development",
    description: "Bespoke websites tailored to your brand and business goals. Built with modern technologies for performance and scalability.",
  },
  {
    icon: Zap,
    title: "Landing Page Development",
    description: "High-converting landing pages designed to capture leads and drive action. Optimized for speed and user experience.",
  },
  {
    icon: Wrench,
    title: "Website Revamp & Modernization",
    description: "Breathe new life into your existing website. Update design, improve performance, and enhance user experience.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your website and improve Core Web Vitals. Faster sites mean better user experience and higher conversions.",
  },
  {
    icon: Palette,
    title: "UI/UX Layout Structuring",
    description: "Strategic layout planning to guide visitors toward action. Clean, intuitive interfaces that enhance user experience.",
  },
  {
    icon: Search,
    title: "Basic SEO Setup",
    description: "On-page SEO optimization to help your site rank better. Technical SEO, meta tags, and performance improvements.",
  },
  {
    icon: Shield,
    title: "Security Best Practices",
    description: "Implement security measures to protect your site and user data. Regular updates and monitoring included.",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Websites that work perfectly across all devices. Mobile-first approach ensuring seamless experience everywhere.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing website care to keep everything running smoothly. Regular updates, backups, and priority support when needed.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-sora font-bold text-text mb-4">Services I provide</h1>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            From design to deployment to ongoing care, I handle every aspect of your web presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="p-6 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="mb-4">
                <div className="inline-flex p-3 bg-accent/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="font-sora font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-muted text-sm mb-4">{service.description}</p>
              <Link to="/contact">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent hover:bg-accent/10 transition-all group p-0"
                >
                  Discuss this
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-12 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border text-center">
          <h2 className="font-sora font-bold text-text mb-4">
            Not sure which services you need?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Let's have a quick chat about your business and I'll recommend the right approach for your goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-cta-text font-medium transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
              >
                Start a conversation
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-accent hover:text-accent transition-all duration-200"
              >
                View pricing approach
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
