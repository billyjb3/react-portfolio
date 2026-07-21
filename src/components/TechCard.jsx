import React from 'react';
import { useBreakpoints } from '@billyjb3/global-react';

const TechCard = (props) => {
  const {
    Icon,
    label,
    className,
  } = props;
  const { isSmall, isExtraSmall } = useBreakpoints();
  const isSmallDown = isSmall || isExtraSmall;

  const pad = isSmallDown ? 'pad-2' : 'pad-3';
  const size = isSmallDown ? '24px' : '48px';
  return (
    <div className={`techCard text-align-center display-inline-block ${pad}`}>
      <Icon size={size} />
      <div className={`pad-1-t body-bold uppercase ${isSmallDown ? 'sub-text' : 'body-small'}`}>
        {label}
      </div>
    </div>
  );
};

export default TechCard;
