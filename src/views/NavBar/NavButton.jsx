import React from 'react';
import { useRouter } from '@billyjb3/global-react';
import { useHoverRef } from '../../hooks';

const NavButton = (props) => {
  const {
    to = '',
    className = '',
    children,
  } = props;
  const { push } = useRouter();
  const isActive = window.location.pathname === to;
  const { ref, isHovered } = useHoverRef();

  return (
    <button
      ref={ref}
      className={`navButton position-relative color-text-primary pad-2 margin-1-lr ${isActive ? 'navButtonActive' : ''}`}
      onClick={() => push(to)}
    >
      <div className="position-absolute-bl width-full flex flex-justify-center">
        <div className={`navButtonAccent ${isActive ? 'width-full' : ''}`} />
      </div>
      <span className={`body body-bold ${isActive || isHovered ? 'color-text-focus' : ''}`}>{children}</span>
    </button>
  );
};

export default NavButton;

// TODO: create a subtle and slow changing 'tv static' in the page background. subtle and grungy feeling, could use flicker intro/outro for static particles, and have the color shift during the flicker in a color like the older street lamps, that yellow/orange light
