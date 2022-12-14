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

//Task 13. Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

//Task 14. Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

//Task 15. Understand Where an Object’s Prototype Comes From
function Dog(name) {
  this.name = name;
}

let beagle = new Dog('Snoopy');

Dog.prototype.isPrototypeOf(beagle);

//Task 16. Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}

let beagle = new Dog('Snoopy');

Dog.prototype.isPrototypeOf(beagle);

Object.prototype.isPrototypeOf(Dog.prototype);

//Task 17. Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

//Task 18. Inherit Behaviors from a Supertype
//Первый шаг. Наследование поведения от Супертипа
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

//Task 19. Set the Child's Prototype to an Instance of the Parent
//Второй шаг. Дочерний прототип на родительский
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

//Task 20. Reset an Inherited Constructor Property
//Сброс унаследованного свойства конструктора
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

let duck = new Bird();
let beagle = new Dog();

Bird.prototype.constructor = Bird;
duck.constructor;

Dog.prototype.constructor = Dog;
beagle.constructor;

//Task 21. Add Methods After Inheritance
//Добавление методов после наследования
function Animal() {}
Animal.prototype.eat = function () {
  console.log('nom nom nom');
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};

let beagle = new Dog();

//Task 22. Override Inherited Methods
//Переопределение унаследованных методов
function Bird() {}

Bird.prototype.fly = function () {
  return 'I am flying!';
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () {
  return 'Alas, this is a flightless bird.';
};

let penguin = new Penguin();
console.log(penguin.fly());

//Task 23. Use a Mixin to Add Common Behavior Between Unrelated Objects
//Добавление общего поведения между несвязанными объектами
let bird = {
  name: 'Donald',
  numLegs: 2,
};

let boat = {
  name: 'Warrior',
  type: 'race-boat',
};

let glideMixin = function (obj) {
  obj.glide = function () {};
};

glideMixin(bird);
glideMixin(boat);

//Task 24. Use Closure to Protect Properties Within an Object from Being Modified Externally
//Защита свойств внутри объекта от изменения извне
function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}

//Task 25. Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log('A cozy nest is ready');
})();

//Task 26. Use an IIFE to Create a Module
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log('Singing to an awesome tune');
      };
    },
  };
})();
