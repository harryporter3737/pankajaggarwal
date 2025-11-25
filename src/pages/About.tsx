import { Code, Zap, Target, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/pankaj-profile.png";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Text */}
          <div className="animate-fade-up">
            <h1 className="font-sora font-bold text-text mb-6">About me</h1>
            <div className="space-y-6 text-muted leading-relaxed">
              <p className="text-base">
                I'm Pankaj Aggarwal, a Software Engineer turned Web Developer and founder of <span className="font-semibold text-text">Pankaj Aggarwal Pvt. Ltd.</span>
              </p>
              <p className="text-base">
                I started as a Software Engineer, solving backend problems and making digital systems more reliable. 
                Today I apply the same engineering mindset to web development — combining logic, clean design, and user-focused experience.
              </p>
              <p className="text-base font-medium text-text">
                I build websites using engineering logic and modern UI design. My focus: clarity, performance, responsiveness, and long-term maintainability.
              </p>
              <p className="text-base">
                No agency jargon. No over-promising. Just honest work that delivers results for businesses of all sizes.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="animate-fade-up flex justify-center" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-border shadow-card">
                <img 
                  src={profileImage} 
                  alt="Pankaj Aggarwal - Founder of Pankaj Aggarwal Pvt. Ltd."
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-surface border border-border px-6 py-3 rounded-lg shadow-card">
                <p className="font-sora font-semibold text-text">Pankaj Aggarwal</p>
                <p className="text-muted text-sm">Founder & Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="font-sora font-bold text-text text-center mb-4">Values I build by</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto text-base">
            Every project is guided by these core principles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-up">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-accent/10 rounded-lg">
                  <Target className="h-7 w-7 text-accent" />
                </div>
              </div>
              <h3 className="font-sora font-semibold text-lg mb-3 text-text">Clarity</h3>
              <p className="text-muted text-sm leading-relaxed">
                Clear communication, transparent process, and honest timelines. You always know where we stand.
              </p>
            </Card>

            <Card className="p-8 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="mb-4">
                <div className="inline-flex p-3 bg-accent/10 rounded-lg">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
              </div>
              <h3 className="font-sora font-semibold text-lg mb-3 text-text">Reliability</h3>
              <p className="text-muted text-sm leading-relaxed">
                Your website should work flawlessly, every time. Built with solid code and long-term thinking.
              </p>
            </Card>

            <Card className="p-8 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="mb-4">
                <div className="inline-flex p-3 bg-accent-2/10 rounded-lg">
                  <Zap className="h-7 w-7 text-accent-2" />
                </div>
              </div>
              <h3 className="font-sora font-semibold text-lg mb-3 text-text">Speed</h3>
              <p className="text-muted text-sm leading-relaxed">
                Performance and optimization aren't optional — they're built into every project from day one.
              </p>
            </Card>

            <Card className="p-8 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="mb-4">
                <div className="inline-flex p-3 bg-accent/10 rounded-lg">
                  <Code className="h-7 w-7 text-accent" />
                </div>
              </div>
              <h3 className="font-sora font-semibold text-lg mb-3 text-text">UX Focus</h3>
              <p className="text-muted text-sm leading-relaxed">
                User experience drives every decision. Intuitive, accessible, and conversion-focused design.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="p-12 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border text-center">
          <h2 className="font-sora font-bold text-text mb-4">
            Let's work together
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto text-base leading-relaxed">
            Ready to bring your web project to life? Let's discuss how I can help your business grow online.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-cta-text font-medium rounded-lg transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
          >
            Get in touch
          </button>
        </Card>
      </div>
    </div>
  );
}
