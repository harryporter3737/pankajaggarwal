import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const PortfolioModal = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  imageAlt, 
  images, 
  currentIndex, 
  onNavigate 
}: PortfolioModalProps) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 1));
  };

  const handleClose = () => {
    setZoom(1);
    onClose();
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setZoom(1);
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setZoom(1);
      onNavigate(currentIndex + 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background border-border overflow-hidden">
        {/* Header with controls */}
        <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            className="bg-background/90 backdrop-blur-sm border-border hover:bg-surface"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomIn}
            disabled={zoom >= 3}
            className="bg-background/90 backdrop-blur-sm border-border hover:bg-surface"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleClose}
            className="bg-background/90 backdrop-blur-sm border-border hover:bg-surface"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation arrows */}
        {currentIndex > 0 && (
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/90 backdrop-blur-sm border-border hover:bg-surface"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}
        {currentIndex < images.length - 1 && (
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/90 backdrop-blur-sm border-border hover:bg-surface"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        )}

        {/* Image container with scroll */}
        <div className="w-full h-[90vh] overflow-auto p-8">
          <div className="flex items-center justify-center min-h-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-none transition-transform duration-200"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center",
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
