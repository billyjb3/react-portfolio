import { getBoundedValue } from './utils';
import Grid from './Grid';

export const getProps = () => ({
  gridSpacing: {
    value: 20,
    default: 20,
    min: 10,
    max: 100,
    input: 'incrementNumber',
    label: 'Grid Spacing',
  },
  waveSpeed: {
    value: 1,
    default: 1,
    min: .1,
    max: 5,
    input: 'incrementNumber',
    label: 'Wave Speed',
  },
  waveWidth: {
    value: 240,
    default: 240,
    min: 20,
    max: 600,
    input: 'incrementNumber',
    label: 'Wave Width',
  },
  waveHeight: {
    value: 10,
    default: 10,
    min: 20,
    max: 300,
    input: 'incrementNumber',
    label: 'Wave Height',
  },
  waveSpacing: {
    value: 80,
    default: 80,
    min: 5,
    max: 200,
    input: 'incrementNumber',
    label: 'Wave Spacing',
  },
  gridDotColor: {
    value: '#303030',
    default: '#303030',
    input: 'colorPicker',
    label: 'Grid Dot Color',
  },
});

export const getState = () => ({
  id: 'particleWavesState',
  label: 'Particle Waves',
  renderClass: ParticleWaves,
  getProps,
  props: getProps(),
  isActive: true,
});

export class ParticleWaves {
  constructor(canvas) {
    this.props = getProps();
    this.canvas = canvas;
    this.init();
  }

  init() {
    const {
      gridSpacing,
      waveWidth,
      waveHeight,
      waveSpacing,
      waveSpeed,
    } = this.props;
    this.waves = [];

    const boundedSpacing = getBoundedValue(gridSpacing);
    this.waveWidth = getBoundedValue(waveWidth);
    this.waveHeight = getBoundedValue(waveHeight);
    this.waveSpacing = getBoundedValue(waveSpacing);
    this.waveSpeed = getBoundedValue(waveSpeed);

    const cw = this.canvas.width;
    const ch = this.canvas.height;
    const width = Math.floor(cw / boundedSpacing);
    const height = Math.floor(ch / boundedSpacing);
    this.grid = new Grid({ width, height, spacing: boundedSpacing });

    this.maxWaveY = ch + cw + this.waveHeight; // TODO: base on wave slope value
    const totalHeight = this.waveWidth + this.waveSpacing;
    this.waveCap = Math.ceil(this.maxWaveY / (totalHeight));
    for (let i = this.waveCap - 1; i >= 0; i--) {
      this.waves.push({ b: totalHeight * i });
    }
    window.waves = this.waves;
  }

  render(context) {
    const { gridDotColor: { value: gridDotColor } } = this.props;
    const waveSlope = -1; // TODO: wave slope to be a prop setting

    this.grid.coords.forEach(({ x, y }) => {
      let drawY = y;
      this.waves.forEach(({ b }) => {
        const xfront = (y - b) / waveSlope;
        const xback = xfront - this.waveWidth;
        const yfront = waveSlope * x + b;
        const yback = yfront + waveSlope * this.waveWidth;
        const isInWave = x >= xback && x <= xfront;

        if (isInWave) {
          const xw = xfront - x;
          const xww = Math.abs(xw - (this.waveWidth / 2));
          const m = this.waveHeight / (this.waveWidth / 2);
          drawY -= xww * -m + this.waveHeight;
        }
      });
      context.beginPath();
      context.arc(x, drawY, 1, 0, Math.PI * 2);
      context.fillStyle = gridDotColor;
      context.fill();
    });

    this.waves.forEach((wave) => {
      wave.b += this.waveSpeed;
    });

    const lastB = this.waves[this.waves.length - 1].b;
    if (lastB > this.waveWidth + this.waveSpacing) {
      this.waves.splice(0, 1);
      this.waves.push({ b: 0 });
    }
  }

  changeProps(props) {
    this.props = props;
    this.init();
  }

  toggleAnimations(showAnimations) {
    this.showAnimations = showAnimations;
  }
}