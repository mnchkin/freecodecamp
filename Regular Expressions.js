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

//Task 9. Match Letters of the Alphabet
//Извлечение всех букв
let quoteSample = 'The quick brown fox jumps over the lazy dog.';
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

//Task 10. Match Numbers and Letters of the Alphabet
//Извлечение цифр и букв
let quoteSample = 'Blueberry 3.141592653s are delicious.';
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

//Task 11. Match Single Characters Not Specified
let quoteSample = '3 blind mice.';
let myRegex = /[^aeiou^0-9]/gi;
let result = quoteSample.match(myRegex);

//Task 12. Match Characters that Occur One or More Times
//Извлекает все буквы s
let difficultSpelling = 'Mississippi';
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

//Task 13. Match Characters that Occur Zero or More Times
let chewieRegex = /Aaa*/;
let result = chewieQuote.match(chewieRegex);
