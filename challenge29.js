/*
Remove Every Vowel from a String

    Create a function that takes a string and returns a new string with all vowels removed. Examples: removeVowels("I have never seen a lion) -> " hv nvr sn ln", ("We're gonna build a wall) -> "W'r gnn bld  wll"
*/
function removeVowels(strings) {
    let vowel = /a|A|e|E|i|I|o|O|u|U/g;
    newText =  strings.replace(vowel, '');
    return newText
}

console.log(removeVowels("We're gonna build a wall"));