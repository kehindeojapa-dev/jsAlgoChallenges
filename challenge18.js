/*
Largest Swap

    Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps. To illustrate: largestSwap(27) -> false, largestswap(43) -> false. If 27 is our input, we should return false because swapping the digits gives us 72 and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34. Numbers with two identical digits should yield true(you can't do better). 
*/
function largestSwap(num) {
    // Convert numer to string to allow swapping and validation
    let convert1 = String(num);
    if(convert1.length > 2) {
        return "Enter a positive two-digit number."
    }
    // Slice and Swap the two numbers
    let convert2 = convert1.slice(0,1);
    let convert3 = convert1.slice(1,2);
    let convert4 = convert3+convert2;
    // Convert string to number to allow largest function to be carried out.
    let convert5 = Number(convert4)
    if(num > convert5) {
        return true +`, ${num} > ${convert5}, so largest swap`;
    } else if (num < convert5) {
        return false +`, ${num} < ${convert5}, so not largest swap`;
    } else {
        return true+`, Cannot do better, so largest swap`;
    }
}


console.log(largestSwap(14));