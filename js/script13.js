const extendParent = (child, parent) => {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
};

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
extendParent(Circle, Shape);
Circle.prototype.duplicate = function () {
  return 'Duplicate Circle'; 
};

const Square = function (size, color) {
  Shape.call(this, color);
  this.size = size;
};
extendParent(Square, Shape);
Square.prototype.duplicate = function () {
  return 'Duplicate Square'; 
};

const shapes = [
  new Circle(1, 'red'),
  new Square(10, 'red'),
];

/* eslint-disable no-restricted-syntax */
for (const currentShape of shapes) {
  const loopDuplicates = currentShape.duplicate();
  console.log(loopDuplicates);
}
