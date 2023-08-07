const fs = require('fs');
const path = require('path');

const exampleFolderPath = path.join(__dirname, '../examples');

if (!fs.existsSync(exampleFolderPath)) {
  fs.mkdirSync(exampleFolderPath);
}

const generateCircleSVG = (text, textColor, shapeColor) => {
  const radius = 150;
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${radius * 4}" height="${radius * 4}">
    <circle cx="${radius * 2}" cy="${radius * 2}" r="${radius}" fill="${shapeColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="100">${text}</text>
  </svg>`;
  return svgContent;
};

const generateTriangleSVG = (text, textColor, shapeColor) => {
  const height = 400;
  const width = 400;
  const fontSize = 100;
  const textX = width / 2;
  const textY = height / 2 + fontSize / 4;

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <polygon points="200,36 360,364 40,364" fill="${shapeColor}" />
    <text x="${textX}" y="${textY}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${fontSize}">${text}</text>
  </svg>`;
  return svgContent;
};

const generateSquareSVG = (text, textColor, shapeColor) => {
  const side = 300;
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${side}" height="${side}">
    <rect width="100%" height="100%" fill="${shapeColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="100">${text}</text>
  </svg>`;
  return svgContent;
};

const generateSVG = (text, textColor, shape, shapeColor) => {
  let svgContent;

  switch (shape.toLowerCase()) {
    case 'circle':
      svgContent = generateCircleSVG(text, textColor, shapeColor);
      break;
    case 'triangle':
      svgContent = generateTriangleSVG(text, textColor, shapeColor);
      break;
    case 'square':
      svgContent = generateSquareSVG(text, textColor, shapeColor);
      break;
    default:
      throw new Error('Invalid shape choice. Please choose from circle, triangle, or square.');
  }

  const filePath = path.join(exampleFolderPath, 'logo.svg');

  fs.writeFileSync(filePath, svgContent);
};

module.exports = { generateSVG };
