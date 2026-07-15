import React from 'react';
import { ButtonText } from '../../components';
import { IconDockLeft, IconDockRight, IconDockTop } from '../../icons';
import { ButtonIcon } from '@billyjb3/global-react';

const TopNav = (props) => {
  const {
    navConfig,
    sectionScroller,
    setNavPosition,
  } = props;
  const { currentSection, handleClick } = sectionScroller;

  return (
    <div className="color-bg-primary border-b-1 border-fade-lr position-sticky-t top-z">
      <div className="position-relative pad-3-tb">
        <div className="color-text-primary position-absolute-r flex flex-row">
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

        <div className="content-container margin-auto-lr flex flex-justify-center">
          {navConfig.map(({ id, label }) => {
            const isInView = currentSection === id;
            return (
              <ButtonText
                onClick={() => handleClick(id)}
                className={`pad-2-tb pad-3-lr color-text-accent top-z uppercase body-small condensed ${isInView ? 'body-bold border-b-1 border-fade-lr' : ''}`}
              >
                {label}
              </ButtonText>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
