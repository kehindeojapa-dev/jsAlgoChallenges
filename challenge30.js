/*
Regex Series: Even Number?

    Write a regular expression that matches only an even number. Numbers will be represented as strings. Examples: '2341' -> false, '5558' -> true. This challenge is designed to use Regex only.

*/

function isNumEven(num) {
    if (num == Number(num)) {
        const regExp = /[0]$|[2]$|[4]$|[6]$|[8]$/;
        return regExp.test(num);
    } else {
        return `${num} is not a valid number`
    }
}
// regExp = /[0]$|[2]$|[4]$|[6]$|[8]$/;
console.log(isNumEven('2341'));