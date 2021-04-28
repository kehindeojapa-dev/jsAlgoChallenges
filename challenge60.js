/*
C60: Oddish vs Evenish

Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
Examples:
oddishOrEvenish(43) -> Oddish // 4 + 3 = 7;
oddishOrEvenish(372) -> Evenish // 3 + 7 + 2 = 12;
**_source: (Edabit(H))_**
*/

const oddishOrEvenish = (num) => {
  if (typeof num != "number") {
    return "can only accept integers";
  }
  let stringNum = String(num);
  let count = 0;

  for (let num of stringNum) {
    count = count + Number(num);
  }
  if (count % 2 == 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
};

console.log(oddishOrEvenish(372));
