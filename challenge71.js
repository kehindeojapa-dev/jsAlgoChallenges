/*
C71: Sherlock and Squares

Waston likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints(note that a square integer is an integer which is the square of an integer, e.g. 1,4,9,16,25,36,49).
For example, the range is a=24 and b-49, inclusive. There are three square integers in the range: 25, 36 and 49.
Complete the squares function that returns an integer representing the number of square integers in the inclusive range from a to b.
NOTE: Your solution must solve each problem in 1 second or less.
Examples:
squares(3,9) -> 2
squares(17,24) -> 0
squares(1,1000000000) -> 31622
**_source: (Edabit(VH))_**
*/

const squares = (a, b) => {
  if (a > b) {
    return "wrong argument arrangement";
  }
  let count = 0;
  const oldA = a;
  // console.log(String(b).length);
  if (String(b).length >= 7) {
    let newA = b - 10000000;

    for (let i = newA; i <= b; i++) {
      const sroot = Math.sqrt(i);
      const square = sroot * Math.ceil(sroot);
      if (i === square) {
        count++;
      }
    }

    let newB = newA;
    newA = newA - 10000000;
    if (newA <= oldA) {
      return count;
    } else {
      return count + squares(newA, newB);
    }
  } else {
    for (let i = a; i <= b; i++) {
      const sroot = Math.sqrt(i);
      const square = sroot * Math.ceil(sroot);
      if (i === square) {
        count++;
      }
    }
  }

  return count;
};

// console.log(squares(3, 9));

// console.log(squares(1, 10000000));
// console.log(squares(990000000, 1000000000));
console.log(squares(1, 10000000000));
// console.log(squares(1, 10000000));
// console.log(squares(1, 10000000));
// console.log(squares(1, 10000000));
// console.log(squares(1, 10000000));
// console.log(squares(1, 10000000));
// console.log(squares(1, 10000000));
// console.log(squares(1, 10000000));
// console.log(squares(1, 10000000));
