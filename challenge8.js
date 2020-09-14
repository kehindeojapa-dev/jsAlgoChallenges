/*
Recursion: Length of a String

    Write a function that returns the length of a string. Make your function recursive. Examples length("apple") ->5, length("a") ->1, length("") ->0.
*/


function length(string) {
    if (string.length == 0) {
        return 0
    } else {
        return 1 + length(string.slice(0,string.length-1));
    }
}