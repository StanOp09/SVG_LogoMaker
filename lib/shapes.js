const shapes = ['circle', 'triangle', 'square'];

const isValidShape = (shape) => shapes.includes(shape.toLowerCase());

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
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="150" r="100" fill="${this.shapeColor}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square, isValidShape };
  