const mixin = (target, ...sources) => {
  Object.assign(target.prototype, ...sources);
};

const canEat = {
  eat() {
    this.hunger -= 1;
    console.log('Eating');
  },
};

const canWalk = {
  walk() {
    console.log('Walking');
  },
};

const canSwim = {
  swim() {
    console.log('Swim');
  },
};

const Person = function (coder) {
  this.coder = coder;
};
mixin(Person, canEat, canWalk);
const harry = new Person(true);
console.log(harry);

const Goldfish = function (waterlover) {
  this.waterlover = waterlover;
};
mixin(Goldfish, canEat, canSwim);
const myFish = new Goldfish(true);
console.log(myFish);
