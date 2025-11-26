import { ArrowRight, Layout, Zap, Shield, Search, Palette, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import webDevImage from "@/assets/web-development.jpg";
import seoImage from "@/assets/seo-illustration.jpg";
import digitalMarketingImage from "@/assets/digital-marketing.png";
import performanceImage from "@/assets/performance-analytics.webp";
import marketingTeamImage from "@/assets/marketing-team.jpg";
import techBrain from "@/assets/bg-tech-brain.jpg";

const services = [
  {
    icon: Layout,
    title: "Custom Website Design & Development",
    description: "Bespoke websites tailored to your brand and business goals. Built with modern technologies for performance, scalability, and user experience.",
    image: webDevImage,
  },
  {
    icon: Wrench,
    title: "Website Revamp & Modernization",
    description: "Breathe new life into your existing website. Update design, improve performance, enhance user experience, and align with modern standards.",
    image: marketingTeamImage,
  },
  {
    icon: Zap,
    title: "Landing Page Development",
    description: "High-converting landing pages designed to capture leads and drive action. Optimized for speed, mobile experience, and conversion rates.",
    image: performanceImage,
  },
  {
    icon: Shield,
    title: "Performance & Security Optimization",
    description: "Speed up your website, improve Core Web Vitals, and implement security best practices. Faster sites mean better user experience and higher conversions.",
    image: performanceImage,
  },
  {
    icon: Palette,
    title: "UI/UX Layout Structuring",
    description: "Strategic layout planning to guide visitors toward action. Clean, intuitive interfaces that enhance user experience and drive engagement.",
    image: digitalMarketingImage,
  },
  {
    icon: Search,
    title: "SEO & Digital Presence",
    description: "On-page SEO optimization, technical SEO, meta tags, and performance improvements. Supporting digital marketing strategies when needed.",
    image: seoImage,
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Websites that work perfectly across all devices. Mobile-first approach ensuring seamless experience on phones, tablets, and desktops.",
    image: webDevImage,
  },
  {
    icon: Wrench,
    title: "Ongoing Website Maintenance",
    description: "Optional website care to keep everything running smoothly. Regular updates, backups, performance monitoring, and priority support.",
    image: digitalMarketingImage,
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src={techBrain} 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/90 dark:bg-black/95" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-sora font-bold text-text mb-4">Services I provide</h1>
          <p className="text-muted max-w-2xl mx-auto text-base leading-relaxed">
            From design to deployment to ongoing care, I handle every aspect of your web presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="overflow-hidden bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden bg-surface">
                <img 
                  src={service.image} 
                  alt={`${service.title} illustration`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-accent/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-sora font-semibold text-xl mb-3 text-text">{service.title}</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">{service.description}</p>
                <Link to="/contact">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-accent hover:text-accent hover:bg-accent/10 transition-all group p-0"
                  >
                    Discuss project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-12 lg:p-16 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border text-center">
          <h2 className="font-sora font-bold text-text mb-6">
            Not sure which services you need?
          </h2>
          <p className="text-muted mb-10 max-w-2xl mx-auto text-base leading-relaxed">
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
