import React from 'react';

const GlassContainer = (props) => {
  const {
    children,
    className = '',
    backdropClass = '',
    childClass = '',
  } = props;

  return (
    <div className={`position-relative glassContainer ${className}`}>
      <div className={`glassBackground position-absolute-tl width-full height-full border-radius-lg box-shadow-card ${backdropClass}`} />
      <div className={`top-z position-relative ${childClass}`}>
        {children}
      </div>
    </div>
  );
};

export default GlassContainer;

