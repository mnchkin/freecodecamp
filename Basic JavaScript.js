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
