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

//Task 6. Pig Latin
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, '').concat(myConsonants).concat('ay')
    : str.concat('way');
}

translatePigLatin('glove'); // возвращает oveglay

//Task 7. Search and Replace
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

myReplace('I think we should look up there', 'up', 'Down'); // возвращает I think we should look down there.

//Task 8. DNA Pairing
function pairElement(str) {
  const basePair = function (char) {
    switch (char) {
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
      case 'C':
        return ['C', 'G'];
      case 'G':
        return ['G', 'C'];
    }
  };

  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(basePair(str[i]));
  }

  return pairs;
}

pairElement('ATCGA'); // возвращает [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

//Task 9. Missing letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

fearNotLetter('abce'); // возвращает d
fearNotLetter('aabcdefghijklmnopqrstuvwxyz'); // возвращает undefined

//Task 10. Sorted Union
function uniteUnique(arr1, arr2, arr3) {
  // Создает пустой массив для хранения нашего конечного результата.
  const finalArray = [];

  // Пройдитесь по объекту аргументов, чтобы действительно заставить программу работать с двумя или более массивами
  // вместо 3.
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    // Просматривает текущий массив
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      // Проверяет, не находится ли значение уже в конечном массиве.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // возвращает [1, 2, 3, 5, 4, 6, 7, 8]

//Task 11. Convert HTML Entities
function convertHTML(str) {
  var temp = str.split('');

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

convertHTML('Dolce & Gabbana'); // возвращает Dolce &amp; Gabbana

//Task 12. Sum All Odd Fibonacci Numbers. Сумма всех нечетных чисел Фибоначчи
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

sumFibs(4); // возвращает 5

//Task 13. Sum All Primes. Сумма всех простых чисел
function sumPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0)) primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

sumPrimes(977); // возвращает 73156.

//Task 14. Smallest Common Multiple. Наименьшее общее кратное
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([5, 1]); // возвращает 60.

//Task 15. Drop it
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 7, 4], function (n) {
  return n > 3;
}); // возвращает [7, 4].

//Task 16. Steamroller
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]); // возвращает [1, 2, 3, 4].

//Task 17. Binary Agents
function binaryAgent(str) {
  var biString = str.split(' ');
  var uniString = [];
  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join('');
}

binaryAgent(
  '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'
); // возвращает I love FreeCodeCamp!

//Task 18. Everything Be True
function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}

truthCheck(
  [
    { name: 'Pikachu', number: 25, caught: 3 },
    { name: 'Togepi', number: 175, caught: 1 },
    { name: 'MissingNo', number: NaN, caught: 0 },
  ],
  'number'
); // возвращает false.

//Task 19. Arguments Optional
function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== 'number') return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== 'number') return undefined;
  return first + second;
}

addTogether(23, 30); // возвращает 53.
addTogether(2, '3'); // возвращает undefined.
