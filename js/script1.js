// Factory Function
const createCircle = (radius) => {
  return {
    radius,
    draw() {
      console.log('Draw');
    },
  };
};

const circle = createCircle(1);
circle.draw();
