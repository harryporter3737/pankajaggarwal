import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroGradient from "@/assets/bg-hero-gradient.jpg";

export default function Contact() {

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img 
          src={heroGradient} 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/85 dark:bg-black/90" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-sora font-bold text-text mb-6">
            Let's build something that works for your business
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-base leading-relaxed">
            Fill out the form below or reach out directly via WhatsApp or email. I respond quickly and we can discuss your project in detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="p-8 bg-surface border border-border shadow-card animate-fade-up">
            <h2 className="font-sora font-semibold text-xl mb-6">Send a message</h2>
            <form
              action="https://formspree.io/f/xblevgwa"
              method="POST"
              className="space-y-4"
            >
              <div>
                <Label htmlFor="name" className="text-foreground">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="business" className="text-foreground">Business / Organization *</Label>
                <Input
                  id="business"
                  name="business"
                  type="text"
                  required
                  className="mt-2"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <Label htmlFor="website" className="text-foreground">Current Website (Optional)</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  className="mt-2"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2"
                  placeholder="contact@yourbrand.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-2"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <Label htmlFor="requirement" className="text-foreground">Brief Requirement *</Label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  required
                  className="mt-2 min-h-[120px]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div>
                <Label htmlFor="budget" className="text-foreground">Budget Bracket (Optional)</Label>
                <select
                  id="budget"
                  name="budget"
                  className="mt-2 w-full p-2 border rounded-md bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select your budget range</option>
                  <option value="Basic package">Basic package</option>
                  <option value="Premium package">Premium package</option>
                  <option value="Custom package">Custom package</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
              >
                Send
              </Button>
            </form>
          </Card>

          {/* Contact Options */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <Card className="p-6 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sora font-semibold mb-2">WhatsApp (Preferred)</h3>
                  <p className="text-muted text-sm mb-2">+91 7206543706</p>
                  <p className="text-muted text-sm mb-4">
                    Quick responses and easy communication. Best for initial discussions and ongoing project updates.
                  </p>
                  <a
                    href="https://wa.me/917206543706?text=Hi%20Pankaj,%20I'd%20like%20to%20discuss%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-border hover:border-accent hover:text-accent transition-all duration-200"
                    >
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-2/10 rounded-lg">
                  <Mail className="h-6 w-6 text-accent-2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sora font-semibold mb-2">Email</h3>
                  <p className="text-muted text-sm mb-2">pankajaggarwalbusiness@gmail.com</p>
                  <p className="text-muted text-sm mb-4">
                    For detailed project briefs and formal communication. I respond within 24 hours.
                  </p>
                  <a href="mailto:pankajaggarwalbusiness@gmail.com">
                    <Button
                      variant="outline"
                      className="border-border hover:border-accent hover:text-accent transition-all duration-200"
                    >
                      Send email
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Payment Info */}
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border">
              <h3 className="font-sora font-semibold mb-4 text-text text-lg">Payment Terms</h3>
              <ul className="space-y-3 text-sm text-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 font-bold">•</span>
                  <span>Payments via UPI / Bank Transfer after scope agreement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 font-bold">•</span>
                  <span>50% advance to start the project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 font-bold">•</span>
                  <span>50% payable before final handover</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 font-bold">•</span>
                  <span>Invoice provided post-payment confirmation</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
