/*
Maximum Edge of a Triangle

    Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers. Examples: nextEdge(8,10) ->17, (9,2) ->10.
*/

function nextEdge(side1, side2) {
    if(side1 <= 0 || side2 <=0) {
        return "Please enter a positive whole number";
    } else {
        return side1 + side2 - 1;
    }
}

console.log(nextEdge(10, 10));