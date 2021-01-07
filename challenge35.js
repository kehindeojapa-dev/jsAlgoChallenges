/*
    Challenge35: Converting Objects to Array

    Write a function that converts an object into an array,
    where each element represents a key-value pair in the
    form of an array.
    Examples: 
    toArray({a:1, b:2}) -> [["a", 1], ["b", 2]], 
    ({shrimp:15, tots:12}) -> [["shrimp", 15], ["tots", 12]],
    ({}) -> []. 
    Return an empty array if the object is empty. 
 */

 
function toArray(obj) {
    object1 = Object.entries(obj);
    if(object1.length == 0) {
        return []
    }
    return object1;
}

newArray = (toArray({
    a: 1,
    b: 2
}));


// //run below code to test
// console.log(newArray)

