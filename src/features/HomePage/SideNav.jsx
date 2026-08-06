import React from 'react';
import { ButtonText } from '../../components';
import NavDockController from './NavDockController';
import { useHomeContext } from './homeContext';

// TODO: have the spacing between the section links be flex-between on smaller height but wide screens
const SideNav = (props) => {
  const {
    navConfig,
    isLeft,
    setNavPosition,
    width = 120,
  } = props;
  const { sectionScroller: { currentSection, handleClick } } = useHomeContext();

  return (
    <div
      className="sideNavContainer z-top"
      style={{ width: `${width}px`, ...(isLeft ? { left: 0 } : { right: 0 }) }}
    >
      <div className={`height-full sub-text ${isLeft ? 'border-r-1' : 'border-l-1'} border-fade-b position-relative`}>
        <div className="position-absolute width-full height-full sideNavBackground" />
        <nav className="position-relative z-top height-full flex flex-column flex-align-center">
          <NavDockController
            className="color-text-primary width-full flex flex-justify-between pad-1-tb"
            setNavPosition={setNavPosition}
          />
          <div className="flex flex-column flex-align-center pad-2-lr pad-4-tb">
            {navConfig.map(({ id, label }) => {
              const isInView = currentSection === id;
              return (
                <div className="pad-4-tb width-full">
                  <ButtonText
                    onClick={() => handleClick(id)}
                    className={`pad-2-tb pad-2-lr width-full color-text-accent z-top uppercase body-small condensed ${isInView ? 'body-bold border-b-1 border-fade-lr' : ''}`}
                  >
                    {label}
                  </ButtonText>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
