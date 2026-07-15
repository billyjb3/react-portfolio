import React, { useState, useEffect, useRef, createContext } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import WingsPageDivider from '../../svgArt/SmokePageDivider/SmokePageDivider';
import PuddlePageDivider from '../../svgArt/PuddlePageDivider/PuddlePageDivider';
import { navConfig } from './navConfig';
import { useSectionScroller } from '../../hooks';
import './styles.scss';

const HomePage = () => {
  const [navPosition, setNavPosition] = useState('right');
  const [scrollerWidth, setScrollerWidth] = useState(0);
  const sectionScroller = useSectionScroller();

  return (
    <>
      {navPosition === 'top' ? (
        <TopNav
          navConfig={navConfig}
          sectionScroller={sectionScroller}
          setNavPosition={setNavPosition}
        />
      ) : (
        <SideNav
          navConfig={navConfig}
          sectionScroller={sectionScroller}
          isLeft={navPosition === 'left'}
          setNavPosition={setNavPosition}
        />
      )}
      <WingsPageDivider isBottom={true} />
      <HeroSection
        scrollerWidth={scrollerWidth}
        sectionScroller={sectionScroller}
      />
      <WingsPageDivider />
      <AboutSection
        scrollerWidth={scrollerWidth}
        sectionScroller={sectionScroller}
      />
      <WingsPageDivider isBottom={true} />
      <ProjectsSection sectionScroller={sectionScroller} />
      <WingsPageDivider />
      <ContactSection sectionScroller={sectionScroller} />
    </>
  );
};

export default HomePage;
