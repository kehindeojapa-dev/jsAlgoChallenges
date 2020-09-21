/*
Count Instances of a Character in a String

    Create a function that takes two strings as srguments and returns the number of times the first string(the single character) is found in the second string. Examples charCount("a", "edabit") ->1, charCount("c", "Chamer of secrets") ->1. 
*/

function charCount(character, string) {
    let count = 0;
    for (let item of string) {
        if (item == character) {
            count++;
        }
    }
    return count;
}