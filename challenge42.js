/*
    Challenge42: Move Capital Letters to the Front

    Create a function that moves all capital letters 
    to the front of a word. 
Examples:
capToFront("hApPy") -> "APhpy"
capToFront("shOrtCAKE") -> "OCAKEshrt"
 */

const capToFront = word => {

    let capLetters = '';    //store capital Letters
    let smallLetters = '';  //store SmallLetters
    for(let letter of word){
        if(letter == letter.toUpperCase()){
            capLetters = capLetters + letter;
        }else {
            smallLetters = smallLetters + letter
        }
    }
    const newWord = capLetters + smallLetters;
    return newWord;

}


// //run below code to test
// console.log(capToFront('hApPy'));