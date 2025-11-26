import { MessageSquare, FileText, Palette, Code, Rocket, HeadphonesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import teamBg from "@/assets/bg-process-team.jpg";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    description: "We discuss your business, goals, and target audience. I learn what success looks like for you.",
  },
  {
    icon: FileText,
    title: "Plan",
    description: "I create a detailed scope, timeline, and cost estimate. You get clarity before we start.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Visual mockups that bring your brand to life. Revisions until you're completely happy.",
  },
  {
    icon: Code,
    title: "Develop",
    description: "Clean, performant code built with modern best practices. Regular updates on progress.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Thorough testing, final revisions, and smooth deployment. Your site goes live!",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing maintenance and updates to keep your site running perfectly. I'm here when you need me.",
  },
];

export default function Process() {
  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src={teamBg} 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-sora font-bold text-text mb-4">How we work together</h1>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A clear, straightforward process from first chat to launch and beyond
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative animate-fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <Card className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-surface border border-border shadow-card">
                    <step.icon className="h-7 w-7 text-accent" />
                  </Card>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-accent">Step {idx + 1}</span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h3 className="font-sora font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted">{step.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-px h-8 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border mt-20 max-w-3xl mx-auto">
          <h2 className="font-sora font-bold text-xl mb-4 text-center">What to expect</h2>
          <div className="space-y-4 text-muted">
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <p>
                <strong className="text-text">Clear communication</strong> – Regular updates via WhatsApp or email. You're never left wondering.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <p>
                <strong className="text-text">Realistic timelines</strong> – I give accurate estimates and stick to them. No surprises.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <p>
                <strong className="text-text">Collaborative approach</strong> – Your input shapes the project. This is your website, built the way you need it.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <p>
                <strong className="text-text">Quality focus</strong> – I don't rush. Every detail matters, from code quality to user experience.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="font-sora font-bold text-2xl mb-4">Ready to get started?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how I can help bring your vision to life.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-cta-text font-medium rounded-lg transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
          >
            Start your project
          </button>
        </div>
      </div>
    </div>
  );
}
