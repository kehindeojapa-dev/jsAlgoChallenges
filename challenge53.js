/*
 Challenge53: repeatedrepeatedrepeaed

This challenge concerns strings such as: 'repeatedrepeatedrepeated' that are obtained by repeating a smaller string, which in this case is the string 'repeated'.
Write a function that, given a string, either:

- Returns false if the string isn't made by repeating a smaller string or ...
- Returns the number of repetitions if the string repeats a smaller string.
  Examples:
  isRepeated('repeatedrepeatedrepeated') -> 3
  isRepeated('overintellectualization) -> false
  isRepeated('nononononono) -> 6
  **_source: (Edabit(H))_**
  */

const isRepeated3 = (word) => {
  let arr2 = [];
  let recurringWords = [];

  // Get array of every n characters of the word
  for (let i = 1; i <= word.length - 1; i++) {
    arr2.push(word.substring(0, i));
    arr2.push(word.substring(i, i * 2));
  }

  // Loop to find out the recurring word
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i + 1] === arr2[i]) {
      recurringWords.push(arr2[i]);
    }
  }

  //The first word that gets repeated
  let recurringWord = recurringWords[0];

  let repeatTest;
  if (recurringWord) {
    let repeatWord = "";
    repeatTest = Math.floor(word.length / recurringWord.length);
    for (let i = 0; i < repeatTest; i++) {
      repeatWord = repeatWord + recurringWord;
    }
    if (repeatWord === word) {
      return repeatTest;
    }
  }
  return false;
};

console.log(isRepeated3("11"));
