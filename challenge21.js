/*
Reverse the Case

    Get a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa. Examples: reverseCase('Happy Birthday') -> 'hAPPY bIRTHDAY', ('MANY THANKS') -> 'many thanks', ('sPoNtAnEoUs') -> 'SpOnTaNeOuS'.  
*/

function reverseCase(string) {
    let string2 = "";
    for (let letter of string) {
        if (letter == letter.toUpperCase()) {
            string2 += letter.toLowerCase();
        } else {
            string2 += letter.toUpperCase();
        }
    }
    return string2;
}