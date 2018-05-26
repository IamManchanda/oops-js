// Constructor Function
const CircleCreator = function (radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('Draw');
  };
};

const circle = new CircleCreator(10);

const propertyName = 'center location';
circle[propertyName] = {
  x: 1,
};

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
for (const key in circle) {
  if (circle.hasOwnProperty(key)) {
    if (typeof circle[key] !== 'function') {
      console.log(key, circle[key]);
    }
  }
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) {
  console.log('Circle has a radius');
}
