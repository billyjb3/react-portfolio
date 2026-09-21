import React, { useState } from 'react';
import { ButtonIcon } from '@billyjb3/global-react';

const ButtonIconHoverLabeled = (props) => {
  const {
    label,
    children,
    ...rest
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="display-inline-block position-relative">
      <ButtonIcon
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        {...rest}
      >
        {children}
      </ButtonIcon>
      {isHovered && (
        <div className="position-absolute-b body-small condensed color-text-accent width-full text-align-center">
          {label}
        </div>
      )}
    </div>
  );
};

export default ButtonIconHoverLabeled;
