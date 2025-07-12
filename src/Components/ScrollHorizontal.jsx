import { useEffect, useRef } from "react";

const ScrollHorizontal = ({ speed , isLTR , children }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;
    else console.log("Elements ",element);
    

    const scrollHandler = () => {
      const scrollProgress = window.innerHeight - element.getBoundingClientRect().top;
      
      // Only apply transform when element is in view
      if (scrollProgress > 0) {
        const translateX = scrollProgress * speed;
        const totalTranslate = isLTR ? -translateX : translateX;
        element.style.transform = `translateX(${totalTranslate}px)`;
      } else {
        // Reset to original position when above viewport
        element.style.transform = 'translateX(0px)';
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        document.addEventListener("scroll", scrollHandler);
        scrollHandler(); // Call once to set initial position
      } else {
        document.removeEventListener("scroll", scrollHandler);
      }
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [speed, isLTR]);

  return <div ref={targetRef}>{children}</div>;
};

export default ScrollHorizontal;