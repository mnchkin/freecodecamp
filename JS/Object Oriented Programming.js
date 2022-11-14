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
