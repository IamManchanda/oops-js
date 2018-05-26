/* eslint-disable */
// Modern JavaScript
class Shape { 
  constructor(color) {
    this.color = color;
  }
  duplicate() { return 'Duplicate'; }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  duplicate() { return 'Duplicate Circle'; }
}

class Square extends Shape {
  constructor(size, color) {
    super(color);
    this.size = size;
  }
  duplicate() { return 'Duplicate Square'; }
}

const shapes = [
  new Circle(1, 'red'),
  new Square(10, 'red'),
];

/* eslint-disable no-restricted-syntax */
for (const currentShape of shapes) {
  const loopDuplicates = currentShape.duplicate();
  console.log(loopDuplicates);
}
