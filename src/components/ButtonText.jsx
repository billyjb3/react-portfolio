import React from 'react';

const ButtonText = (props) => {
  const {
    onClick,
    className = '',
    children,
  } = props;

  return (
    <button onClick={onClick} className={`buttonText ${className}`}>
      {children}
    </button>
  );
};

export default ButtonText;
