import React, { useEffect, useRef } from 'react';

const vbw = 1000;
const vbh = 100;
const CityPageDivider = () => {
  const heightMap = useRef([]);

  const getBoundedRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const layer1 = {
    fill: '',
    opacity: '',
    minWidth: 15,
    maxWidth: 45,
    minHeight: 15,
    maxHeight: 35,
    minSpacing: 3,
    maxSpacing: 20,
    minSpaceHeight: 5,
    maxSpaceHeight: 14,
    roofPatters: [
      {
        type: 'slant',
        probability: 0.1,
        direction: 'left',
        height: '',
      },
    ]
  };

  const layer2 = {
    fill: '',
    opacity: '',
    minWidth: 20,
    maxWidth: 40,
    minHeight: 40,
    maxHeight: 50,
    minSpacing: 5,
    maxSpacing: 20,
    minSpaceHeight: 20,
    maxSpaceHeight: 30,
    roofPatters: [
      {
        type: 'slant',
        probability: 0.1,
        direction: 'left',
        height: '',
      },
    ]
  };

  const layer3 = {
    fill: '',
    opacity: '',
    minWidth: 10,
    maxWidth: 25,
    minHeight: 60,
    maxHeight: 100,
    minSpacing: 30,
    maxSpacing: 60,
    minSpaceHeight: 5,
    maxSpaceHeight: 14,
    roofPatters: [
      {
        type: 'slant',
        probability: 0.1,
        direction: 'left',
        height: '',
      },
    ]
  };

  const init = () => {

  };

  const getLayer = (config) => {
    let layer = '';
    let currentX = 0;

    const sh = getBoundedRandom(config.minSpaceHeight, config.maxSpaceHeight);
    const sw = getBoundedRandom(config.minSpacing, config.maxSpacing);
    layer += `M0 ${vbh} v-${sh} h${sw}`;
    currentX += sw;
    while (currentX < vbw) {
      const w = getBoundedRandom(config.minWidth, config.maxWidth);
      const h = getBoundedRandom(config.minHeight, config.maxHeight);
      const sw = getBoundedRandom(config.minSpacing, config.maxSpacing);
      const sh = getBoundedRandom(config.minSpaceHeight, config.maxSpaceHeight);
      const tw = w + sw;
      if (currentX + w > vbw) {
        layer += ` v-${h} H${vbw}`;
      } else if (currentX + tw > vbw) {
        layer += ` v-${h} h${w} V${vbh - sh} H${vbw}`;
      } else {
        layer += ` v-${h} h${w} V${vbh - sh} h${sw}`;
      }
      currentX += tw;
    }
    layer += ` V${vbh}z`;
    return layer;
  };

  const getFrontLayer = () => {
    let layer = '';
    let currentX = 0;

    const sh = getBoundedRandom(layer1.minSpaceHeight, layer1.maxSpaceHeight);
    const sw = getBoundedRandom(layer1.minSpacing, layer1.maxSpacing);
    layer += `M0 ${vbh} v-${sh} h${sw}`;
    currentX += sw;
    while (currentX < vbw) {
      const w = getBoundedRandom(layer1.minWidth, layer1.maxWidth);
      const h = getBoundedRandom(layer1.minHeight, layer1.maxHeight);
      const sw = getBoundedRandom(layer1.minSpacing, layer1.maxSpacing);
      const sh = getBoundedRandom(layer1.minSpaceHeight, layer1.maxSpaceHeight);
      const tw = w + sw;
      if (currentX + w > vbw) {
        layer += ` v-${h} H${vbw}`;
      } else if (currentX + tw > vbw) {
        layer += ` v-${h} h${w} V${vbh - sh} H${vbw}`;
      } else {
        layer += ` v-${h} h${w} V${vbh - sh} h${sw}`;
      }
      currentX += tw;
    }
    layer += ` V${vbh}z`;
    return layer;
  }

  useEffect(() => {

  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${vbw} ${vbh}`}
      style={{
        width: '100%',
        maxHeight: '200px',
        display: 'block',
      }}
      preserveAspectRatio="none"
      aria-hidden={true}
    >
      {/*<path*/}
      {/*  opacity=".35"*/}
      {/*  stroke="none"*/}
      {/*  fill="#303245"*/}
      {/*  d="M60 100*/}
      {/*  V20 h20 V100z*/}
      {/*  "*/}
      {/*/>*/}
      {/*<path*/}
      {/*  opacity=".65"*/}
      {/*  stroke="none"*/}
      {/*  fill="#202536"*/}
      {/*  d="M0 85*/}
      {/*  h40 V50 h25 V80*/}
      {/*  H1000V100H0z*/}
      {/*  "*/}
      {/*/>*/}
      <path
        opacity=".35"
        stroke="none"
        fill="#303245"
        d={getLayer(layer3)}
      />
      <path
        opacity=".65"
        stroke="none"
        fill="#202536"
        d={getLayer(layer2)}
      />
      <path
        // opacity=".85"
        stroke="none"
        fill="#161923"
        // d="M0 100
        // h20 V70 h35 V95
        // h5 V65 h40 V85
        // h8 V75 h28 V90
        // H1000V100H0z"
        d={getFrontLayer()}
      />
    </svg>
  );
};

export default CityPageDivider;
