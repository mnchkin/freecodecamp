//Task 1. Create a Basic JavaScript Object
let dog = {
  name: 'Khan',
  numLegs: 4,
};

//Task 2. Use Dot Notation to Access the Properties of an Object
let dog = {
  name: 'Spot',
  numLegs: 4,
};
console.log(dog.name, dog.numLegs);

//Task 3. Create a Method on an Object
let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + dog.numLegs + ' legs.';
  },
};

dog.sayLegs();
