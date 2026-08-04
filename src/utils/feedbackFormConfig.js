import { requiredCheck } from '@billyjb3/global-react';
import {
  container,
  input,
  label,
  activeLabel,
  error,
} from './formComponentStyles';

export const feedbackFormConfig = [
  {
    id: 'feedbackInput',
    requestKey: 'feedbackMessage',
    label: 'Feedback *',
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
