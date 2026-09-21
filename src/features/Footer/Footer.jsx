import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal';
import { ButtonText, ButtonPrimary } from '../../components';
import { EMAIL_URL, RESUME_URL } from '../../constants';
import { useBreakpoints } from '@billyjb3/global-react';

const Footer = (props) => {
  const {
    className = '',
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSmall, isExtraSmall } = useBreakpoints();
  const isSmallDown = isSmall || isExtraSmall;

  return (
    <div className={`position-relative pad-3-tb color-bg-surface border-t-1 border-fade-lr ${className}`}>
      <div className="pad-2-lr">
        <div className={`content-container margin-auto-lr`}>
          <div className="pad-3-b flex flex-justify-center">
            <ButtonText
              onClick={() => setIsModalOpen(true)}
              className="color-text-accent pad-2 body-bold underline"
            >
              Leave Your Feedback!
            </ButtonText>
          </div>
          {isSmallDown ? (
            <div className="text-align-center pad-3-t border-t-1 border-fade-lr">
              <div className="sans-serif body body-spaced italic font-weight-8">
                <span>Billy </span><span className="color-text-accent">Brewer</span>
              </div>
              <div className="body-small">Crafting polished, responsive, and accessible front-end experiences.</div>
              <ButtonText className="color-text-accent pad-1-tb body-bold underline">Resume</ButtonText>
              <div className="pad-2-t body-small">{EMAIL_URL}</div>
              <div className="body-small">Statesboro, GA</div>
              <div className="pad-3-t body-small condensed">Made with React · JavaScript · Sass · Vite</div>
              <div className="body-small condensed">© 2026 Billy Brewer. All rights reserved.</div>
            </div>
          ) : (
            <>
              <div className="flex flex-justify-between pad-3-t border-t-1 border-fade-lr">
                <div>
                  <div className="sans-serif body body-spaced italic font-weight-8">
                    <span>Billy </span><span className="color-text-accent">Brewer</span>
                  </div>
                  <div className="body-small">Crafting polished, responsive, and accessible front-end experiences.</div>
                  <ButtonText className="color-text-accent pad-1-tb body-bold underline">Resume</ButtonText>
                </div>
                <div className="body-small text-align-right">
                  <div className="pad-1-b">{EMAIL_URL}</div>
                  <div>Statesboro, GA</div>
                </div>
              </div>
              <div className="flex flex-justify-between pad-3-t body-small condensed">
                <span>
                  © 2026 Billy Brewer. All rights reserved.
                </span>
                <span>
                  Made with React · JavaScript · Sass · Vite
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      {isModalOpen && (
        <FeedbackModal setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default Footer;
