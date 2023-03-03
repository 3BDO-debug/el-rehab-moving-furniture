const generateGradient = (numberOfItems) => {
  let Rainbow = require('rainbowvis.js');
  let myRainbow = new Rainbow();
  myRainbow.setNumberRange(1, numberOfItems);
  myRainbow.setSpectrum('#e28f25', '#ffbf57');
  let s = [];
  for (let i = 1; i <= numberOfItems; i++) {
    let hexColour = myRainbow.colourAt(i);
    s.push(`#${hexColour}`);
  }

  return s;
};

export default generateGradient;
