
class Grid {
  constructor(props) {
    const {
      width,
      height,
      spacing
    } = props;

    this.width = width;
    this.height = height;
    this.spacing = spacing;
    this.init();
  }

  init() {
    this.coords = [];
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.coords.push({
          xindex: x,
          x: x * this.spacing,
          yindex: y,
          y: y * this.spacing,
        });
      }
    }
  }

  resize(width, height, spacing) {
    this.width = width;
    this.height = height;
    if (spacing) this.spacing = spacing;
    this.init();
  }

  getRandom() {
    const i = Math.floor(Math.random() * this.coords.length);
    return this.coords[i];
  }
}

export default Grid;
