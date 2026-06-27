import React from 'react';
import { NavBar } from './NavBar';
import Footer from './Footer/Footer';
import { Router, PageRoute } from '@billyjb3/global-react';
import BackgroundArt from './BackgroundArt/BackgroundArt';
import HomePage from './HomePage/HomePage';
import ContactPage from './ContactPage/ContactPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';

// TODO: add a page like option. will need backend
// TODO: add wave like and other shaped section dividers
// TODO: make custom scroll bar
// TODO: maybe have canvas colors change as you scroll
// TODO: create the hero section tech cards to be an interactive slot machine design?
const RootContainer = () => {
  return (
    <div
      id="appContainer"
      className="height-page color-text-primary flex flex-column color-bg-primary body"
    >
      <Router indexRedirect="home">
        <NavBar />
        <BackgroundArt />
        <div className="flex-grow pad-4-tb top-z">
          <PageRoute path="/home" Component={HomePage} />
          <PageRoute path="/contact" Component={ContactPage} />
          <PageRoute path="/projects" Component={ProjectsPage} />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default RootContainer;


