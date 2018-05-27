/* eslint-disable */
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log('Draw');
  }

  static parse(str) {
    const { radius } = JSON.parse(str);
    return new Circle(radius);
  }
}

const c = Circle.parse('{ "radius": 1 }');
