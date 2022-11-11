//Task 1. Use an Array to Store a Collection of Data
let yourArray = ['cat', 7, true, 'dog', 5];

//Task 2. Access an Array's Contents Using Bracket Notation
let myArray = ['a', 'b', 'c', 'd'];
myArray[1] = 'f';
console.log(myArray);

//Task 3. Add Items to an Array with push() and unshift()
//push() - добавляет элемент в конец массива; unshift() - в начало
function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//Task 4. Remove Items from an Array with pop() and shift()
//pop() - удаляет элемент с конца массива, shift() - с начала
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Task 5. Remove Items Using splice()
//splice() - удаляет элемент в массиве
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);

//Task 6. Add Items Using splice()
function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}

console.log(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick',
  ])
);

//Task 7. Copy Array Items Using slice()
//slice() - извлекает значения в новый массив
function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
);

//Task 8. Copy an Array with the Spread Operator
//Копирование массива
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//Task 9. Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragmen
  return sentence;
}

console.log(spreadOut());

//Task 10. Check For The Presence of an Element With indexOf()
//Есть ли значение
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Task 11. Iterate Through All an Array's Items Using For Loops
//Если есть такое значение, удаляет вложенный массив с таким значением
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

//Task 12. Create complex multi-dimensional arrays
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', ['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]],
];

//Task 13. Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);
//examples
tekkenCharacter.origin = 'South Korea';
tekkenCharacter['hair color'] = 'dyed orange';
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';