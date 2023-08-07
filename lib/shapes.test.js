// shapes.test.js
const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

test('Triangle class render method returns correct SVG string', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test('Circle class render method returns correct SVG string', () => {
  const circle = new Circle();
  circle.setColor('green');
  expect(circle.render()).toEqual('<circle cx="150" cy="150" r="100" fill="green" />');
});

test('Square class render method returns correct SVG string', () => {
  const square = new Square();
  square.setColor('red');
  expect(square.render()).toEqual('<rect width="200" height="200" fill="red" />');
});
