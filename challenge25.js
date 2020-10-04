/*
How Many Vowels?

    Create a function that takes a string and returns the number(count) of vowels contained within it. Examples: countVowels('Celebration') -> 5, ('Palm') -> 1.
*/

function countVowels(string) {
    let count = 0;
    let vowel = /a|e|i|o|u/
    
    for(let letter of string) {
        if (vowel.test(letter)) {
            count +=1;
        }
    }
    return count;
}

console.log(countVowels('Celebration'));