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
  //convert number like 8 = 2*2*2;
  for (let i = 2; i <= numbers[0]; i++) {
    if (numbers[0] % i == 0) {
      let num = numbers[0] / i;
      let divisor = i;
      num1factors.push(divisor);
      for (let j = 2; j < num + 100; j++) {
        if (num % divisor == 0) {
          num1factors.push(divisor);
          num = num / divisor;
        }
      }
      numbers[0] = num;
    }
  }

  // Number2 multiple factors
  //convert number like 12 = 2*3*4;
  for (let i = 2; i <= numbers[1]; i++) {
    if (numbers[1] % i == 0) {
      let num = numbers[1] / i;
      let divisor = i;
      num2factors.push(divisor);
      for (let j = 2; j <= num + 100; j++) {
        if (num % divisor == 0) {
          num2factors.push(divisor);
          num = num / divisor;
        }
      }
      numbers[1] = num;
    }
  }

  // Get numbers that appear in the numbers factors.
  let num1digits = [];
  let num2digits = [];
  for (let i = 0; i < num1factors.length; i++) {
    if (num1factors[i + 1] > num1factors[i]) {
      num1digits.push(num1factors[i]);
    }
  }
  for (let i = 0; i < num2factors.length; i++) {
    if (num2factors[i + 1] > num2factors[i]) {
      num2digits.push(num2factors[i]);
    }
  }
  num1digits.push(num1factors[num1factors.length - 1]);
  num2digits.push(num2factors[num2factors.length - 1]);

  // Get the number of times a factor appeared.
  let powerCount = [];
  for (let i = 0; i < num1digits.length; i++) {
    let count = 0;
    for (let j = 0; j < num1factors.length; j++) {
      if (num1digits[i] == num1factors[j]) {
        count++;
      }
    }
    powerCount.push({
      num: num1digits[i],
      power: count,
    });
  }
  for (let i = 0; i < num2digits.length; i++) {
    let count = 0;
    for (let j = 0; j < num2factors.length; j++) {
      if (num2digits[i] == num2factors[j]) {
        count++;
      }
    }
    powerCount.push({
      num: num2digits[i],
      power: count,
    });
  }
  powerCount.sort((a, b) => a.num - b.num);

  // Remove factor of the same digit but with lesser power.
  for (let i = 1; i < powerCount.length; i++) {
    if (powerCount[i - 1].num == powerCount[i].num) {
      if (powerCount[i - 1].power > powerCount[i].power) {
        powerCount.splice(i, i);
      } else if (powerCount[i - 1].power == powerCount[i].power) {
        powerCount.splice(i, i);
      }
    }
  }

  // Multiply the remaining numbers with their power to get the LCM
  let lcm = 1;
  powerCount.forEach((digit) => {
    let total = digit.num ** digit.power;
    lcm *= total;
  });

  return lcm;
}

console.log(lcm(11, 17));
// console.log(lcm(8, 5));

// console.log(lcm(560, 42));
