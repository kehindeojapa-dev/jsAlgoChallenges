/*
    Challenge33: A Redundant Function

Write a function redundant that takes in a string str and 
returns a function that returns str.
Examples: 
    const f1 = redundant('apple'), f1() -> 'apple'.    
    const f3 = redundant(""), f3() -> "".
    Your function should return a function, not a string. 
 */

 const redundant = (str) => {
    return second = () => {
        return str;
    };    
 }

 const f1 = redundant('apple');
 const f2 = redundant('pear');
 const f3 = redundant('');


// //run below code to test

// console.log(f1());
// console.log(f2());
// console.log(f3());


