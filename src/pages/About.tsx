import { Code2, Sparkles, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/pankaj-profile.png";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="animate-fade-up">
            <h1 className="font-sora font-bold text-text mb-8">Hi, I'm Pankaj Aggarwal.</h1>
            
            <div className="space-y-6 text-muted">
              <p>
                I'm a Software Engineer turned Web Developer. Founder of Pankaj Aggarwal Pvt. Ltd.
              </p>
              
              <p>
                I build websites using engineering logic with modern UI design. My focus is clarity, performance, responsiveness, and long-term sustainability.
              </p>
              
              <p>
                Whether you need a simple landing page or a complete web presence, I bring technical expertise and business understanding to every project. No jargon, no over-promising — just honest work that delivers measurable results.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-sora font-semibold text-lg mb-4">Values I build by</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-text">Clarity</strong> — Clear communication, realistic timelines, transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-text">Reliability</strong> — Maintainable code, documented systems, long-term thinking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-text">Performance</strong> — Fast websites that convert visitors into customers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Visual Elements */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <Card className="p-8 bg-surface border border-border shadow-card">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <img 
                  src={profileImage} 
                  alt="Pankaj Aggarwal - Web Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                  <div className="p-2 bg-accent/10 rounded">
                    <Code2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Frontend Development</p>
                    <p className="text-xs text-muted">React, TypeScript, Tailwind</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                  <div className="p-2 bg-accent-2/10 rounded">
                    <Sparkles className="h-5 w-5 text-accent-2" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Performance</p>
                    <p className="text-xs text-muted">Optimization & speed tuning</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                  <div className="p-2 bg-accent/10 rounded">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Full-Stack Thinking</p>
                    <p className="text-xs text-muted">End-to-end understanding</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
