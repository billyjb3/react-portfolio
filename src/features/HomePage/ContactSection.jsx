import React, { useState, useEffect, useRef } from 'react';
import {
  Form,
  FormIntegratedLabelTextInput,
  FormSubmitButton,
  IconLoadingCircles,
  useBreakpoints,
} from '@billyjb3/global-react';
import { Heading, ContentContainer } from '../../components';
import { IconGmail, IconLinkedin, IconGithub } from '../../components/icons';
import { messageFormConfig } from '../../utils';
import { contactId } from './navConfig';
import useMailer from '../../services/useMailer';
import { useHomeContext } from './homeContext';
import { EMAIL_URL, LINKEDIN_URL, GITHUB_URL } from '../../constants';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const clearFormRef = useRef(null);
  const [formMessage, setFormMessage] = useState('');
  const {
    sectionScroller: {
      registerScrollable,
    },
  } = useHomeContext();
  const {
    isLoading,
    error,
    isDone,
    sendMessage,
  } = useMailer();
  const { isLarge, isMedium } = useBreakpoints();
  const isMediumUp = isLarge || isMedium;

  useEffect(() => {
    if (sectionRef.current) registerScrollable(sectionRef, contactId);
  }, [sectionRef.current]);

  useEffect(() => {
    if (!isLoading && isDone) {
      if (error) {
        setFormMessage('Message failed to send. Please try again later.');
      } else {
        setFormMessage(`Message was sent successfully! I'll get back to you as soon as I can.`);
        clearFormRef.current?.();
      }
    }
  }, [isLoading, isDone, error]);

  const handleSubmit = (formData) => {
    sendMessage(formData);
  };

  return (
    <ContentContainer className="sectionContainer pad-4-tb pad-3-lr">
      <div
        ref={sectionRef}
        className="content-container margin-auto-lr pad-4-tb"
      >
        <Heading
          level={2}
          className="pad-1-b margin-3-b border-b-1 border-fade-r uppercase"
        >
          Contact
        </Heading>
        <div className="row">
          <div className="col-8-md-up pad-3-r-md-up">
            <Heading
              level={3}
              className="body font-weight-6 condensed uppercase color-text-accent"
            >
              message me
            </Heading>
            <div className="pad-2-tb">
              Feel free to reach out about anything, thoughts, suggestions, questions. I'm also open to doing any freelance work if you think I would be a good choice for a project you need done, lets talk!
            </div>
            <div className="pad-3-b">
              Fill out the form below, or email me directly at <span className="color-text-accent">{EMAIL_URL}</span> and I'll get back to you as soon as I can.
            </div>
            <Form
              onSubmit={handleSubmit}
              className=""
              clearRef={clearFormRef}
            >
              <div className="">
                {messageFormConfig.map((config) => (
                  <FormIntegratedLabelTextInput {...config} />
                ))}
              </div>
              <div className={`pad-3-tb border-t-1 border-fade-r ${isMediumUp ? 'flex flex-justify-between flex-align-center' : ''}`}>
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

          <div className="col-4-md-up pad-3-l-md-up">
            <Heading
              level={3}
              className="body font-weight-6 condensed uppercase color-text-accent"
            >
              links
            </Heading>
            <div className="pad-3-tb">
              <a href={`mailto:${EMAIL_URL}`} className="flex flex-align-center">
                <IconGmail className="flex-shrink-none" aria-hidden="true" />
                <span className="pad-3-l">Gmail</span>
              </a>
            </div>

            <div className="pad-3-b">
              <a
                href={LINKEDIN_URL}
                className="flex flex-align-center"
                target="_blank"
              >
                <IconLinkedin className="flex-shrink-none" aria-hidden="true" />
                <span className="pad-3-l">Linkedin</span>
              </a>
            </div>

            <div className="pad-3-b">
              <a
                href={GITHUB_URL}
                className="flex flex-align-center"
                target="_blank"
              >
                <IconGithub className="flex-shrink-none" aria-hidden="true" />
                <span className="pad-3-l">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  )
};

export default ContactSection;
