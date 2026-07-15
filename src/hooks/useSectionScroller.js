import { useState, useEffect, useRef } from 'react';

// TODO: move to global-react
function useSectionScroller() {
  const scrollables = useRef({});
  const [currentSection, setCurrentSection] = useState(null);

  const registerRef = (ref, id) => {
    if (!scrollables.current[id]) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setCurrentSection(id);
      }, { threshold: .6 });

      scrollables.current[id] = { ref, observer };
      observer.observe(ref.current);
    }
  };

  useEffect(() => {
    return () => {
      Object.values(scrollables.current).forEach((scrollable) => {
        const { ref, observable } = scrollable;
        observable?.unobserve(ref.current);
        observable?.disconnect();
      });
    };
  }, []);

  const handleClick = (id) => {
    const scrollable = scrollables.current[id];

    if (scrollable) {
      scrollable.ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Vertical alignment: 'start', 'center', 'end', or 'nearest'
      });
    }
  }

  return { registerRef, handleClick, currentSection };
}

export default useSectionScroller;
