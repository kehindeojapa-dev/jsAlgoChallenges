/*
    Challenge31: Is the Number a Repdigit.
    Details:
    
A repdigit is a positive number composed out of the same digit. 
Create a function that takes an integer and returns whether it's a repdigit or not.
 Examples:
  isRepdigit(66) -> true, 
  (0) -> true,
  (-11) -> false.
   The number 0 should return true.   
*/

const isRepDigit = num => {
    //Check if num is less than zero or zero
    if(num < 0) {
        return false;
    } else if(num == 0) {
        return true
    }

    //turn number to string to support iteration
    stringNum = String(num);
    //memory holder for testing digit equality
    let testDigit = "";
    //container for inequality
    countHolder = [];


    for(let digit of stringNum) {
        if(digit != testDigit) {
            countHolder.push(true)
        }
        testDigit = digit;
    }
    let countLength = countHolder.length;

    // more than one means a number wasn't equal to its predecessor.
    if(countLength > 1) {
        return false
    } else {
        return true
    }
}

