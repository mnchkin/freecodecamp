// Task 1. Comment Your JavaScript Code
// This is an in-line comment
/* This is a 
multi-line comment */

//Task 2. Declare JavaScript Variables
var myName;

//Task 3. Storing Values with the Assignment Operator
var a;
a = 7;

//Task 4. Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

//Task 5. Initializing Variables with the Assignment Operator
var a = 9;

//Task 6. Declare String Variables
var myFirstName = 'Timur';
var myLastName = 'Shirmanov';

//Task 7. Understanding Uninitialized Variables
var a;
var b;
var c;
a = 5;
b = 10;
c = 'I am a';
a = a + 1;
b = b + 5;
c = c + ' String!';

//Task 8. Understanding Case Sensitivity in Variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = 'A String';
titleCaseOver = 9000;

//Task 9. Explore Differences Between the var and let Keywords
let catName = 'Oliver';
let catSound = 'Meow!';

//Task 10. Declare a Read-Only Variable with the const Keyword
const FCC = 'freeCodeCamp';
let fact = 'is cool!';
fact = 'is awesome!';
console.log(FCC, fact);

//Task 11. Add Two Numbers with JavaScript
const sum = 10 + 10;

//Task 12. Subtract One Number from Another with JavaScript
const difference = 45 - 33;

//Task 13. Multiply Two Numbers with JavaScript
const product = 8 * 10;

//Task 14. Divide One Number by Another with JavaScript
const quotient = 66 / 33;

//Task 15. Increment a Number with JavaScript
let myVar = 87;
myVar++;

//Task 16. Decrement a Number with JavaScript
let myVar = 11;
myVar--;

//Task 17. Create Decimal Numbers with JavaScript
const myDecimal = 5.7;

//Task 18. Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;

//Task 19. Divide One Decimal by Another with JavaScript
const quotient = 4.4 / 2.0;

//Task 20. Finding a Remainder in JavaScript
const remainder = 11 % 3;

//Task 21. Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;

//Task 22. Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;

//Task 23. Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;

//Task 24. Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;

//Task 25. Escaping Literal Quotes in Strings
const myStr = 'I am a "double quoted" string inside "double quotes".';

//Task 26. Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Task 27. Escape Sequences in Strings
const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

//Task 28. Concatenating Strings with Plus Operator
const myStr = 'This is the start. ' + 'This is the end.';

//Task 29. Concatenating Strings with the Plus Equals Operator
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';

//Task 30. Constructing Strings with Variables
const myName = 'Timur';
const myStr = 'My name is ' + myName + 'and I am well!';

//Task 31. Appending Variables to Strings
const someAdjective = 'wonderful';
let myStr = 'Learning to code is ';
myStr += someAdjective;

//Task 32. Find the Length of a String
let lastNameLength = 0;
const lastName = 'Lovelace';
lastNameLength = lastName.length;

//Task 33. Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = '';
const lastName = 'Lovelace';
firstLetterOfLastName = lastName[0];

//Task 34. Understand String Immutability
let myStr = 'Jello World';
myStr = 'Hello World';

//Task 35. Use Bracket Notation to Find the Nth Character in a String
const lastName = 'Lovelace';
const thirdLetterOfLastName = lastName[2];

//Task 36. Use Bracket Notation to Find the Last Character in a String
const lastName = 'Lovelace';
const lastLetterOfLastName = lastName[lastName.length - 1];

//Task 37. Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = 'Lovelace';
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

//Task 38. Word Blanks
const myNoun = 'dog';
const myAdjective = 'big';
const myVerb = 'ran';
const myAdverb = 'quickly';
const wordBlanks =
  'It was really ' +
  myAdjective +
  ' ' +
  myNoun +
  ', and we ' +
  myVerb +
  ' ourselves ' +
  myAdverb +
  '.';

// Task 39. Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ['cat', 1];

//Task 40. Nest one Array within Another Array
const myArray = [
  ['Bulls', 23],
  ['White Sox', 45],
];

//Task 41. Access Array Data with Indexes
const myArray = [50, 60, 70];
const myData = myArray[0];

//Task 42. Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0] = 45;

//Task 43. Access Multi-Dimensional Arrays With Indexes
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];

//Task 44. Manipulate Arrays With push()
const myArray = [
  ['John', 23],
  ['cat', 2],
];
myArray.push(['dog', 3]);

//Task 45. Manipulate Arrays With pop()
const myArray = [
  ['John', 23],
  ['cat', 2],
];
const removedFromMyArray = myArray.pop();

//Task 46. Manipulate Arrays With shift()
const myArray = [
  ['John', 23],
  ['dog', 3],
];
const removedFromMyArray = myArray.shift();

//Task 47. Manipulate Arrays With unshift()
myArray.unshift(['Paul', 35]);

//Task 48. Shopping List
const myList = [
  ['Banana', 3],
  ['Apple', 4],
  ['Orange', 5],
  ['Peach', 6],
  ['Pineaple', 7],
];

//Task 49. Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log('Hi World');
}
reusableFunction();

//Task 50. Passing Values to Functions with Arguments
function functionWithArgs(arg1, arg2) {
  console.log(arg1 + arg2);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

//Task 51. Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}

//Task 52. Global Scope and Functions
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

//Task 53. Local Scope and Functions
function myLocalScope() {
  const myVar = 'pou';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

//Task 54. Global vs. Local Scope in Functions
const outerWear = 'T-Shirt';

function myOutfit() {
  const outerWear = 'sweater';
  return outerWear;
}

myOutfit();

//Task 55. const outerWear = "T-Shirt";
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();

//Task 56. Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

//Task 57. Stand in Line
function nextInLine(arr, item) {
  var queue = arr.push(item);
  var removeItem = arr.shift();
  return removeItem;
}

const testArr = [1, 2, 3, 4, 5];

console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));

//Task 58. Understanding Boolean Values
function welcomeToBooleans() {
  const func = true;
  return true;
}

//Task 59. Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false';
}

//Task 60. Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) {
    return 'Equal';
  }
  return 'Not Equal';
}

testEqual(10);

//Task 61. Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) {
    return 'Equal';
  }
  return 'Not Equal';
}

testStrict(10);

//Task 62. Practice comparing different values
function compareEquality(a, b) {
  if (a === b) {
    return 'Equal';
  }
  return 'Not Equal';
}

compareEquality(10, '10');

//Task 63. Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) {
    return 'Not Equal';
  }
  return 'Equal';
}

testNotEqual(10);

//Task 64. Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return 'Not Equal';
  }
  return 'Equal';
}

testStrictNotEqual(10);

//Task 65. Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {
    return 'Over 100';
  }

  if (val > 10) {
    return 'Over 10';
  }

  return '10 or Under';
}

testGreaterThan(10);

//Task 66. Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return '20 or Over';
  }

  if (val >= 10) {
    return '10 or Over';
  }

  return 'Less than 10';
}

testGreaterOrEqual(10);

//Task 67. Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {
    return 'Under 25';
  }

  if (val < 55) {
    return 'Under 55';
  }

  return '55 or Over';
}

testLessThan(10);

//Task 68. Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {
    return 'Smaller Than or Equal to 12';
  }

  if (val <= 24) {
    return 'Smaller Than or Equal to 24';
  }

  return 'More Than 24';
}

testLessOrEqual(10);

//Task 69. Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return 'Yes';
  }
  return 'No';
}

testLogicalAnd(10);

//Task 70. Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return 'Outside';
  }
  return 'Inside';
}

testLogicalOr(15);

//Task 71. Introducing Else Statements
function testElse(val) {
  let result = '';
  if (val > 5) {
    result = 'Bigger than 5';
  } else {
    result = '5 or Smaller';
  }
  return result;
}

testElse(4);

//Task 72. Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return 'Greater than 10';
  } else if (val < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 5 and 10';
  }
}
testElseIf(7);

//Task 73. Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return 'Less than 5';
  } else if (val < 10) {
    return 'Less than 10';
  } else {
    return 'Greater than or equal to 10';
  }
}

orderMyLogic(7);

//Task 74. Chaining If Else Statements
function testSize(num) {
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else if (num >= 20) {
    return 'Huge';
  } else {
    return 'Change Me';
  }
}
testSize(7);

//Task 75. Golf Code
const names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return 'Hole-in-one!';
  } else if (strokes <= par - 2) {
    return 'Eagle';
  } else if (strokes == par - 1) {
    return 'Birdie';
  } else if (strokes == par) {
    return 'Par';
  } else if (strokes == par + 1) {
    return 'Bogey';
  } else if (strokes == par + 2) {
    return 'Double Bogey';
  } else if (strokes >= par + 3) {
    return 'Go Home!';
  } else {
    return 'Change Me';
  }
}
golfScore(5, 4);

//Task 76. Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = '';
  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
  }
  return answer;
}

caseInSwitch(1);

//Task 77. Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = '';
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'bird';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
      break;
  }
  return answer;
}

switchOfStuff(1);

//Task 78. Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = '';
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
  }
  return answer;
}

sequentialSizes(1);

//Task 79. Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = '';
  switch (val) {
    case 'bob':
      answer = 'Marley';
      break;
    case 42:
      answer = 'The Answer';
      break;
    case 1:
      answer = 'There is no #1';
      break;
    case 99:
      answer = 'Missed me by this much!';
      break;
    case 'John':
      answer = '';
      break;
    case 156:
      answer = '';
      break;
    default:
      answer = 'Ate Nine';
      break;
  }
  return answer;
}

chainToSwitch(7);

//Task 80. Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b;
}

isLess(10, 15);

//Task 81. Return Early Pattern for Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//Task 82. Counting Cards
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');
