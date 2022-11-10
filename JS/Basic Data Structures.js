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
