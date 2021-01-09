/**
    Challenge50: Sum of Number Elements in an Array

    Arrays can be mixed with various types. 
    Your task for this challenge is to sum 
    all the number elements in the given array. 
    Create a function that takes an array and 
    returns the sum of all numbers in the array.

Examples:
numbersSum([1,2,"13","4","645"]) -> 3
numbersSum([true,false,"123","75"]) -> 0

*/

const numbersSum = arr => {
    let count = 0;
    
    arr.forEach(item => {
        //Check if item is a number
        if(typeof(item) == 'number') {
            count += item;
        }
    });
    
    return count;
}

//run below code
console.log(numbersSum([1,2,"13","4","645"]));
console.log(numbersSum([true,false,"123","75"]));
console.log(numbersSum([]));
console.log(numbersSum([1,2,3,4,5,true]));
