import React from 'react';

const ContentContainer = (props) => {
  const {
    children,
    className = '',
    contentClassName = '',
  } = props;

  return (
    <div className={`position-relative ${className}`}>
      <div className="position-absolute-tl width-full height-full contentContainerBg" />
      <div className={`z-top position-relative ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
