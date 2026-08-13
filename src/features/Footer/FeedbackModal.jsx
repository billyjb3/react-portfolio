import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  ButtonIcon,
  IconClose,
  Form,
  FormIntegratedLabelTextInput,
  FormSubmitButton,
  useBreakpoints, IconLoadingCircles,
} from '@billyjb3/global-react';
import { feedbackFormConfig } from '../../utils';
import useMailer from '../../services/useMailer';

const FeedbackModal = (props) => {
  const {
    setIsModalOpen,
  } = props;
  const clearFormRef = useRef(null);
  const [formMessage, setFormMessage] = useState('');
  const {
    isLoading,
    error,
    isDone,
    sendMessage,
  } = useMailer();
  const { isLarge, isMedium } = useBreakpoints();
  const isMediumUp = isLarge || isMedium;

  useEffect(() => {
    if (!isLoading && isDone) {
      if (error) {
        setFormMessage('Message failed to send. Please try again later.');
      } else {
        setFormMessage('Message was sent successfully! Thanks for your feedback.');
        clearFormRef.current?.();
      }
    }
  }, [isLoading, error, isDone])

  const handleSubmit = (data) => {
    sendMessage(data);
  };

  return (
    <Modal
      onClose={() => setIsModalOpen(false)}
      className="color-text-primary color-border-primary"
    >
      <div className="color-bg-primary border-radius-lg border-1 overflow-hidden">
        <div className="flex flex-justify-between flex-align-center pad-3-lr pad-2-tb border-b-1 color-bg-surface">
          <h1 className="heading-3 uppercase">Feedback</h1>
          <ButtonIcon onClick={() => setIsModalOpen(false)}>
            <IconClose />
          </ButtonIcon>
        </div>

        <div className="pad-3-lr pad-3-tb">
          <div className="pad-3-b">
            Feedback is important to help me acquire other points of view and to get an idea of what I'm doing well or what I need to improve. Use the form below to leave any feedback you may have. Feedback submissions are completely anonymous and all feedback is welcome, so feel free to be honest!
          </div>
          <Form onSubmit={handleSubmit} clearRef={clearFormRef}>
            {feedbackFormConfig.map((config) => (
              <FormIntegratedLabelTextInput {...config} />
            ))}
            <div className={`pad-3-t border-t-1 border-fade-r ${isMediumUp ? 'flex flex-justify-between flex-align-center' : ''}`}>
              <FormSubmitButton
                className={`button-primary body-bold ${isLoading ? 'disabled' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <IconLoadingCircles className="spin" />
                ) : 'Submit'}
              </FormSubmitButton>
              {formMessage && error && (
                <div className="pad-3-l-md-up pad-3-t-sm-down color-text-error">{formMessage}</div>
              )}
              {formMessage && !error && (
                <div className="pad-3-l-md-up pad-3-t-sm-down color-text-success">{formMessage}</div>
              )}
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default FeedbackModal;
