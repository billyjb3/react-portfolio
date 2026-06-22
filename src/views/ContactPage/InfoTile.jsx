import React from 'react';
import Heading from '../../components/Heading';

const InfoTile = () => {
  return (
    <div className="col-4-md-up pad-3-l">
      <Heading
        level={2}
        className="pad-1-b margin-3-b border-b border-fade-r"
      >
        Info
      </Heading>
      <div className="body body-bold">Location</div>
      <div className="pad-3-b">Statesboro, GA</div>
      <div className="pad-3-b">
        <div className="body-bold">Email</div>
        <a href="mailto:billyjbrewer3@gmail.com">
          billyjbrewer3@gmail.com
        </a>
      </div>
      <div className="body-bold">Links</div>
      <a href="https://www.linkedin.com/in/billyjbrewer3/">LinkedIn</a>
    </div>
  );
};

export default InfoTile;
