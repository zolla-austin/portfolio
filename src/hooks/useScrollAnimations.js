import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const initScrollAnimations = () => {
      // Intersection Observer for scroll animations
      const elements = document.querySelectorAll(
        ".slide-in-left, .slide-in-right, .slide-in-up, .reveal"
      );
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    };

    // Initialize scroll animations
    const cleanup = initScrollAnimations();

    return cleanup;
  }, []);
};
