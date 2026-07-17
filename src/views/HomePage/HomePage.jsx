import React, { useState, useEffect } from 'react';
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

const sideNavWidth = 120;
const contentWidth = 1240;
const HomePage = () => {
  // TODO: add dock state to cookies so it stays where the use put it whenever they come back
  const [navPosition, setNavPosition] = useState('right'); // right top left
  const [showDockOptions, setShowDockOptions] = useState(true);
  const sectionScroller = useSectionScroller();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > contentWidth) {
        if ((width - contentWidth) / 2 < sideNavWidth) setShowDockOptions(false);
        else setShowDockOptions(true);
      } else setShowDockOptions(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sideNaveIsLeft = navPosition === 'left';
  return (
    <>
      {navPosition === 'top' || !showDockOptions ? (
        <TopNav
          navConfig={navConfig}
          sectionScroller={sectionScroller}
          setNavPosition={setNavPosition}
          showDockOptions={showDockOptions}
        />
      ) : (
        <SideNav
          navConfig={navConfig}
          sectionScroller={sectionScroller}
          isLeft={sideNaveIsLeft}
          setNavPosition={setNavPosition}
          width={sideNavWidth}
        />
      )}
      <WingsPageDivider isBottom={true} />
      <HeroSection
        sectionScroller={sectionScroller}
      />
      <WingsPageDivider />
      <AboutSection
        sectionScroller={sectionScroller}
      />
      <WingsPageDivider isBottom={true} />
      <ProjectsSection
        sectionScroller={sectionScroller}
      />
      <WingsPageDivider />
      <ContactSection
        sectionScroller={sectionScroller}
      />
    </>
  );
};

export default HomePage;
