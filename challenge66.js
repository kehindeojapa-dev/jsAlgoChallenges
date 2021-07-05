/*
 C66: Numerical Morphisms

A number num, that elevated to the power of another number k ends with the same num, it's automorphic.
5**2 = 25 // It's automorphic because "25" ends with 5
5**3 = 125 // It's automorphic because "125" ends with 5
76\*\*4 = 33362176 It's automorphic because "33362176" ends with 76
Given a non-negative integer num, implement a function that returns the string:

- "Polymorphic" if num is automorphic for every power from 2 up to 10.
- "Quadrimorphic" if num is automorphic for only four powers(any from 2 up to 10).
- "Dimorphic" if num is automorphic for only two powers (any power from 2 up to 10).
- "Enamorphic" if num is automorphic for only one power(any from 2 up to 10).
- "Amorphic" if num is not automorphic for any powers from 2 up to 10.
  Examples:
  powerMorphic(5) -> "Polymorphic" // from 2 up to 10, every power of 5 ends with 5
  powerMorphic(21) -> "Enamorphic"
  powerMorphic(7) -> "Dimorphic"
  powerMorphic(4) -> "Quadrimorphic"
  powerMorphic(10) -> "Amorphic"

  */

const powerMorphic = (num) => {
  let morphicCount = 0;
  let numLength = String(num).length;
  let powerNum = [];
  // Get the array that contains the powers of the num
  for (let i = 2; i <= 10; i++) {
    let j = num ** i;
    powerNum.push(j);
  }

  //Get the morphicCount by checking if the num is equal to the last digit(s) of the powers of num
  powerNum.forEach((number) => {
    const lastDigits = String(number).slice(
      String(number).length - numLength,
      String(number).length
    );
    if (String(num) == lastDigits) {
      morphicCount++;
    }
  });

  // Switch flow to return the corresponding value of morphicCount
  switch (morphicCount) {
    case 9:
      return "Polymorphic";
    case 4:
      return "Quadrimorphic";
    case 2:
      return "Dimorphic";
    case 1:
      return "Enamorphic";
    case 0:
      return "Amorphic";
    default:
      return "Invalid input";
  }
  // return powerNum;
};

console.log(powerMorphic(21));
