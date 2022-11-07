//Task 1. Use the JavaScript Console to Check the Value of a Variable
let a = 5;
let b = 1;
a++;

let sumAB = a + b;
console.log(a);

//Task 2. Understanding the Differences between the freeCodeCamp and Browser Console
let output =
  'Get this to show once in the freeCodeCamp console and not at all in the browser console';
console.log(output);
console.clear();

//Task 3. Use typeof to Check the Type of a Variable
let seven = 7;
let three = '3';
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

//Task 4. Catch Misspelled Variable and Function Names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//Task 5. Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//Task 6. Catch Mixed Usage of Single and Double Quotes
let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);

//Task 7. Catch Use of Assignment Operator Instead of Equality Operator
let x = 7;
let y = 9;
let result = 'to come';

if (x == y) {
  result = 'Equal!';
} else {
  result = 'Not equal!';
}

console.log(result);

//Task 8. Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

//Task 9. Catch Arguments Passed in the Wrong Order When Calling a Function
function raiseToPower(exp, base) {
  return Math.pow(exp, base);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//Task 10. Catch Off By One Errors When Using Indexing
function countToFive() {
  let firstFive = '12345';
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();
