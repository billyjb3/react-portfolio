import { requiredCheck } from '@billyjb3/global-react';

const container = 'pad-3-b';
const input = 'border-1 border-radius-md color-text-primary barlow body-small body-bold condensed';
const label = 'body-small color-text-accent';
const activeLabel = 'color-bg-primary sub-text color-text-accent';
const error = 'color-bg-primary color-text-error sub-text';

export const messageFormConfig = [
  {
    id: 'nameInput',
    requestKey: 'name',
    label: 'Name *',
    isRequired: true,
    containerClass: `${container}`,
    inputClass: `${input}`,
    labelClass: `${label}`,
    activeLabelClass: `${activeLabel}`,
    errorClass: `${error}`,
    validations: [requiredCheck],
  },
  {
    id: 'emailInput',
    requestKey: 'email',
    label: 'Email *',
    isRequired: true,
    containerClass: `${container}`,
    inputClass: `${input}`,
    labelClass: `${label}`,
    activeLabelClass: `${activeLabel}`,
    errorClass: `${error}`,
    validations: [requiredCheck],
  },
  {
    id: 'messageInput',
    requestKey: 'message',
    label: 'Message *',
    isRequired: true,
    isTextArea: true,
    containerClass: `${container}`,
    inputClass: `${input}`,
    labelClass: `${label}`,
    activeLabelClass: `${activeLabel}`,
    errorClass: `${error}`,
    validations: [requiredCheck],
  },
];
