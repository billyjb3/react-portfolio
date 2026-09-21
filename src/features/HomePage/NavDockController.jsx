import React from 'react';
import { ButtonIcon } from '@billyjb3/global-react';
import { IconDockLeft, IconDockTop, IconDockRight } from '../../components/icons';

const NavDockController = (props) => {
  const {
    setNavPosition,
    className = '',
  } = props;

  return (
    <div className={`${className}`}>
      <ButtonIcon
        onClick={() => setNavPosition('left')}
        aria-label="dock nav bar to left side of screen"
      >
        <IconDockLeft aria-hidden={true} />
      </ButtonIcon>
      <ButtonIcon
        onClick={() => setNavPosition('top')}
        aria-label="dock nav bar to top of screen"
      >
        <IconDockTop aria-hidden={true} />
      </ButtonIcon>
      <ButtonIcon
        onClick={() => setNavPosition('right')}
        aria-label="dock nav bar to right side of screen"
      >
        <IconDockRight aria-hidden={true} />
      </ButtonIcon>
    </div>
  );
};

export default NavDockController;
