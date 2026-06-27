import React from 'react';

const ButtonPrimary = (props) => {
  const {
    onClick,
    className = '',
    children,
  } = props;

  return (
    <button
      onClick={onClick}
      className={`buttonPrimary color-text-primary pad-2 border-1 border-radius-md barlow body-small body-bold color-bg-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
