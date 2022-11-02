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

//Task 6. Find More Than the First Match
//Извлечение повторяющихся
let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

//Task 7. Match Anything with Wildcard Period
//Подставляет символы вместо точки
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

//Task 8. Match Single Character with Multiple Possibilities
//Извлечение всех гласных
let quoteSample =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
