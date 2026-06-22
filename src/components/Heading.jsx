import React from 'react';

const Heading = (props) => {
  const {
    level,
    children,
    className = '',
  } = props;

  const Tag = `h${level}`;
  const headingClass = `heading-${level} ${className}`;

  return <Tag className={headingClass}>{children}</Tag>;
};

export default Heading;
