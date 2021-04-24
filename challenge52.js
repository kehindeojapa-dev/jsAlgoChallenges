/*
 Challenge52: Numbers in Strings

Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array
Examples:
numInStr(['1a', 'a', '2b', 'b']) -> ['1a', '2b]
numInStr(['abc', 'abc10']) -> ['abc10'];
NOTE: Try solving this without regex.
**_source: (Edabit(H))_**
*/

const numInStr = (arr) => {
  let arr2 = []; //container to hold strings containing numbers in them

  arr.forEach((item) => {
    let count = 0;

    // Check if any character is a number
    for (const character of item) {
      if (Number(character) * 1 == Number(character)) {
        count++;
      }
      //if the count increase by one, that means the item has a number in it
    }
    // Pushes every item with number in it into arr2
    if (count > 0) {
      arr2.push(item);
    }
  });
  return arr2;
};

// Test Code
console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
