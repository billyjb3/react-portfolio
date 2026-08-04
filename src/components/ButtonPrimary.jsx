import React from 'react';

const ButtonPrimary = (props) => {
  const {
    onClick,
    isLink,
    href,
    className = '',
    children,
  } = props;

  const buttonClass = `buttonPrimary pad-2 border-1 border-radius-md barlow body-small body-bold uppercase condensed ${className}`;
  return isLink ? (
    <a
      href={href}
      className={buttonClass}
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
