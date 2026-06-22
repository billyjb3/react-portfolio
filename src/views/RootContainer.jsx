import React from 'react';
import { NavBar } from './NavBar';
import Footer from './Footer/Footer';
import { Router, PageRoute } from '@billyjb3/global-react';
import BackgroundArt from './BackgroundArt/BackgroundArt';
import HomePage from './HomePage/HomePage';
import ContactPage from './ContactPage/ContactPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';

// TODO: explore the idea of having light rays coming in from the top right corner of the page. Possibly through a subtle window design
const RootContainer = () => {
  return (
    <div
      id="appContainer"
      className="height-page color-text-primary flex flex-column color-bg-primary body"
    >
      <Router indexRedirect="home">
        <NavBar />
        <BackgroundArt />
        <div className="flex-grow pad-4-tb pad-3-lr-sm-down pad-4-lr-md-up top-z">
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


// TODO: sleepless nights novelest: use layered divs to create a "beach" looking thing on the bottom and fade it into the cool blue background.. and have it fade out of the background towards the top?