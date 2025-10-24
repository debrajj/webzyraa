'use client'
import { useEffect, useState, useCallback } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const toggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-999" style={{ transform: 'translateZ(0)' }}>
      <div className="flex items-center gap-2.5">
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-purple_blue text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
            style={{ 
              transform: 'translateZ(0)',
              willChange: 'transform, opacity'
            }}
          >
            <span 
              className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"
              style={{ transform: 'translateZ(0)' }}
            ></span>
          </div>
        )}
      </div>
    </div>
  );
}
