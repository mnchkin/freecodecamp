//Task 1. Using the Test Method
//Поиск слова в строке
let myString = 'Hello, World!';
let myRegex = /Hello/;
let result = myRegex.test(myString);

//Task 2. Match Literal Strings
let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

//Task 3. Match a Literal String with Different Possibilities
let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

//Task 4. Ignore Case While Matching
//Игнорирование регистра
let myString = 'freeCodeCamp';
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

//Task 5. Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
