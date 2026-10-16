import Grid from './Grid';
import { getBoundedValue } from './utils';

// TODO: add diagonal moves..
// TODO: implement a 4-8 way arrow Icon box for direction choices.
export const getProps = () => ({

  directions: {
    value: [3],
    default: [3],
    input: 'checkbox',
    labelValueMap: {
      'Right': 0,
      'Up': 1,
      'Left': 2,
      'Down': 3,
    },
    label: 'Particle Directions',
  }, // all, left, right, up, down
  minSpeed: {
    value: .5,
    default: .5,
    min: .1,
    max: 5,
    input: 'incrementNumber',
    label: 'Minimum Particle Speed',
  },
  maxSpeed: {
    value: 2,
    default: 2,
    min: .1,
    max: 5,
    input: 'incrementNumber',
    label: 'Maximum Particle Speed',
  },
  maxParticles: {
    value: .01,
    default: .01,
    min: .005,
    max: .1,
    input: 'percentage',
    label: 'Max Particles (% of grid points)',
  }, // % of grid.coords.length
  particleColor: {
    value: '#606080',
    default: '#606080',
    input: 'colorPicker',
    label: 'Particle Color',
  },
  drawGridDots: {
    value: false,
    default: false,
    input: 'switch',
    label: 'Draw Grid Dots',
  },
  spacing: {
    value: 25,
    default: 25,
    min: 10,
    max: 100,
    input: 'incrementNumber',
    label: 'Grid Spacing',
  },
  gridDotColor: {
    value: '#202030',
    default: '#202030',
    input: 'colorPicker',
    label: 'Grid Dot Color',
  },
});

export const getState = () => ({
  id: 'movingParticlesState',
  label: 'Traveling Grid Particles',
  renderClass: MovingParticles,
  getProps,
  props: getProps(),
  isActive: true,
});

export class MovingParticles {
  constructor(canvas) {
    this.props = getProps();
    this.canvas = canvas;
    this.showAnimations = true;
    this.init();
  }

  getParticle(onEdge = false) {
    const {
      directions,
      minSpeed,
      maxSpeed,
    } = this.props;
    const { x, y } = this.grid.getRandom();

    const boundedMin = getBoundedValue(minSpeed);
    const boundedMax = getBoundedValue(maxSpeed);
    const speed = Math.random() * (boundedMax - boundedMin) + boundedMin;
    const particle = { x, y };

    let dir;
    if (directions.value.length === 1) dir = directions.value[0];
    else {
      while (dir === undefined) {
        const thisDir = Math.floor(Math.random() * 4);
        if (directions.value.includes(thisDir)) dir = thisDir;
      }
    }

    if (dir === 0) {
      particle.dx = speed;
      particle.dy = 0;
      if (onEdge) particle.x = 0;
    } else if (dir === 1) {
      particle.dx = 0;
      particle.dy = -speed;
      if (onEdge) particle.y = this.canvas.height;
    } else if (dir === 2) {
      particle.dx = -speed;
      particle.dy = 0;
      if (onEdge) particle.x = this.canvas.width;
    } else {
      particle.dx = 0;
      particle.dy = speed;
      if (onEdge) particle.y = 0;
    }
    return particle;
  }

  init() {
    const {
      directions,
      spacing,
      maxParticles,
    } = this.props;
    this.particles = [];

    const boundedSpacing = getBoundedValue(spacing);
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    const width = Math.floor(cw / boundedSpacing);
    const height = Math.floor(ch / boundedSpacing);
    this.grid = new Grid({ width, height, spacing: boundedSpacing });

    const boundedMax = getBoundedValue(maxParticles);
    this.particleCap = Math.floor(this.grid.coords.length *  boundedMax);

    if (directions.value.length) {
      for (let i = 0; i < this.particleCap; i++) {
        this.particles.push(this.getParticle());
      }
    }
  }

  render(context) {
    const {
      drawGridDots,
      particleColor,
      gridDotColor,
    } = this.props;

    if (drawGridDots.value) {
      this.grid.coords.forEach(({ x, y }) => {
        context.beginPath();
        context.arc(x, y, 1, 0, Math.PI * 2);
        context.fillStyle = gridDotColor.value;
        context.fill();
      });
    }

    this.particles.forEach((particle, i) => {
      const { x, y, dx, dy } = particle;
      const w = this.canvas.width;
      const h = this.canvas.height;

      context.beginPath();
      context.arc(x, y, 1, 0, Math.PI * 2);
      context.fillStyle = particleColor.value;
      context.fill();
      if (this.showAnimations) {
        particle.x += dx;
        particle.y += dy;
      }
      if (particle.x > w || particle.x < 0 || particle.y > h || particle.y < 0) {
        this.particles[i] = this.getParticle(true);
      }
    });
  }

  changeProps(props) {
    this.props = props;
    this.init();
  }

  toggleAnimations(showAnimations) {
    this.showAnimations = showAnimations;
  }
}
