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

//Task 6. Use a Constructor to Create Objects
function Dog() {
  this.name = 'Rupert';
  this.color = 'brown';
  this.numLegs = 4;
}
let hound = new Dog();

//Task 7. Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('Albus', 'brown');

//Task 8. Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(1);
myHouse instanceof House;

//Task 9. Understand Own Properties
//Добавляет все собственные свойства canary в массив ownProps
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

//Task 10. Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

//Task 11. Iterate Over All Properties
//Добавляет все собственные свойства canary в массив ownProps, а prototype - в prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

//Task 12. Understand the Constructor Property
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  }
  return false;
}
