import React from 'react';
import MessageFormTile from './MessageFormTile';
import InfoTile from './InfoTile';
import { ContentContainer } from '../../components';

const ContactPage = () => {
  return (
    <ContentContainer>
      <div className="row">
        <MessageFormTile />
        <InfoTile />
      </div>
    </ContentContainer>
  );
};

export default ContactPage;
