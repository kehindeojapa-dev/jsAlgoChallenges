/**
    Challenge45: Flattening an Array

    I'm trying to write a function to flatten 
    an array of subarrays into one array. 
    (Suppose i am unaware there is a .flat() 
    method in the Array prototype). 
    In other words, i want to transform 
    this: [[1,2], [3,4]] into [1,2,3,4].

Examples:
flatten([[1,2], [3,4]]) -> [1,2,3,4]
flatten [["a", "b"], ["c", "d"]] -> ["a", "b",  "c", "d"].
    
 */

const flatten = arr => {
    arr2 = [];
    arr.forEach(item => {
        if(Array.isArray(item) == true) {
            item.forEach(innerItem => {
                arr2.push(innerItem);
            })
        } else {
            arr2.push(item);
        }
    });
    return arr2;
}

//run below to test code;
// console.log(flatten([[1, 2], [3, 4]]));
// console.log(flatten([["a", "b"], ["c", "d"]]));