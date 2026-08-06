import React, { useEffect, useRef } from 'react';
import {
  Form,
  FormIntegratedLabelTextInput,
  FormSubmitButton,
} from '@billyjb3/global-react';
import { Heading, ContentContainer } from '../../components';
import { IconGmail, IconLinkedin, IconGithub } from '../../icons';
import { messageFormConfig } from '../../utils';
import { contactId } from './navConfig';
import useMailer from '../../services/useMailer';
import { useHomeContext } from './homeContext';

const ContactSection = (props) => {
  const sectionRef = useRef(null);
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

  useEffect(() => {
    if (sectionRef.current) registerScrollable(sectionRef, contactId);
  }, [sectionRef.current]);

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
              Fill out the form below, or email me directly and I'll get back to you as soon as I can.
            </div>
            <Form
              onSubmit={handleSubmit}
              className="row"
            >
              <div className="col-8-lg">
                {messageFormConfig.map((config) => (
                  <FormIntegratedLabelTextInput {...config} />
                ))}
              </div>
              <div className="pad-3-tb border-t-1 border-fade-r">
                <FormSubmitButton className="button-primary body-bold">
                  Submit
                </FormSubmitButton>
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
              <a href="mailto:billyjbrewer3@gmail.com" className="flex flex-align-center">
                <IconGmail className="flex-shrink-none" aria-hidden="true" />
                <span className="pad-3-l">billyjbrewer3@gmail.com</span>
              </a>
            </div>

            <div className="pad-3-b">
              <a
                href="https://www.linkedin.com/in/billyjbrewer3"
                className="flex flex-align-center"
                target="_blank"
              >
                <IconLinkedin className="flex-shrink-none" aria-hidden="true" />
                <span className="pad-3-l">https://www.linkedin.com/in/billyjbrewer3</span>
              </a>
            </div>

            <div className="pad-3-b">
              <a
                href="https://github.com/billyjb3"
                className="flex flex-align-center"
                target="_blank"
              >
                <IconGithub className="flex-shrink-none" aria-hidden="true" />
                <span className="pad-3-l">https://github.com/billyjb3</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  )
};

export default ContactSection;
