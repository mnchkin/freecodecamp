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
