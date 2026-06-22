import React from 'react';

const ContentContainer = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="content-container margin-auto-lr position-relative pad-3-tb pad-3-lr-md-up pad-2-lr-sm-down">
      <div className="position-absolute-tl width-full height-full contentContainerBg" />
      <div className="top-z position-relative">
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
