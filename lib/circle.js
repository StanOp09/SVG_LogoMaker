const Shape = require("./shape");

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="150" r="100" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
