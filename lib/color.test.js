const { isValidColor } = require('./colors');

test('isValidColor function returns true for valid color names', () => {
  expect(isValidColor('red')).toBe(true);
  expect(isValidColor('green')).toBe(true);
  expect(isValidColor('blue')).toBe(true);
  expect(isValidColor('yellow')).toBe(true);
  expect(isValidColor('orange')).toBe(true);
  expect(isValidColor('purple')).toBe(true);
  expect(isValidColor('pink')).toBe(true);
  expect(isValidColor('gray')).toBe(true);
  expect(isValidColor('brown')).toBe(true);
  expect(isValidColor('black')).toBe(true);
  expect(isValidColor('white')).toBe(true);
  expect(isValidColor('ReD')).toBe(true);
  expect(isValidColor('BLUE')).toBe(true);
});

test('isValidColor function returns true for valid hexadecimal colors', () => {
  expect(isValidColor('#ff0000')).toBe(true);
  expect(isValidColor('#00ff00')).toBe(true);
  expect(isValidColor('#0000ff')).toBe(true);
  expect(isValidColor('#FFFF00')).toBe(true);
  expect(isValidColor('#FFFFFF')).toBe(true);
  expect(isValidColor('#123')).toBe(true); // 3-digit hex code
  expect(isValidColor('#ABCDEF')).toBe(true); // 6-digit hex code
  expect(isValidColor('#fFfFFf')).toBe(true);
});

test('isValidColor function returns false for invalid colors', () => {
  expect(isValidColor('invalidcolor')).toBe(false);
  expect(isValidColor('#GGG')).toBe(false);
  expect(isValidColor('#')).toBe(false);
  expect(isValidColor('rgb(255, 0, 0)')).toBe(false); // Not a color keyword or hex code
  expect(isValidColor('rgba(255, 0, 0, 0.5)')).toBe(false); // Not a color keyword or hex code
});
