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

//Task 4. Make Code More Reusable with the this Keyword
let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + this.numLegs + ' legs.';
  },
};

dog.sayLegs();

//Task 5. Define a Constructor Function
function Dog() {
  this.name = 'Khan';
  this.color = 'black';
  this.numLegs = 4;
}
