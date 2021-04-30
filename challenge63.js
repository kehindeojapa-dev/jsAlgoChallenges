/*
Challenge63: Length of a Nested Array

The .length property on an array will return the number of elements in the array. For example [1, [2,4]] will return 2 number 1 and array[2].
Write a function tha returns the total number of non-nested items in a nested array.
Examples:
getLength([1, [2,3]]) -> 3
getLength([1. [2, [3,4]]]) -> 4
getLength(1, [2], 1, [2], 1) -> 5
**_source: (Edabit(H))_**

  */

let count = 0;
// let arr2 = [];
const getLength = (arr) => {
  let isArray = [];
  let singleArray = [];
  let jointArray = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      isArray.push(item);
    } else {
      singleArray.push(item);
    }
  });
  [...isArray].forEach((arr) => {
    jointArray = jointArray.concat(arr);
  });
  jointArray = singleArray.concat(jointArray);
  // console.log(arr4);
  if (isArray.length == 0) {
    return jointArray.length;
  } else {
    return getLength(jointArray);
  }
};

console.log(getLength([1, [2, 3], [3, 4, [5, 6]]]));
console.log(getLength([1, [2], 1, [2], 1]));
console.log(getLength([1, [2, 3]]));
