import React from 'react';

const TechCard = (props) => {
  const {
    Icon,
    label,
    className,
  } = props;

  return (
    <div className={`techCard text-align-center display-inline-block body-bold body-small uppercase pad-3`}>
      <Icon />
      <div className="pad-1-t">
        {label}
      </div>
    </div>
  );
};

export default TechCard;
