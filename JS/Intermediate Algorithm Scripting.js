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
