import React from 'react';

// TODO: make it look like rain drops. have ellipses that start from a point and expand (indefinitely?) and increase opacity each frame, reset once 0 if possible?
const PuddlePageDivider = () => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      style={{
        width: '100%',
        height: '200px',
        display: 'block',
      }}
      preserveAspectRatio="none"
    >
      <g fill="#b0c0e0" strokeWidth="0">
        <path d="M500 50 A2 1 1 0 1 550 50" />
        {/*<path d="M500 50 A500 50 0 0 1 0 0" />*/}
        {/*<path d="M500 50 A500 50 0 1 1 0 0" />*/}
        {/*<path d="M500 50 A500 50 0 0 0 0 0" />*/}
      </g>
    </svg>
  );
};

export default PuddlePageDivider;
