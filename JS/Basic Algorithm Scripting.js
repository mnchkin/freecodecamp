//Task 1. Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertCtoF(30);

//Task 2. Reverse a String
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

reverseString('hello');

//Task 3. Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

//Task 4. Find the Longest Word in a String
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

//Task 5. Return Largest Numbers in Arrays
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

//Task 6. Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding('Bastian', 'n');

//Task 7. Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

repeatStringNumTimes('abc', 3);

//Task 8. Truncate a String
//Первые буквы
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

//Task 9. Finders Keepers
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

//Task 10. Boo who
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

booWho(null);

//Task 11. Title Case a Sentence
//Каждое слово с заглавной буквы
function titleCase(str) {
  const newTitle = str.split(' ');
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] =
      newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(' ');
}

titleCase("I'm a little tea pot");

//Task 12. Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Task 13. Falsy Bouncer
//Убирает false, null, 0, "", undefined, and NaN
function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}
/*Solution 2
function bouncer(arr) {
    return arr.filter(Boolean);
  }*/

//Task 14. Where do I Belong
//Под каким индексом стоит
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);

//Task 15. Mutations
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(['hello', 'hey']);

//Task 16. Chunky Monkey
//Делит arr на size подмассивов
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
