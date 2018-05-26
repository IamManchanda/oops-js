const Circle = function (radius) {
  this.radius = radius;
  this.move = function () {
    return 'Move';
  };
};

Circle.prototype.draw = function () {
  return 'Draw';
};

Circle.prototype.duplicate = function () {
  return 'Duplicate';
};

const c1 = new Circle(1);
const c2 = new Circle(2);

/* eslint-disable */
for (const key in c1) {
  if (c1.hasOwnProperty(key)) {
    console.log(key);
  }
}
