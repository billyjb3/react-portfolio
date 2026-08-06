import React from 'react';
import { Router, PageRoute } from '@billyjb3/global-react';
import HomePage from './HomePage/HomePage';

// TODO: add a page like option. will need backend
// TODO: maybe have canvas colors change as you scroll
// TODO: add more shadows, nav container shadows to make them look like they're glowing, stuff like that

const RootContainer = () => {
  return (
    <div
      id="appContainer"
      className="height-page color-text-primary color-bg-primary body"
    >
      <Router indexRedirect="/">
        <div className="position-relative flex-grow" id="displaySection">
          <PageRoute path="/" Component={HomePage} />
        </div>
      </Router>
    </div>
  );
};

export default RootContainer;


