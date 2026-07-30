import React from 'react';
import { Heading } from '../../components';
import {
  Form,
  FormIntegratedLabelTextInput,
  FormSubmitButton,
  SpinnerOverlay,
} from '@billyjb3/global-react';
import { messageFormConfig } from '../../utils';

const MessageFormTile = () => {
  return (
    <div className="col-8-md-up pad-3-r">
      <SpinnerOverlay>
        <Heading
          level={2}
          className="pad-1-b margin-3-b border-b border-fade-r"
        >
          Contact
        </Heading>
        <div className="pad-2-b">
          Feel free to reach out about anything, thoughts, suggestions, questions. I'm also open to doing any freelance work if you think I would be a good choice for a project you need done, lets talk!
        </div>
        <div className="pad-3-b">
          Fill out the form below, or email me directly and I'll get back to you as soon as I can.
        </div>
        <Form className="row">
          <div className="col-8-md-up">
            {messageFormConfig.map((config) => (
              <FormIntegratedLabelTextInput {...config} />
            ))}
          </div>
          <div className="pad-3-tb border-t border-fade-r">
            <FormSubmitButton className="">
              Submit
            </FormSubmitButton>
          </div>
        </Form>
      </SpinnerOverlay>
    </div>
  );
};

export default MessageFormTile;


