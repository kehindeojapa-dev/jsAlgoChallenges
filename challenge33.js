/*
    Challenge33: Find the nth Tetrahedral Number
    
Create a function that takes an integer n and returns the nth tetrahedral number.
Examples:
    tetra(2) -> 4,
    (5) -> 35,
    (6) -> 56. 

 */

function tetra(num) {
    if(num < 1) {
        return null
    }
    //for holding each level triangular number
    let count = 0;
    //holds sum of all triangular numbers
    let count2 = 0;
    let tetra;

    for(let i = 1; i <=num; i++){
        tetra = count + i;
        count = tetra;
        count2 += count;
    }   

    return count2;
}


