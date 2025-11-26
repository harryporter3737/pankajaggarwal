import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import portfolioDesktop from "@/assets/jayesh-portfolio-desktop.png";
import portfolioMobile1 from "@/assets/jayesh-mobile-1.jpg";
import portfolioMobile2 from "@/assets/jayesh-mobile-2.jpg";
import portfolioMobile3 from "@/assets/jayesh-mobile-3.jpg";
import { PortfolioModal } from "@/components/PortfolioModal";

const projects = [
  {
    title: "Costume Designer Portfolio",
    category: "Portfolio Website",
    client: "Fashion Industry Client",
    description:
      "Built for a fashion costume designer. Minimal, storytelling layout with mobile-first approach. Focus on showcasing portfolio work, smooth navigation, and contact accessibility.",
    role: "Design & Development",
    tech: ["React", "Tailwind CSS", "Responsive Design", "Performance Optimization"],
    liveUrl: "https://jayeshtawarmalani.in",
    image: portfolioDesktop,
  },
];

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Create array of all images for the project
  const projectImages = [
    { src: portfolioDesktop, alt: "Costume Designer Portfolio - Desktop View" },
    { src: portfolioMobile1, alt: "Costume Designer Portfolio - Mobile View 1" },
    { src: portfolioMobile2, alt: "Costume Designer Portfolio - Mobile View 2" },
    { src: portfolioMobile3, alt: "Costume Designer Portfolio - Mobile View 3" },
  ];

  const openModal = (src: string, alt: string) => {
    const index = projectImages.findIndex(img => img.src === src);
    setCurrentImageIndex(index !== -1 ? index : 0);
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(projectImages[index]);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-sora font-bold text-text mb-4">Recent work</h1>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my approach to web development
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Images */}
              <div className="space-y-4">
                <Card 
                  className="p-4 bg-surface border border-border shadow-card overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300"
                  onClick={() => openModal(project.image, `${project.title} - Desktop View`)}
                >
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Desktop View`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </Card>
                <div className="grid grid-cols-3 gap-4">
                  <Card 
                    className="p-3 bg-surface border border-border shadow-card cursor-pointer hover:shadow-card-hover transition-all duration-300"
                    onClick={() => openModal(portfolioMobile1, `${project.title} - Mobile View 1`)}
                  >
                    <div className="aspect-[9/16] rounded overflow-hidden">
                      <img 
                        src={portfolioMobile1} 
                        alt={`${project.title} - Mobile View 1`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </Card>
                  <Card 
                    className="p-3 bg-surface border border-border shadow-card cursor-pointer hover:shadow-card-hover transition-all duration-300"
                    onClick={() => openModal(portfolioMobile2, `${project.title} - Mobile View 2`)}
                  >
                    <div className="aspect-[9/16] rounded overflow-hidden">
                      <img 
                        src={portfolioMobile2} 
                        alt={`${project.title} - Mobile View 2`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </Card>
                  <Card 
                    className="p-3 bg-surface border border-border shadow-card cursor-pointer hover:shadow-card-hover transition-all duration-300"
                    onClick={() => openModal(portfolioMobile3, `${project.title} - Mobile View 3`)}
                  >
                    <div className="aspect-[9/16] rounded overflow-hidden">
                      <img 
                        src={portfolioMobile3} 
                        alt={`${project.title} - Mobile View 3`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </Card>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-accent text-sm font-medium">{project.category}</span>
                <h2 className="font-sora font-bold text-text mt-2 mb-2">{project.title}</h2>
                <p className="text-sm text-muted mb-4">{project.client}</p>
                
                <p className="text-muted mb-6">{project.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-sm mb-2">Role</h3>
                    <p className="text-muted text-sm">{project.role}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-border hover:border-accent hover:text-accent transition-all duration-200 group"
                  >
                    View live site
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Card className="p-12 bg-gradient-to-br from-accent/10 to-accent-2/10 border border-border text-center mt-20">
          <h2 className="font-sora font-bold text-text mb-4">
            Want to see your project here?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing for your business. Reach out for a quick discussion.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-cta-text font-medium transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
            onClick={() => window.location.href = '/contact'}
          >
            Start your project
          </Button>
        </Card>

        {/* Portfolio Modal */}
        <PortfolioModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          images={projectImages}
          currentIndex={currentImageIndex}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
}
