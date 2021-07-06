/*
C68: Check if the Brick fits through the Hole

Write the function that takes three dimensions of a brick: height(a), width(b), and depth(c) and returns true if this can fit into a hole with the width(w) and height(h).
Examples:
isBrickFit(1,1,1,1,1) -> true
isBrickFit(1,2,1,1,1) -> true
isBrickFit(1,2,2,1,1) -> false
*/

const isBrickFit = (...data) => {
  if (data.length < 5) {
    return "incomplete measurements";
  }
  let count = 0;
  if (data[0] <= data[3]) {
    count++;
  }
  if (data[0] <= data[4]) {
    count++;
  }
  if (data[2] <= data[3]) {
    count++;
  }
  if (data[2] <= data[4]) {
    count++;
  }

  if (count >= 3) {
    return true;
  } else {
    return false;
  }
  // return data;
};

console.log(isBrickFit(1, 1, 1, 1, 1));
console.log(isBrickFit(1, 2, 2, 1, 1));
console.log(isBrickFit(2, 2, 2, 1, 2));
