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

//Task 4. Telephone Number Validator. Проверщик телефонного номера
var re =
  /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck('1 (555) 555-5555'); //возвращает true.

//Task 5. Cash Register. Кассовый аппарат
const denom = [
  { name: 'ONE HUNDRED', val: 100 },
  { name: 'TWENTY', val: 20 },
  { name: 'TEN', val: 10 },
  { name: 'FIVE', val: 5 },
  { name: 'ONE', val: 1 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  const output = { status: null, change: [] };
  let change = cash - price;
  const register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }
  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }
  const change_arr = denom.reduce(function (acc, curr) {
    let value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }
  output.status = 'OPEN';
  output.change = change_arr;
  return output;
}

checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]); //возвращает {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
