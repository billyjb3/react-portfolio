import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import WingsPageDivider from '../../svgArt/WingsPageDivider/WingsPageDivider';
import './styles.scss';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WingsPageDivider />
      <AboutSection />
      <ProjectsSection />
    </>
  );
};

export default HomePage;
