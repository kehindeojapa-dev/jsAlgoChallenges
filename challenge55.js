/*
Challenge55: Pandigital Numbers

A pandigital number contains all digits(0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
Examples:
isPandigital(98140723568910) -> true
isPandigital(90864523148909) -> false // 7 is missing
isPandigital(11223344556677889900) -> true
**_source: (Edabit(H))_**

*/

const isPandigital = (digits) => {
  let numbers = [
    {
      num: 0,
      status: false,
    },
    {
      num: 1,
      status: false,
    },
    {
      num: 2,
      status: false,
    },
    {
      num: 3,
      status: false,
    },
    {
      num: 4,
      status: false,
    },
    {
      num: 5,
      status: false,
    },
    {
      num: 6,
      status: false,
    },
    {
      num: 7,
      status: false,
    },
    {
      num: 8,
      status: false,
    },
    {
      num: 9,
      status: false,
    },
  ];
  let missingNumbers = [];
  let stringDigit = String(digits);

  for (const num of stringDigit) {
    numbers.forEach((digit) => {
      if (num == digit.num) {
        digit.status = true;
      }
    });
  }
  let count = 0;
  numbers.forEach((digit) => {
    if (digit.status == false) {
      count++;
      missingNumbers.push(digit.num);
    }
  });
  if (count <= 0) {
    return true;
  } else {
    return `false, missing number(s) are ${missingNumbers}`;
  }
  console.log(missingNumbers);
};

console.log(isPandigital(11223344556677889900));
