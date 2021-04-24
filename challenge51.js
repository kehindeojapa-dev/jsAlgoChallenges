/* 
Challenge: Combinations

Create a function that takes a variable number of arguments, each argument representing the nuber of items in a group, and returns the number of permutations(combinations) of items that you could get by taking one item from each group
Examples:
combinations(2, 3) -> 6
combinations(3, 7, 4) -> 84
combinations(2, 3, 4, 5) -> 120
**_source: (Edabit(H))_**

*/

function combination(...args) {
  let count = 1;
  args.forEach((num) => {
    count = num * count;
  });
  return count;
}

console.log(combination(2, 3, 4, 5));
