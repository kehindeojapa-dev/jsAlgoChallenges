/*
C61: Number of Boomerangs

A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
examples: [3,7,3], [1, -1, 1], [5,6,5];
Create a function that returns the total number of boomerangs in an array.
To illustrate:
[3,7,3,2,1,5,1,2,2,-2,2,] -> 3 Boomerangs: [3,7,3], [1,5,1], [2,-2,2]

Examples:
countBoomerangs([9,5,9,5,1,1,1]) -> 2
countBoomerangs([1,7,1,7,1,7,1]) -> 5
countBoomerangs([4,4,4,9,9,9,9]) -> 0
**_source: (Edabit(H))_**
*/

function countBoomerangs(arr) {
  let boomerangCount = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] == arr[i + 1] && arr[i - 1] != arr[i]) {
      boomerangCount++;
    }
  }
  return boomerangCount;
}

// Run below code to run tests
// console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));
