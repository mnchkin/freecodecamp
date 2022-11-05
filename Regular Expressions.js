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

//Task 14. Find Characters with Lazy Matching
let text = '<h1>Winter is coming</h1>';
let myRegex = /<.*?>/;
let result = text.match(myRegex);

//Task 15. Find One or More Criminals in a Hunt
let reCriminals = /C+/;

//Task 16. Match Beginning String Patterns
//Поиск шаблонов в начале строк
let rickyAndCal = 'Cal and Ricky both like racing.';
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

//Task 17. Match Ending String Patterns
//Поиск шаблонов в конце строк
let caboose = 'The last car on a train is the caboose';
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

//Task 18. Match All Letters and Numbers
//Извлекает все буквы и цифры
let quoteSample = 'The five boxing wizards jump quickly.';
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

//Task 19. Match Everything But Letters and Numbers
//Извлекает всё кроме букв и цифр
let quoteSample = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

//Task 20. Match All Numbers
//Извлекает все цифры
let movieName = '2001: A Space Odyssey';
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

//Task 21. Match All Non-Numbers
//Извлекает всё кроме цифр
let movieName = '2001: A Space Odyssey';
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

//Task 22. Restrict Possible Usernames
let username = 'JackOfAllTrades';
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
//^ - начало ввода
//[a-z] - первый символ - буква
//[a-z]+ - следующие символы являются буквами
//\d*$ - ввод заканчивается 0 или более цифрами
//| - или
//^[a-z] - первый символ - буква
//\d\d+ - следующие символы состоят из 2 или более цифр
//$ - конец ввода
let result = userCheck.test(username);

//Task 23. Match Whitespace
//Извлечение пробелов
let sample = 'Whitespace is important in separating words';
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

//Task 24. Match Non-Whitespace Characters
//Извлечение всего кроме пробелов. Количество символов без пробелов
let sample = 'Whitespace is important in separating words';
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace).length;

//Task 25. Specify Upper and Lower Number of Matches
let ohStr = 'Ohhh no';
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr);

//Task 26. Specify Only the Lower Number of Matches
let haStr = 'Hazzzzah';
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

//Task 27. Specify Exact Number of Matches
let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);

//Task 28. Check for All or None
let favWord = 'favorite';
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

//Task 29. Positive and Negative Lookahead
//пароль более 5 символов и из 2 последовательных цифр
let sampleWord = 'astronaut';
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
//пароль от 3 до 6 символов и хотя бы одно число
let password = 'abc123';
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

//Task 30. Check For Mixed Grouping of Characters
let myString = 'Eleanor Roosevelt';
let myRegex = /(Eleanor|Franklin D.) Roosevelt/;
let result = myRegex.test(myString);

//Task 31. Reuse Patterns Using Capture Groups
let repeatNum = '42 42 42';
let reRegex = /^(\d+)\s\1\s\1$/;
let result = repeatNum.match(reRegex);
