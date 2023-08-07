const inquirer = require('inquirer');
const { generateSVG } = require('./lib/logoGenerator');
const { isValidShape } = require('./lib/shapes');
const { isValidColor } = require('./lib/colors');

const runLogoGenerator = async () => {
  try {
    const userInput = await inquirer.prompt([
      {
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => input.length > 0 && input.length <= 3,
      },
      {
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
        validate: (input) => isValidColor(input),
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
        validate: (input) => isValidColor(input),
      },
    ]);

    if (!isValidShape(userInput.shape)) {
      throw new Error('Invalid shape choice. Please choose from circle, triangle, or square.');
    }

    generateSVG(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

runLogoGenerator();
