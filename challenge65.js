/*
Challenge65: Pentagonal Number

Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center dot on the Nth iteration. Return the number of dots that exist in the whole pentagon on the Nth iteration
Examples:
pentagonal(1) -> 1
pentagonal(2) -> 6
pentagonal(3) -> 16
pentagonal(8) -> 141
**_source: (Edabit(H))_**
*/

const pentagonal = (num) => {
  let removeOne = num - 1;
  if (num == 0) {
    return 1;
  } else {
    return 5 * removeOne + pentagonal(num - 1);
  }
};

console.log(pentagonal(8));
