/* eslint-disable class-methods-use-this */
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  getRadius() {
    return this[_radius];
  }

  [_draw]() {
    console.log('Draw');
  }
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
