/*
C69: Double Character Swap

Write a function to replace all instances of character c1 with character c2 and vice versa.
Examples:
Swap("aabbcc", "a", "b") -> 'bbaaccc'
Swap("<>", ">", "<") -> "><"
Swap("128 895 556 788 999", "8", "9") -> "129 985 556 799 888"
*/

const swap = (character, c1, c2) => {
  let newCharacter = "";
  for (let char of character) {
    if (char == c1) {
      newCharacter += c2;
    } else if (char == c2) {
      newCharacter += c1;
    } else {
      newCharacter += char;
    }
  }

  return newCharacter;
};

console.log(swap("aabbccc", "a", "b"));
console.log(swap("<>", ">", "<"));
console.log(swap("128 895 556 788 999", "8", "9"));
