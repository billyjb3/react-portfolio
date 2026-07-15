import React, { useState, useEffect, useRef, createContext } from 'react';
import PageScrollController from './PageScrollController';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import WingsPageDivider from '../../svgArt/SmokePageDivider/SmokePageDivider';
import PuddlePageDivider from '../../svgArt/PuddlePageDivider/PuddlePageDivider';
import './styles.scss';

const HomePage = () => {
  const [scrollerWidth, setScrollerWidth] = useState(0);
  const scrollableRefs = useRef([]);

  const registerScrollable = (ref) => {
    if (!scrollableRefs.current.includes(ref)) scrollableRefs.current.push(ref);
  };

  return (
    <>
      <PageScrollController
        scrollerWidth={scrollerWidth}
        setScrollerWidth={setScrollerWidth}
        scrollableRefs={scrollableRefs}
      />
      <WingsPageDivider isBottom={true} />
      <HeroSection
        scrollerWidth={scrollerWidth}
        registerScrollable={registerScrollable}
      />
      <WingsPageDivider />
      <AboutSection
        scrollerWidth={scrollerWidth}
        registerScrollable={registerScrollable}
      />
      <WingsPageDivider isBottom={true} />
      <ProjectsSection  registerScrollable={registerScrollable} />
      <WingsPageDivider />
      <ContactSection registerScrollable={registerScrollable} />
    </>
  );
};

export default HomePage;
