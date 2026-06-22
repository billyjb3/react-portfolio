import { requiredCheck } from '@billyjb3/global-react';

const config = [
  {
    id: 'nameInput',
    requestKey: 'name',
    label: 'Name *',
    isRequired: true,
    containerClass: 'pad-3-b',
    inputClass: 'border-1 border-radius-sm color-text-primary barlow body-small color-text-focus body-bold',
    labelClass: 'body-small',
    activeLabelClass: 'color-bg-primary sub-text',
    errorClass: 'color-bg-primary color-text-error sub-text',
    validations: [requiredCheck],
  },
  {
    id: 'emailInput',
    requestKey: 'email',
    label: 'Email *',
    isRequired: true,
    containerClass: 'pad-3-b',
    inputClass: 'border-1 border-radius-sm color-text-primary barlow body-small color-text-primary body-bold',
    labelClass: 'body-small',
    activeLabelClass: 'color-bg-primary sub-text',
    errorClass: 'color-bg-primary color-text-error sub-text',
    validations: [requiredCheck],
  },
  {
    id: 'messageInput',
    requestKey: 'message',
    label: 'Message *',
    isRequired: true,
    isTextArea: true,
    containerClass: 'pad-3-b',
    inputClass: 'border-1 border-radius-sm color-text-primary barlow body-small color-text-focus body-bold',
    labelClass: 'body-small',
    activeLabelClass: 'color-bg-primary sub-text',
    errorClass: 'color-bg-primary color-text-error sub-text',
    validations: [requiredCheck],
  },
];

export default config;
