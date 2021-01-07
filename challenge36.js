/*
    Challenge36: Triangular Number Sequence

    The triangular Number sequence is generated from a 
    pattern of dots that form a triangle. 
    The first 5 numbers of the sequence, or dots,
    are: 1, 3, 6, 10, 15.
    This means that the first triangle has just one dot, 
    the second one has three dots, the third one has 6 dots, and so on.
    Write a function that gives the number of dots with its corresponding
     triangle number of the sequence. 
     Examples: 
     triangle(1) -> 1, 
     (6) -> 21, 
     (215) -> 23220;
 */


const triangle = num => {
    let i = 1;
    let count = 0;
    do {
        total = count + i
        count = total
        i++
    } while(i <= num);
    return count; 
}

// //run below code to test

// console.log(triangle(215));