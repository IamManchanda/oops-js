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
  draw() { return 'Draw'; }
}

const c = new Circle(1, 'red');
