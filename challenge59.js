/*
Challenge59: Converting One Binary String to Another

Write a function that returns the minimum number of swaps to convert the first binary string into the second.

Examples:
minSwaps('1100', '1001') -> 1;
minSwaps('1100', '0011') -> 2;
minSwaps('110011, '010111') -> 1;
minSwaps('1001', '1001') -> 0;
**_source: (Edabit(H))_**
*/

const minSwaps = (...binaries) => {
  if (binaries[0].length != binaries[1].length) {
    return "binaries must be of the same length";
  }

  let count = 0;
  for (let i = 0; i < binaries[0].length; i++) {
    if (binaries[0][i] != binaries[1][i]) {
      count++;
    }
  }
  console.log(count / 2);
};

console.log(minSwaps("1001", "1001"));
