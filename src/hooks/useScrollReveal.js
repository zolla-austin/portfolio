import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Wait a bit for DOM to be ready after loading screen
    const timer = setTimeout(() => {
      const initScrollAnimations = () => {
        const elements = document.querySelectorAll(
          ".slide-in-left, .slide-in-right, .slide-in-up, .reveal"
        );
        
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (entry.target.classList.contains('reveal')) {
                  entry.target.classList.add('show');
                } else {
                  entry.target.style.opacity = "1";
                  entry.target.style.transform = "translate(0)";
                }
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
      };

      initScrollAnimations();
    }, 500);

    return () => clearTimeout(timer);
  }, []);
};
