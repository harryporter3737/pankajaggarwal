export default function Ticker() {
  const tickerText = "pankajaggarwalbusiness   •   Web Development & Digital Transformation   •   SEO for Real Leads   •   Branding & Logo Design   •   Social Media Marketing   •   Fast & Secure Website Hosting   •   Full Digital Setup for Businesses   •   Book Free Consultation   •   Transforming Ideas into Revenue →";
  
  // Duplicate text for seamless loop
  const duplicatedText = `${tickerText} ${tickerText} ${tickerText}`;

  return (
    <div className="relative w-full overflow-hidden bg-surface py-4 border-y border-border">
      {/* Fade gradients on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
      
      {/* Ticker content */}
      <div className="ticker-content whitespace-nowrap">
        <span className="ticker-text inline-block font-medium text-text/80 dark:text-text/70">
          {duplicatedText}
        </span>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .ticker-content {
          display: flex;
          animation: ticker-scroll 12s linear infinite;
        }

        .ticker-text {
          font-size: clamp(0.75rem, 1.4vw, 1.125rem);
          letter-spacing: 0.02em;
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-content {
            animation: none;
          }
          .ticker-text {
            display: inline;
            white-space: normal;
          }
        }
      `}</style>
    </div>
  );
}
