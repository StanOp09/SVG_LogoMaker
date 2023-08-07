// Shape.js
class Shape {
    constructor() {
      this.shapeColor = '';
    }
  
    setColor(color) {
      this.shapeColor = color;
    }
  
    render() {
      throw new Error('Child class must implement render() method.');
    }
  }
  
  module.exports = Shape;
  