/*Task 1. Sum All Numbers in a Range
Суммирует все числа в диапозоне*/
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]); //добавит нехватающие числа - [2, 3]. И вернет 10

/*Task 2. Diff Two Arrays
Различие двух массивов*/
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //вернет [4]

/*Task 3. Seek and Destroy
Удалить элементы из массива, которые имеют то же значение */
function destroyer(arr, ...something) {
  return arr.filter((item) => !something.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //Удаляет все 2 и 3. И возвращает [1, 1]

//Task 4. Wherefore art thou
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
); //возвращает [{ first: "Tybalt", last: "Capulet" }]

//Task 5. Spinal Tap Case
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join('-');
}

spinalCase('AllThe-small Things'); //возвращает all-the-small-things
