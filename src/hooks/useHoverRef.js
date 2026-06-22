import { useState, useRef, useEffect } from 'react';

function useHoverRef() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    ref.current.addEventListener('mouseenter', () => {
      setIsHovered(true);
    });
    ref.current.addEventListener('mouseleave', () => {
      setIsHovered(false);
    });
  }, []);

  return { ref, isHovered };
}

export default useHoverRef;
