const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('svg.js');

// Function to create the logo SVG file
async function createLogo(text, textColor, shape, shapeColor) {
  const width = 300;
  const height = 200;

  // Create SVG canvas
  const canvas = SVG(document.documentElement).size(width, height);

  // Draw shape
  switch (shape) {
    case 'circle':
      canvas.circle(100).move(100, 50).fill(shapeColor);
      break;
    case 'triangle':
      canvas.polygon('50,150 150,150 100,50').fill(shapeColor);
      break;
    case 'square':
      canvas.rect(100, 100).move(100, 50).fill(shapeColor);
      break;
    default:
      console.log('Invalid shape.');
      return;
  }

  // Draw text
  canvas.text(text).move(130, 120).font({ size: 40, fill: textColor });

  // Save SVG to file
  fs.writeFileSync('logo.svg', canvas.svg());
  console.log('Generated logo.svg');
}

// Prompt user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal number):',
    },
  ])
  .then((answers) => {
    createLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  })
  .catch((error) => {
    console.error(error);
  });
