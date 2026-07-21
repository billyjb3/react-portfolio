import React from 'react';
import { ButtonText } from '../../components';
import { IconDockLeft, IconDockRight, IconDockTop } from '../../icons';
import { ButtonIcon, StackNav, StackNavButton, StackNavControl, StackNavMenu, useBreakpoints } from '@billyjb3/global-react';

const TopNav = (props) => {
  const {
    navConfig,
    sectionScroller,
    setNavPosition,
    showDockOptions,
  } = props;
  const { isSmall, isExtraSmall } = useBreakpoints();
  const isSmallDown = isSmall || isExtraSmall;
  const { currentSection, handleClick } = sectionScroller;

  return (
    <div className="color-bg-primary border-b-1 border-fade-lr position-sticky-t top-z">
      <div className="position-relative pad-3-tb">
        {showDockOptions && (
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
        )}

        {isSmallDown ? (
          <div className="flex flex-justify-between">
            <ButtonText>
              Billy Brewer
            </ButtonText>
            <StackNav>
              <StackNavControl />
              <StackNavMenu>
                {navConfig.map(({ id, label }) => (
                  <StackNavButton onClick={() => handleClick(id)}>
                    {label}
                  </StackNavButton>
                ))}
              </StackNavMenu>
            </StackNav>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default TopNav;
