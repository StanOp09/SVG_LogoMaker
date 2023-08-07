const colorKeywords = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
    'pink',
    'gray',
    'brown',
    'black',
    'white',
  ];
  
  const isValidHexCode = (code) => /^#?([0-9A-Fa-f]{3}){1,2}$/.test(code);
  
  const isValidColor = (color) => {
    if (colorKeywords.includes(color.toLowerCase())) {
      return true;
    }
  
    const hexCode = color.startsWith('#') ? color.slice(1) : color;
    return isValidHexCode(hexCode);
  };
  
  module.exports = { isValidColor };
  