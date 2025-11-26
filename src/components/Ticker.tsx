export default function Ticker() {
  const tickerText = "pankajaggarwalbusiness • Web Development & Digital Transformation • SEO for Real Leads • Branding & Logo Design • Social Media Marketing • Fast & Secure Website Hosting • Full Digital Setup for Businesses • Book Free Consultation • Transforming Ideas into Revenue →";
  
  // Duplicate text for seamless loop
  const duplicatedText = `${tickerText} ${tickerText} ${tickerText}`;

  return (
    <div className="relative w-full overflow-hidden bg-surface py-3 border-y border-border">
      {/* Fade gradients on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
      
      {/* Ticker content */}
      <div className="ticker-content whitespace-nowrap">
        <span className="ticker-text inline-block font-sora font-semibold text-text/90 dark:text-text/80">
          {duplicatedText}
        </span>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(110%);
          }
          10% {
            transform: translateX(100%);
          }
          90% {
            transform: translateX(-105%);
          }
          100% {
            transform: translateX(-110%);
          }
        }

        @keyframes float-effect {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-2px);
          }
        }

        .ticker-content {
          display: flex;
          animation: ticker-scroll 12s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
        }

        .ticker-text {
          font-size: clamp(0.875rem, 1.5vw, 1.25rem);
          letter-spacing: 0.5px;
          line-height: 1.4;
          padding-right: 60px;
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }

        /* Floating effect only on larger screens */
        @media (min-width: 1024px) {
          .ticker-content {
            animation: ticker-scroll 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite,
                       float-effect 5s ease-in-out infinite alternate;
          }
          
          .ticker-text {
            letter-spacing: 0.6px;
          }
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
