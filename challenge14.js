/*
CAPS LOCK DAY is over!

    Create a function that takes a string, if the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end. Examples: normalize("CAPS LOCK DAY IS OVER") -> "Caps lock day is over !", normalize("Today is not caps lock day") -> "Today is not caps lock day"    Note: Each string is a sentence and should start with an uppercase character.
*/

function normalize(string) {
    upper = string.toUpperCase();
    if (string == upper) {
        let firstSlice = upper.slice(0,1);
        let otherslice = upper.slice(1,string.lenght);
        otherslice = otherslice.toLowerCase();
        let finalword = firstSlice + otherslice + " !";
        return finalword;
    } else {
        return string;
    }
}