/* eslint-disable */
// Vintage JavaScript
const Shape = function (color) { 
  this.color = color;
};
Shape.prototype.duplicate = function () {
  return 'Duplicate'; 
};

const Circle = function (radius, color) {
  Shape.call(this, color);
  this.radius = radius;
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function () {
  return 'Draw'; 
};

const c = new Circle(1, 'red');
