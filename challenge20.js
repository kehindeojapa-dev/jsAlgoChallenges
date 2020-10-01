/*
Absolute Sum

    Take an array of integers(positive or negative or both) and return the sum of the absolute value of each element. Examples: getAbsSum([2,-1,4,8,10]) -> 25, getAbsSum([-3,-4,-10,-2,-3]) -> 22, getAbsSum([2,4,6,8,10]) -> 30. 
*/


function getAbsSum(array) {
    let array2 = [];
    let count = 0;
    for (let item of array) {
        if(item < 0) {
            item = item * (-1);
            array2.push(item);
        } 
        else {
           array2.push(item);
        }
    }
    for (items of array2) {
        count += items
    }
    return count;
}