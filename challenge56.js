/*
Challenge56: Tower of Hanoi

There are three towers. The objective of the game is to move all the disks over to tower#3, but you can't place a larger disk onto a smaller disk.
Create a function that takes a number (discs) and returns the minimum amount of steps needed to complete the game.
Examples:
towerHanoi(3) -> 7
towerHanoi(5) -> 31
towerHanoi(0) -> 0
**_source: (Edabit(H))_**

*/

// Incorrect code: only works for three discs, code needs to be reevaluated.

const towerHanoi = (number) => {
  let tower1 = [],
    tower2 = [],
    tower3 = [];
  for (let i = 1; i <= number; i++) {
    tower1.push(i);
  }

  let count = 0;
  for (let i = tower3.length; i < number; ) {
    if (tower1.length == number) {
      tower3.push(tower1.splice(i, i + 1));
      count++;
      i++;
    } else if (tower1.length == number - 1) {
      tower2.push(tower1.splice(0, 1));
      count++;
    } else if (tower3.length == 1) {
      tower2.unshift(tower3.splice(0, 1));
      count++;
    } else if (tower1.length == 1) {
      tower3.unshift(tower1.splice(0, 1));
      count++;
      i++;
    } else if (tower1.length == 0) {
      tower1.unshift(tower2.splice(0, 1));
      count++;
    } else if (tower2.length == 1) {
      tower3.unshift(tower2.splice(0, 1));
      count++;
      i++;
    } else if (tower1.length == 1) {
      tower3.unshift(tower1.splice(0, 1));
      count++;
      i++;
    } else {
      i++;
    }
  }
  return count;
};

console.log(towerHanoi(3));
