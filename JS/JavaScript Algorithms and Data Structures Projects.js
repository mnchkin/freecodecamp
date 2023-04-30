//Task 1. Palindrome Checker. Проверщик палиндромов
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

palindrome('A man, a plan, a canal. Panama'); //возвращает true.

//Task 2. Roman Numeral Converter. Конвертер римских цифр
function convertToRoman(num) {
  const numeralsObj = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };
  const getClosestNumeral = (n) =>
    Object.keys(numeralsObj)
      .filter((e) => e <= n)
      .slice(-1)[0];

  let numPlaceholder = num;
  let romanNumeral = '';

  while (numPlaceholder >= 1) {
    let closestNumeral = getClosestNumeral(numPlaceholder);
    romanNumeral += numeralsObj[closestNumeral];
    numPlaceholder -= closestNumeral;
  }
  return romanNumeral;
}

convertToRoman(83); //возвращает LXXXIII

//Task 3. Caesars Cipher. Шифр Цезаря
function rot13(str) {
  let strAm = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ -_.&?!@ #/';
  let strNz = 'NOPQRSTUVWXYZABCDEFGHIJKLM -_.&?!@ #/';
  let rot13 = '';
  for (let i = 0; i < str.length; i++) {
    if (strAm.includes(str.charAt(i))) {
      rot13 += str
        .charAt(i)
        .replace(str.charAt(i), strNz[strAm.indexOf(str.charAt(i))]);
    }
  }
  return rot13;
}

rot13('SERR YBIR?'); //возвращает FREE LOVE?
