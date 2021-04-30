/*
Challenge62: Bitwise Operator to Check Odd, Regular Expression to Check Even

Create two functions:

- The first is isOdd() to check if a given number is odd using bitwise operator.
- The second is isEven() to check if a given input is even using regular expressions.
  Use of % operator is disallowed.
  Examples:
  isOdd(3) -> 'Yes' // use bitwise operator
  isOdd(58) -> 'No' // use bitwise operator
  isEven('0') -> 'Yes' //use Regular Expression
  isEven('-99') -> 'No' // use Regular Expression
  NOTE: Input will only be integers, for the second function, input will be numbers in string.
  **_source: (Edabit(H))_**
  */

function isOdd(num) {
  let binaryNum = num.toString(2);
  let oddbit;
  for (let bit of binaryNum) {
    oddbit = bit;
  }
  if (oddbit == 1) {
    return "Yes";
  } else {
    return "No";
  }
}

function isEven(stringNum) {
  let regExp = /0$|2$|4$|6$|8$/;
  if (regExp.test(stringNum)) {
    return "Yes";
  } else {
    return "No";
  }
}

// console.log(isOdd(0));
console.log(isEven("0"));
