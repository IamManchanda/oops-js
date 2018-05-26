/* eslint-disable */
const CircleCreator = new Function ('radius', `
  this.radius = radius;
  this.draw = () => {
    console.log('Draw');
  };
`);
/* eslint-enable */

const circle = new CircleCreator(1);
circle.draw();
