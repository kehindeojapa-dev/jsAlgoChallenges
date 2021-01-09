/**
    Challenge47: Square Every Digit
    
    Create a function that squares every digit of a number.
Examples:
squareDigits(9119) -> 811181
squareDigits(2483) -> 416649
    
*/


const squareDigits = num => {
    //Checks if argument is a number
    if(typeof(num) != "number") {
        return null;
    }

    //container for new squared digit
    squareDigit = '';
    //Convert number to string, so as to
    //enable iteration of each digit
    stringNum = String(num);
    
    //Iterate number
    for(let digit of stringNum){

        //Turn digit(string) into a number
        //to allow the square operations
        digit = Number(digit)**2;
        
        //Revert squared digit into string
        //to allow concatenation
        String(digit);
        squareDigit += digit;
    }

    return Number(squareDigit);
} 

// run below code for testing the program
// console.log(squareDigits(9119));
// console.log(squareDigits(2483));

