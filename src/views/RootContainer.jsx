import React from 'react';
import { Router, PageRoute } from '@billyjb3/global-react';
import BackgroundArt from './BackgroundArt/BackgroundArt';
import HomePage from './HomePage/HomePage';
import ContactPage from './ContactPage/ContactPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';

// TODO: add a page like option. will need backend
// TODO: maybe have canvas colors change as you scroll
// TODO: create the hero section tech cards to be an interactive slot machine design?
// TODO: add in a feedback form like from jtbb site

const RootContainer = () => {

  return (
    <div
      id="appContainer"
      className="height-page color-text-primary flex flex-column color-bg-primary body"
    >
      <Router indexRedirect="home">
        <BackgroundArt />
        <div className="flex-grow top-z" id="displaySection">
          <PageRoute path="/home" Component={HomePage} />
          <PageRoute path="/contact" Component={ContactPage} />
          <PageRoute path="/projects" Component={ProjectsPage} />
        </div>
      </Router>
    </div>
  );
};

export default RootContainer;


