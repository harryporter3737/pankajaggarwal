import { Code2, Sparkles, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="animate-fade-up">
            <h1 className="font-sora font-bold text-text mb-8">Hi, I'm Pankaj.</h1>
            
            <div className="space-y-6 text-muted">
              <p>
                I started as a Software Engineer, solving backend problems and making digital systems more reliable. 
                Today I apply the same engineering mindset to web development — combining logic, clean design, and user-focused experience.
              </p>
              
              <p>
                I create modern, performance-driven websites for businesses of all sizes. No agency jargon. 
                No over-promising. Just honest work that delivers results.
              </p>
              
              <p>
                Whether you need a simple landing page or a complete web presence, I bring technical expertise 
                and business understanding to every project.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-sora font-semibold text-lg mb-4">What I bring to your project</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-text">Engineer mindset</strong> – Structured, logical approach to problem-solving</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-text">Clean code</strong> – Maintainable, scalable solutions built to last</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-text">UX-first</strong> – Every decision focused on user experience and conversions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Visual Elements */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <Card className="p-8 bg-surface border border-border shadow-card">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-2/20 rounded-lg flex items-center justify-center mb-6">
                <p className="text-muted">Developer Photo</p>
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
                    <Rocket className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Backend Thinking</p>
                    <p className="text-xs text-muted">Full-stack understanding</p>
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
