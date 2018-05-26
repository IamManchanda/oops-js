const person = { 
  name: 'Harry Manchanda', 
};
Object.defineProperty(person, 'name', { 
  writable: false,
  enumerable: false,
  configurable: false,
});
person.name = 'Larry Page';
delete person.name;
console.log(person);
console.log(Object.keys(person));
