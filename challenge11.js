/*
Factorial of a Number

    Create a function that receives a non-negative integer and returns the factorial of that number. Examples: fact(0) ->1, fact(6) ->720.
*/

function fact(num) {
    if(num == 0) {
        return 1;
    } else {
        return num * fact(num-1);
    }
}