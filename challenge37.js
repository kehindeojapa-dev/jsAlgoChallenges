/*
    Challenge37: Find Nemo

    You are given a string of words. You need to find the word "Nemo",
    and returns a string like this:
    'I found Nemo at [the order of the word you find Nemo]!', 
    if you can't find nemo, return 'I can't find Nemo :('. 
    Examples: 
    findNemo("I am finding Nemo !") -> 'I found Nemo at 4', 
    ("Nemo is me") -> 'I found Nemo at 1'.    
    If there are multiple Nemo's in the sentence, 
    only return for the first one.
 */


const findNemo = str => {
    let i = 0;
    let arr2 = []; //To contain occurences of Nemo
    let arr3 = []; //To contain index Of Nemo

    arr = str.split(' ');
    arr.forEach(item => {
        i++
        if(item == 'Nemo') {
            arr2.push(item); 
            arr3.push(i); //push current index position of Nemo
        }
    })
    //If arr doesn't contain the word Nemo OR Take the first occurence index position
    if(arr2.length == 0) {
        return "I can't find Nemo"
    } else {
        return `I found Nemo at ${arr3[0]}`
    }
}

