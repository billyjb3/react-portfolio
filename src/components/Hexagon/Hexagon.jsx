import React from 'react';
import './styles.scss';

const Hexagon = (props) => {
  const {
    size = 400,
    backgroundColor = '#000',
    borderColor = '#fff',
    borderSize = 1,
  } = props;

  const ratio = Math.cos(Math.PI / 6);
  const height = size / ratio;
  const borderWidth = size - (borderSize * 2);
  const borderHeight = borderWidth / ratio;
  const top = (height - borderHeight) / 2;

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${height}px`,
        backgroundColor: borderColor,
      }}
      className="position-relative hexShape"
    >
      <div
        style={{
          width: `${borderWidth}px`,
          height: `${borderHeight}px`,
          backgroundColor,
          top: `${top}px`,
          left: `${borderSize}px`,
        }}
        className="position-absolute hexShape"
      />
    </div>
  );
};

export default Hexagon;
