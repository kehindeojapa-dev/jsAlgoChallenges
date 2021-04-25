/*
Challenge54: Seven Boom!

Create a function that takes an array of numbers and return "Boom!" if the digit appears in the array. Otherwise, return "there is no 7 in the array".
Examples:
sevenBoom([1,2,3,4,5,6,7]) -> Boom!
sevenBoom([8,6,33,100]) -> there is no 7 in the array.
sevenBoom([2, 55, 60, 97, 86]) -> Boom! // 97 contains the number seven. **_source: (Edabit(H))_**
*/

function sevenBoom(arr) {
  let count = 0;
  arr.forEach((numbers) => {
    let stringNum = String(numbers);
    for (const digit of stringNum) {
      if (Number(digit) === 7) {
        count++;
      }
    }
  });
  if (count > 0) {
    return "Boom!";
  } else {
    return "there is no 7 in the array";
  }
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6]));
