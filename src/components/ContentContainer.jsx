import React from 'react';

const ContentContainer = (props) => {
  const {
    children,
    className = '',
  } = props;

  return (
    <div className={`position-relative ${className}`}>
      <div className="position-absolute-tl width-full height-full contentContainerBg" />
      <div className="top-z position-relative">
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
