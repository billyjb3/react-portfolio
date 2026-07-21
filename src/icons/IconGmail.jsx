import React from 'react';

const IconGmail = (props) => {
  const {
    size = '36px',
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gmail"
      role="img"
      viewBox="0 0 512.00 512.00"
      fill="#000000"
      style={{ width: size }}
      {...rest}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <rect width="512" height="512" rx="15%" fill="#000000"/>
        <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"/>
        <path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"/>
        <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"/>
        <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"/>
        <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"/>
      </g>
    </svg>
  );
};

export default IconGmail;
