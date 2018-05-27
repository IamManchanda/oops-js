/* eslint-disable class-methods-use-this */
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, () => {
      console.log('Move', this.getRadius());
    });
  }

  getRadius() {
    return _radius.get(this);
  }

  draw() {
    _move.get(this)();
    console.log('Draw');
  }
}

const c = new Circle(1);
