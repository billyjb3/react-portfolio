import React from 'react';

const ContentContainer = (props) => {
  const {
    children,
    className = '',
    contentClassName = '',
  } = props;

  return (
    <div className={`position-relative bottom-z ${className}`}>
      <div className="position-absolute-tl width-full height-full contentContainerBg" />
      <div className={`top-z position-relative ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
