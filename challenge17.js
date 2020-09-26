/*
What's Hiding Amongst the Crowd?

    A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
    -The wanted word is in lowercase.
    -The crowd of letters is all in uppercase.
    -Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples: detectWord("UcUNDOSLNSaFYOWOtOL") -> "Cat". 
*/

function detectWord(string) {
    let string2 = "";
    for (let letters of string) {
        if(letters == letters.toLowerCase()) {
            string2 = string2 + letters;
        }
    }
    return string2;
}

console.log(detectWord('UcUNDOSLNSaFYOWOtOL'));