import React from 'react';
import { ButtonText } from '../../components';
import { IconDockRight, IconDockLeft, IconDockTop } from '../../icons';
import { ButtonIcon } from '@billyjb3/global-react';

const SideNav = (props) => {
  const {
    navConfig,
    sectionScroller,
    isLeft,
    setNavPosition,
    width = 120,
  } = props;
  const { currentSection, handleClick } = sectionScroller;

  return (
    <div
      className="sideNavContainer top-z"
      style={{ width: `${width}px`, ...(isLeft ? { left: 0 } : { right: 0 }) }}
    >
      <div className={`height-full sub-text ${isLeft ? 'border-r-1' : 'border-l-1'} border-fade-b position-relative`}>
        <div className="position-absolute width-full height-full sideNavBackground" />
        <nav className="position-relative top-z height-full flex flex-column flex-align-center">
          <div className="color-text-primary width-full flex flex-justify-between pad-1-tb">
            <ButtonIcon onClick={() => setNavPosition('left')}>
              <IconDockLeft />
            </ButtonIcon>
            <ButtonIcon onClick={() => setNavPosition('top')}>
              <IconDockTop />
            </ButtonIcon>
            <ButtonIcon onClick={() => setNavPosition('right')}>
              <IconDockRight />
            </ButtonIcon>
          </div>

          <div className="flex flex-column flex-align-center pad-2-lr pad-4-tb">
            {navConfig.map(({ id, label }) => {
              const isInView = currentSection === id;
              return (
                <div className="pad-4-tb width-full">
                  <ButtonText
                    onClick={() => handleClick(id)}
                    className={`pad-2-tb pad-2-lr width-full color-text-accent top-z uppercase body-small condensed ${isInView ? 'body-bold border-b-1 border-fade-lr' : ''}`}
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
