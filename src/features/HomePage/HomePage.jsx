import React, { useState, useEffect } from 'react';
import BackgroundArt from '../BackgroundArt/BackgroundArt';
import Footer from '../Footer/Footer';
import TopNav from './TopNav';
import SideNav from './SideNav';
import SettingsMenu from './SettingsMenu';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import SmokePageDivider from '../svgArt/SmokePageDivider/SmokePageDivider';
import CityPageDivider from '../svgArt/CityPageDivider/CityPageDivider';
import { navConfig } from './navConfig';
import { HomeContext, useHomeContextState } from './homeContext';
import './styles.scss';

const sideNavWidth = 120;
const contentWidth = 1240;
const HomePage = () => {
  const [navPosition, setNavPosition] = useState('right'); // right top left
  const [showDockOptions, setShowDockOptions] = useState(true);
  const homeContextState = useHomeContextState();

  useEffect(() => {
    const storedDock = localStorage.getItem('homeDock');
    if (storedDock) setNavPosition(storedDock);

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

  const setDock = (position) => {
    localStorage.setItem('homeDock', position);
    setNavPosition(position);
  };

  const sideNaveIsLeft = navPosition === 'left';
  return (
    <HomeContext.Provider value={homeContextState}>
      <BackgroundArt />
      {navPosition === 'top' || !showDockOptions ? (
        <TopNav
          navConfig={navConfig}
          setNavPosition={setDock}
          showDockOptions={showDockOptions}
        />
      ) : (
        <SideNav
          navConfig={navConfig}
          isLeft={sideNaveIsLeft}
          setNavPosition={setDock}
          width={sideNavWidth}
        />
      )}
      {/*<SettingsMenu isRight={sideNaveIsLeft && showDockOptions} />*/}
      <div className="position-relative z-1">
        <SmokePageDivider isBottom={true} />
        <HeroSection />
        <SmokePageDivider />
        {/*<CityPageDivider />*/}
        <AboutSection />
        <SmokePageDivider isBottom={true} />
        <ProjectsSection />
        <SmokePageDivider />
        <ContactSection />
      </div>
      <Footer className="z-2"/>
    </HomeContext.Provider>
  );
};

export default HomePage;
