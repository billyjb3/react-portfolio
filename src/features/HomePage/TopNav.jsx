import React from 'react';
import { ButtonText } from '../../components';
import {
  StackNav,
  StackNavButton,
  StackNavControl,
  StackNavMenu,
  useBreakpoints,
} from '@billyjb3/global-react';
import NavDockController from './NavDockController';
import { heroId } from './navConfig';
import { useHomeContext } from './homeContext';

const TopNav = (props) => {
  const {
    navConfig,
    setNavPosition,
    showDockOptions,
  } = props;
  const { isSmall, isExtraSmall } = useBreakpoints();
  const isSmallDown = isSmall || isExtraSmall;
  const { sectionScroller: { currentSection, handleClick } } = useHomeContext();

  return (
    <div className="color-bg-primary border-b-1 border-fade-lr position-sticky-t z-top">
      <div className="position-relative pad-3-tb-md-up pad-1-tb-sm-down pad-3-lr">
        {showDockOptions && (
          <NavDockController
            setNavPosition={setNavPosition}
            className="color-text-primary position-absolute-r flex flex-row"
          />
        )}

        {isSmallDown ? (
          <div className="flex flex-justify-between">
            <ButtonText
              onClick={() => handleClick(heroId)}
              className="body body-spaced font-weight-8 italic color-text-primary"
            >
              Billy <span className="color-text-accent">Brewer</span>
            </ButtonText>
            <StackNav>
              <StackNavControl />
              <StackNavMenu className="color-bg-surface border-l-1 border-fade-b">
                {navConfig.map(({ id, label }) => {
                  const isInView = currentSection === id;
                  return (
                    <StackNavButton
                      onClick={() => handleClick(id)}
                      isRouteChange={false}
                      className={`color-bg-inherit body-bold uppercase ${isInView ? 'color-text-accent border-b-1 border-fade-lr' : 'color-text-primary'}`}
                    >
                      {label}
                    </StackNavButton>
                  )
                })}
              </StackNavMenu>
            </StackNav>
          </div>
        ) : (
          <div className="content-container margin-auto-lr flex flex-justify-between">
            <ButtonText
              onClick={() => handleClick(heroId)}
              className="body body-spaced font-weight-8 italic color-text-primary"
            >
              Billy <span className="color-text-accent">Brewer</span>
            </ButtonText>
            <div className={`${showDockOptions ? 'pad-4-r' : ''}`}>
              {navConfig.map(({ id, label }) => {
                const isInView = currentSection === id;
                return (
                  <ButtonText
                    onClick={() => handleClick(id)}
                    className={`pad-2-tb pad-3-lr color-text-accent z-top uppercase body-small condensed ${isInView ? 'body-bold border-b-1 border-fade-lr' : ''}`}
                  >
                    {label}
                  </ButtonText>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
