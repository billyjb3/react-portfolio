import React from 'react';
import { Heading } from '../../components';

const AboutSection = () => {
  return (
    <div>
      <Heading
        level={2}
        className="pad-1-b margin-3-b border-b border-fade-r"
      >
        About
      </Heading>
      <div>
        Hey, I'm Billy,
      </div>
    </div>
  );
};

export default AboutSection;
