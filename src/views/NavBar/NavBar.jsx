import React from 'react';
import NavButton from './NavButton';
import {
  StackNav,
  StackNavButton,
  StackNavMenu,
  StackNavControl,
} from '@billyjb3/global-react';

const NavBar = () => {

  return (
    <div className={`border-b border-fade-lr color-bg-primary top-z`}>
      <div className="pad-3-tb position-relative flex flex-justify-center">
        <span>
          <NavButton to="/home">Home</NavButton>
          <NavButton to="/projects">Projects</NavButton>
          <NavButton to="/contact">Contact</NavButton>
          {/*<StackNav>*/}
          {/*  <StackNavControl className="color-text-black color-bg-white" />*/}
          {/*  <StackNavMenu className="color-bg-white">*/}
          {/*    <StackNavButton>Test One</StackNavButton>*/}
          {/*    <StackNavButton>Test Two</StackNavButton>*/}
          {/*    <StackNavButton>Test Three</StackNavButton>*/}
          {/*  </StackNavMenu>*/}
          {/*</StackNav>*/}
        </span>
        <span className="position-absolute-r pad-3-lr">
          <NavButton to="/login">Login</NavButton>
        </span>
      </div>
    </div>
  );
};

export default NavBar;

