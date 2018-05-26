/* eslint-disable */
// Modern JavaScript
class Shape { 
  constructor(color) {
    this.color = color;
  }
  duplicate() { 
    return 'Duplicate'; 
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  draw() { 
    return 'Draw'; 
  }
}

class Square extends Shape {
  constructor(size, color) {
    super(color);
    this.size = size;
  }
  center() {
    return 'Center'; 
  }
}

const c = new Circle(1, 'red');
const s = new Square(10, 'red');
