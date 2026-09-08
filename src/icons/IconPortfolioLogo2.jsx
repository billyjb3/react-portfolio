import React from 'react';

const IconPortfolioLogo2 = (props) => {
  const {
    size,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      // fontSize="190"
      // fontSize="120"
      fontStyle="italic"
      opacity=".8"
      {...rest}
    >
      <text
        stroke="#fff"
        fill="#b0c0e0"
        strokeWidth="2"
        // strokeWidth="1"
        // x="75"
        // y="195"
        x="55"
        y="185"
        // fontWeight="600"
        fontSize="170"
      >
        B
      </text>
      <text
        stroke="#fff"
        fill="#163462"
        strokeWidth="2"
        // strokeWidth="1"
        // x="10"
        y="140"
        // fontWeight="700"
        // textLength="80"
        fontSize="190"
      >
        B
      </text>
    </svg>
  );
};

export default IconPortfolioLogo2;
