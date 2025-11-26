import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import heroGradient from "@/assets/bg-hero-gradient.jpg";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    const packageParam = searchParams.get("package");
    if (packageParam) {
      setSelectedPackage(packageParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-up">
          <h1 className="font-sora font-bold text-text mb-4 sm:mb-6 px-2">
            Let's build something that works for your business
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            Fill out the form below or reach out directly via WhatsApp or email. I respond quickly and we can discuss your project in detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="p-4 sm:p-6 md:p-8 bg-surface border border-border shadow-card animate-fade-up">
            <h2 className="font-sora font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Send a message</h2>
            <form
              action="https://formspree.io/f/xblevgwa"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-3 sm:space-y-4"
            >
              <div>
                <Label htmlFor="name" className="text-foreground text-sm">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1.5 w-full"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="business" className="text-foreground text-sm">Business / Organization *</Label>
                <Input
                  id="business"
                  name="business"
                  type="text"
                  required
                  className="mt-1.5 w-full"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <Label htmlFor="website" className="text-foreground text-sm">Current Website (Optional)</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  className="mt-1.5 w-full"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground text-sm">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full"
                  placeholder="contact@yourbrand.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground text-sm">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1.5 w-full"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <Label htmlFor="requirement" className="text-foreground text-sm">Brief Requirement *</Label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  required
                  className="mt-1.5 min-h-[100px] sm:min-h-[120px] w-full resize-y"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div>
                <Label htmlFor="budget" className="text-foreground text-sm">Budget Bracket (Optional)</Label>
                <select
                  id="budget"
                  name="budget"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="mt-1.5 w-full p-2.5 text-sm border rounded-md bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-ring"
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
                disabled={isSubmitting}
                className="w-full mt-2 bg-accent hover:bg-accent/90 text-white font-semibold transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover text-sm sm:text-base py-2.5 sm:py-3"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </Card>

          {/* Contact Options */}
          <div className="space-y-4 sm:space-y-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <Card className="p-4 sm:p-6 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sora font-semibold mb-2 text-base sm:text-lg">WhatsApp (Preferred)</h3>
                  <p className="text-muted text-xs sm:text-sm mb-2">+91 7206543706</p>
                  <p className="text-muted text-xs sm:text-sm mb-3 sm:mb-4">
                    Quick responses and easy communication. Best for initial discussions and ongoing project updates.
                  </p>
                  <a
                    href="https://wa.me/917206543706?text=Hi%20Pankaj,%20I'd%20like%20to%20discuss%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-accent hover:text-accent transition-all duration-200 w-full sm:w-auto text-xs sm:text-sm"
                    >
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-accent-2/10 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent-2" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sora font-semibold mb-2 text-base sm:text-lg">Email</h3>
                  <p className="text-muted text-xs sm:text-sm mb-2 break-all">pankajaggarwalbusiness@gmail.com</p>
                  <p className="text-muted text-xs sm:text-sm mb-3 sm:mb-4">
                    For detailed project briefs and formal communication. I respond within 24 hours.
                  </p>
                  <a href="mailto:pankajaggarwalbusiness@gmail.com" className="block">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-accent hover:text-accent transition-all duration-200 w-full sm:w-auto text-xs sm:text-sm"
                    >
                      Send email
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Payment Info */}
            <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border">
              <h3 className="font-sora font-semibold mb-3 sm:mb-4 text-text text-base sm:text-lg">Payment Terms</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
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
