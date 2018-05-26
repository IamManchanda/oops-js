// Vintage JavaScript
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
Circle.prototype.draw = function () {
  return 'Draw'; 
};

const Square = function (size) {
  Shape.call(this, color);
  this.size = size;
};
extendParent(Square, Shape);
Square.prototype.center = function () {
  return 'Center'; 
};

const c = new Circle(1, 'red');
const s = new Square(10, 'red');
