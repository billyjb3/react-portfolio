import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal';
import { ButtonText } from '../../components';

const Footer = (props) => {
  const {
    className = '',
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`position-relative pad-3 color-bg-surface border-t-1 border-fade-lr flex flex-justify-center ${className}`}>
      <ButtonText
        onClick={() => setIsModalOpen(true)}
        className="color-text-accent pad-2 body-bold underline"
      >
        Leave Your Feedback!
      </ButtonText>
      {isModalOpen && (
        <FeedbackModal setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default Footer;
