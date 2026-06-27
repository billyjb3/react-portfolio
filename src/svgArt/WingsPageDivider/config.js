
const getRandomStart = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getFrames = (isLeft, min, max) => {
  const start = getRandomStart(min, max);
  const baseDraw = isLeft ? 'M1000 100 H0V' : 'M0 100 H1000V';
  return [
    { d: `path("${baseDraw}${start}z")`, easing: 'linear' },
    { d: `path("${baseDraw}${max}z")`, easing: 'ease-in-out' },
    { d: `path("${baseDraw}${min}z")`, easing: 'ease-in-out' },
    { d: `path("${baseDraw}${start}z")`, easing: 'linear' },
  ]
};

const minTime = 5000;
const maxTime = 10000;
const getRandomTime = () => Math.floor(Math.random() * (maxTime - minTime)) + minTime;

const animap = {
  lightTopRight1: {
    frames: getFrames(false, 0, 10),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
  lightTopRight2: {
    frames: getFrames(false, 10, 20),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
  lightTopLeft1: {
    frames: getFrames(true, 0, 10),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
  lightTopLeft2: {
    frames: getFrames(true, 10, 20),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
  darkTopRight1: {
    frames: getFrames(false, 25, 35),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
  darkTopRight2: {
    frames: getFrames(false, 45, 55),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
  darkTopRight3: {
    frames: getFrames(false, 70, 80),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
  darkTopLeft1: {
    frames: getFrames(true, 25, 35),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
  darkTopLeft2: {
    frames: getFrames(true, 45, 55),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
  darkTopLeft3: {
    frames: getFrames(true, 70, 80),
    options: {
      duration: getRandomTime(),
      iterations: Infinity,
      // easing: 'ease-in-out'
    },
  },
}

export default animap;
