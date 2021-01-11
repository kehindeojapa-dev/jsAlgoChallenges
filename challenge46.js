/**
    Challenge46: Remove Trailing and Leading Zeros
    
    Create a function that takes in a number as a 
    string n and returns the number without 
    trailing and leading zeros.

    Examples:
removeLeadingTrailing("230.000") -> "230"
removeLeadingTrailing("00402") -> "402"
removeLeadingTrailing("03.1400") -> "3.14"
removeLeadingTrailing("30") -> "30"
    
*/

const removeLeadingTrailing = numString => {

    //RegExp for getting numbers from the decimal point
    let afterDecimalReg = /\b\.\d+\b/; 
    //RegExp for getting numbers before the decimal point.
    let beforeDecimalReg = /\b\d+\b/;
    const beforeDecimal = (numString.match(beforeDecimalReg)[0]);


    // Get number after the decimal point
    //add it to the whole number.

    if(afterDecimalReg.test(numString)) {
        let afterDecimal = numString.match(afterDecimalReg)[0];
        // return afterDecimal;
        afterDecimal = Number(afterDecimal) * 1;
        // add the two numbers together
        let newNumber = Number(beforeDecimal) + afterDecimal;
        // Return the number as a string.
        return String(newNumber);
    } 
    else {
        // Just return the whole number back
        //because the Number function removes the leading zero(s)
        return String(Number(beforeDecimal));
    }
    
}


//Run below code to test the program
// let num = '00000135.11100'
// let num2 = "0100004020";
// let num3 = "03.14000";
// let num4 = "00200.190000010"
// console.log(removeLeadingTrailing(num4));
