/*
Challenge58: LCM of Two Numbers

Write a function that returns the least common multiple(LCM) of two integers.
Examples:
lcm(9, 18) -> 18;
lcm(8, 5) -> 40;
lcm(17, 11) -> 187;
**_source: (Edabit(H))_**

*/

function lcm(...numbers) {
  let num1factors = [];
  let num2factors = [];
  let totalfactors = [];

  // Number1 multiple factors
  for (let i = 2; i <= numbers[0]; i++) {
    if (numbers[0] % i == 0) {
      let num = numbers[0];
      let divisor = i;
      for (let j = 2; j < num; j++) {
        if (num % divisor == 0) {
          num1factors.push(divisor);
          num = num / divisor;
        }
      }
      numbers[0] = num;
    }
  }

  // Number2 multiple factors
  for (let i = 2; i <= numbers[1]; i++) {
    if (numbers[1] % i == 0) {
      let num = numbers[1];
      let divisor = i;
      for (let j = 2; j < num; j++) {
        if (num % divisor == 0) {
          num2factors.push(divisor);
          num = num / divisor;
        }
      }
      numbers[1] = num;
    }
  }

  if (num1factors.length > num2factors.length) {
    moreFactors = num1factors;
    lessFactors = num2factors;
  } else {
    moreFactors = num2factors;
    lessFactors = num1factors;
  }

  // for (let i = 0; i < moreFactors.length; i++) {
  //   // console.log(num1factors[i]);
  //   if (moreFactors[i] == lessFactors[i]) {
  //     totalfactors.push(moreFactors[i]);
  //   } else {
  //     if (moreFactors[i] != undefined) {
  //       totalfactors.push(moreFactors[i]);
  //     }
  //     if (lessFactors[i] != undefined) {
  //       totalfactors.push(lessFactors[i]);
  //     }
  //   }
  // }
  let powerCount = [];
  let powerCount1 = [];
  let count1 = 1;
  for (let i = 0; i < num1factors.length; i++) {
    if (num1factors[i] == num1factors[i + 1]) {
      count1++;
      powerCount1.push({
        num: num1factors[i],
        power: count1,
      });
    } else {
      count1 = 1;
    }
  }

  let count = 0;
  for (let i = 0; i < num2factors.length; i++) {
    if (num2factors[i] == num2factors[i + 1]) {
      count++;
      powerCount.push({
        num: num2factors[i],
        power: count,
      });
    } else {
      count = 1;
      powerCount.push({
        num: num2factors[i],
        power: count,
      });
    }
  }

  console.log(num1factors, num2factors);
  console.log(powerCount1);
  console.log(powerCount);
}

console.log(lcm(160, 20));
