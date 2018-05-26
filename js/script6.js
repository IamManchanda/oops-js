// Constructor Function
const CircleCreator = function (radius) {
  this.radius = radius;
  this.draw = () => 'Draw';

  let defaultLocation = { x: 0, y: 0 };
  Object.defineProperty(this, 'defaultLocation', {
    get() {
      return defaultLocation;
    },
    set(value) {
      if (!value.x || !value.y) { throw new Error('Invalid Location'); }
      defaultLocation = value;
    },
  });
};

CircleCreator.defaultLocation = { x: 0, y: 0 };

const circle = new CircleCreator(10);
