import React from 'react';

const ContentContainer = (props) => {
  const {
    children,
    className = '',
    backgroundClassName = '',
    contentClassName = '',
  } = props;

  return (
    <div className={`position-relative ${className}`}>
      <div className={`position-absolute-tl width-full height-full contentContainerBg ${backgroundClassName}`} />
      <div className={`z-top position-relative ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
