/*
Calculate the Mean

    Create a function that takes an array of numbers and returns the mean value. Examples: mean([2,3,2,3]) ->2.50, mean([3,3,3,3,3]) ->3.00. Round to two decimal places, you can expect a number ranging from 0 to 10,000. 
*/

function mean(array) {
    const total = array.reduce((acc, num) => num + acc, 0);
    let mean = total/array.length;

    return mean.toFixed(2);
}