//Task 1. Compare Scopes of the var and let Keywords
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//Task 2. Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

//Task 3. Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Task 4. Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();

//Task 5. Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//Task 6. Set Default Parameters for Your Functions
//+1 при value == ''
const increment = (number, value = 1) => number + value;

//Task 7. Use the Rest Parameter with Function Parameters
//Сумма всех чисел в массиве
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

//Task 8. Use the Spread Operator to Evaluate Arrays In-Place
//Копирование всего из 1 массива во 2
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);

//Task 9. Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;

//Task 10. Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//Task 11. Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

//Task 12. Use Destructuring Assignment to Assign Variables from Arrays
let a = 8,
  b = 6;

[a, b] = [b, a];

//Task 13. Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
//Убирает первые 2 значения в массиве
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

//Task 14. Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;

//Task 15. Create Strings using Template Literals
const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}

const failuresList = makeList(result.failure);

//Task 16. Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => ({ name, age, gender });

//Task 17. Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

//Task 18. Use class Syntax to Define a Constructor Function
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Task 19. Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//Task 20. Create a Module Script
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>;

//Task 21. Use export to Share a Code Block
export const uppercaseString = (string) => {
  return string.toUpperCase();
};

export const lowercaseString = (string) => {
  return string.toLowerCase();
};

//Task 22. Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString('hello');
lowercaseString('WORLD!');

//Task 23. Use * to Import Everything from a File
import * as stringFunctions from './string_functions.js';

stringFunctions.uppercaseString('hello');
stringFunctions.lowercaseString('WORLD!');

//Task 24. Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

//Task 25. Import a Default Export
import subtract from './math_functions.js';

subtract(7, 4);

//Task 26. Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {});

//Task 27. Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
});
