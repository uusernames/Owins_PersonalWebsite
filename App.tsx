import { useEffect, useState } from "react";

// Functional component for animated scrolling header
const Personalwebsite = () => {
  const [scrollY, setScrollY] = useState(0); // Track vertical scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute top offset and scaling effect based on scroll
  const topOffset = Math.max( -55, 400 - scrollY); // Stops at -60px
  const scaleFactor = Math.max(0.35, 1 - (scrollY + 50) / 1000); // Smooth scale, min 0.2

  return (
   <header
  id="scrolling-title"
  className="center smooth-transition fuzzy-bubbles-bold"
  style={{
    position: "fixed",
    left: "50%",
    top: `${topOffset}px`,
    transform: `translateX(-50%) scale(${scaleFactor})`,
    zIndex: 1000,  // Make sure this is higher than scroll bar's 999
  }}
>
  <h1 className="typing-effect">I'm Owin Tao!</h1>
  
</header>
  );
};

export default Personalwebsite;
