import React, { useRef, useEffect } from 'react';
import { useHomeContext } from '../../features/HomePage/homeContext';
import animap from './config';

const SmokePageDivider = (props) => {
  const { isBottom } = props;
  const pathRefs = useRef([]);
  const { pageSettings: { showAnimations } } = useHomeContext();

  const addRef = (element) => {
    element
    && !pathRefs.current.includes(element)
    && pathRefs.current.push(element);
  }

  useEffect(() => {
    if (pathRefs?.current?.length) {
      pathRefs.current.forEach((element) => {
        const { frames, options } = animap[element.id];
        if (showAnimations.value) {
          if (element.animation) element.animation.play();
          else element.animation = element.animate(frames, options);
        } else element.animation.pause();
      });
    }
  }, [pathRefs?.current?.length, showAnimations]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      style={{
        width: '100%',
        maxHeight: '200px',
        display: 'block',
        ...(isBottom ? { transform: 'scaleY(-1)' } : {}),
      }}
      preserveAspectRatio="none"
    >
      <g fill="#c0d0f0" strokeWidth="0">
        <path ref={addRef} id="lightTopRight1" opacity=".08" />
        <path ref={addRef} id="lightTopRight2" d="M0 100 H1000V10z" opacity=".08" />

        <path ref={addRef} id="lightTopLeft2" d="M1000 100 H0V0z" opacity=".08" />
        <path ref={addRef} id="lightTopLeft2" d="M1000 100 H0V10z" opacity=".08" />
      </g>
      {/*<g fill="#101215" strokeWidth="0">*/}
      <g fill="#151820" strokeWidth="0">
        <path ref={addRef} id="darkTopRight1" d="M0 100 H1000V25z" opacity=".5" />
        <path ref={addRef} id="darkTopRight2" d="M0 100 H1000V45z" opacity=".1" />
        <path ref={addRef} id="darkTopRight3" d="M0 100 H1000V70z" opacity=".3" />

        <path ref={addRef} id="darkTopLeft1" d="M1000 100 H0V25z" opacity=".5" />
        <path ref={addRef} id="darkTopLeft2" d="M1000 100 H0V45z" opacity=".1" />
        <path ref={addRef} id="darkTopLeft3" d="M1000 100 H0V70z" opacity=".3" />
      </g>
    </svg>
  );
};

export default SmokePageDivider;
