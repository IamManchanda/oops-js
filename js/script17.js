// eslint-disable-next-line
'use strict';

const Circle = function () {
  this.draw = function (params) {
    console.log(this);
  };
};

const c = new Circle();
const { draw } = c;
draw();
