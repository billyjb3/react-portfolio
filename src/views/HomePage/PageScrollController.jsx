import React, { useState, useEffect, useRef } from 'react';
import { ButtonText } from '../../components';

const scrollerWidth = 120;
const PageScrollController = (props) => {
  const { setScrollerWidth, scrollableRefs } = props;
  const scrollerRef = useRef(null);
  const [links, setLinks] = useState([]);
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    setScrollerWidth(scrollerWidth);
  }, []);

  useEffect(() => {
    if (scrollableRefs.current.length) {
      const labels = [];
      scrollableRefs.current.forEach((ref) => {
        const label = ref.current.dataset.scrollerLabel;
        labels.push(label);

        const observer = new IntersectionObserver((args) => {
          // console.log(args);
          const [entry] = args;
          if (entry.isIntersecting) setCurrentSection(label);
        }, { threshold: .6 });

        observer.observe(ref.current);
      });
      setLinks(labels);
    }
  }, [scrollableRefs.length]);

  const handleClick = (link) => {
    const sectionRef = scrollableRefs.current.find((ref) => ref.current.dataset.scrollerLabel === link);
    if (sectionRef) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Vertical alignment: 'start', 'center', 'end', or 'nearest'
      });
    }
  };

  return (
    <div
      ref={scrollerRef}
      className="scrollContainer top-z"
      style={{ width: `${scrollerWidth}px` }}
    >
      <div className="height-full sub-text border-l-1 border-fade-b position-relative">
        <div className="position-absolute width-full height-full scrollerBackground" />
        <nav className="position-relative top-z height-full flex flex-column flex-align-center pad-2-lr pad-4-tb">
          {links.map((link) => {
            const isInView = currentSection === link;
            return (
              <div className="pad-4-tb width-full">
                <ButtonText
                  onClick={() => handleClick(link)}
                  className={`pad-2-tb pad-2-lr width-full color-text-accent top-z uppercase body-small condensed ${isInView ? 'body-bold border-b-1 border-fade-lr' : ''}`}
                >
                  {link}
                </ButtonText>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default PageScrollController;
