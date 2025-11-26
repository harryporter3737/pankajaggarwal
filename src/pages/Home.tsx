import { ArrowRight, Code, Zap, Shield, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Ticker from "@/components/Ticker";
import portfolioDesktop from "@/assets/jayesh-portfolio-desktop.png";
import profileImage from "@/assets/pankaj-profile-new.jpg";
import heroGradient from "@/assets/bg-hero-gradient.jpg";
import patternAbstract from "@/assets/bg-pattern-abstract.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={heroGradient} 
            alt="" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-white/60 dark:bg-black/80" />
        </div>
        <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left - Copy */}
          <div className="animate-fade-up">
            <h1 className="font-sora font-bold text-text mb-6 leading-tight">
              Hi, I'm Pankaj Aggarwal.
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-text mb-3 sm:mb-4 leading-snug">
              I design and develop websites that are fast, responsive, and built to help your business grow — without the fluff.
            </p>
            <p className="text-muted mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Whether you're starting out or scaling up, your website should help you move forward — not just exist online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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

          {/* Right - Profile Image */}
          <div className="animate-fade-up flex justify-center lg:justify-end" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-border shadow-card bg-gradient-to-br from-accent/5 to-accent-2/5">
                <img 
                  src={profileImage} 
                  alt="Pankaj Aggarwal - Web Developer" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-accent text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-card font-medium text-sm sm:text-base">
                Let's build together
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-surface py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="font-sora font-bold text-text mb-6">About me</h2>
            <p className="text-text mb-3 sm:mb-4 text-base sm:text-lg max-w-2xl mx-auto font-medium px-4">
              I'm Pankaj Aggarwal, a Software Engineer turned Web Developer and founder of Pankaj Aggarwal Pvt. Ltd.
            </p>
            <p className="text-muted mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4">
              I build websites using engineering logic and modern UI design. My focus: clarity, performance, responsiveness, and long-term maintainability.
            </p>
            <Link to="/about">
              <Button
                variant="outline"
                className="border-border hover:border-accent hover:text-accent transition-all duration-200"
              >
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ticker Slider */}
      <Ticker />

      {/* Services Overview */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-sora font-bold text-text mb-4">What I do</h2>
          <p className="text-muted max-w-2xl mx-auto text-base leading-relaxed">
            From concept to deployment, I handle every aspect of web development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
          <Card className="p-6 sm:p-8 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up">
            <div className="mb-4">
              <div className="inline-flex p-3 bg-accent/10 rounded-lg">
                <Code className="h-7 w-7 text-accent" />
              </div>
            </div>
            <h3 className="font-sora font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-text">Development</h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              Custom websites built with modern tech, optimized for performance and conversion
            </p>
          </Card>

          <Card className="p-6 sm:p-8 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="mb-4">
              <div className="inline-flex p-3 bg-accent-2/10 rounded-lg">
                <Zap className="h-7 w-7 text-accent-2" />
              </div>
            </div>
            <h3 className="font-sora font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-text">Performance</h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              Speed optimization, security, and technical SEO to help your business grow
            </p>
          </Card>

          <Card className="p-6 sm:p-8 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="mb-4">
              <div className="inline-flex p-3 bg-accent/10 rounded-lg">
                <Search className="h-7 w-7 text-accent" />
              </div>
            </div>
            <h3 className="font-sora font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-text">Digital Presence</h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              SEO, digital marketing support, and ongoing maintenance to keep your site performing
            </p>
          </Card>
        </div>

        <div className="text-center animate-fade-up" style={{ animationDelay: "300ms" }}>
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
      <section className="bg-surface py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 animate-fade-up">
              <Card className="p-4 bg-background border border-border shadow-card overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={portfolioDesktop} 
                    alt="Costume Designer Website - Desktop View"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <span className="text-accent text-sm font-medium">Featured Project</span>
              <h2 className="font-sora font-bold text-text mt-2 mb-4">Costume Designer Website</h2>
              <p className="text-muted mb-4 leading-relaxed">
                Built for a fashion costume designer. Minimal, storytelling layout with mobile-first approach.
              </p>
              <p className="text-muted mb-6 leading-relaxed">
                Focus on showcasing portfolio work, smooth navigation, and contact accessibility.
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
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="font-sora font-bold text-text mb-4">Transparent approach to pricing</h2>
          <p className="text-muted mb-8 text-base leading-relaxed max-w-2xl mx-auto">
            Clear packages tailored to your business needs. Final pricing discussed transparently based on project scope.
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
      <section className="relative bg-surface py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Pattern with Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src={patternAbstract} 
            alt="" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/70 dark:bg-black/80" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <Card className="p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border text-center animate-fade-up">
            <h2 className="font-sora font-bold text-text mb-6">
              Ready to build your online presence?
            </h2>
            <p className="text-muted mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
              Let's discuss your project and create something that helps your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://wa.me/917206543706?text=Hi%20Pankaj,%20I'd%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-cta-text font-medium transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
                >
                  Let's build yours →
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:border-accent hover:text-accent transition-all duration-200"
                >
                  Contact me
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
