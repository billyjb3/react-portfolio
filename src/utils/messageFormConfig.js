import { requiredCheck } from '@billyjb3/global-react';
import {
  container,
  input,
  label,
  activeLabel,
  error,
} from './formComponentStyles';

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
