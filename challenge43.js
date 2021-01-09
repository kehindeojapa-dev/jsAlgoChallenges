/**
    Challenge43: Travelling Salesman Problem

    A salesman has a number of cities to visit. 
    They want to calculate the total number of 
    possible paths they could take, visiting 
    each city once before returning home. 
    Return the total number of paths a s
    alesman can travel, 
    given n cities.
Examples:
paths(4) -> 24. 
paths(1) -> 1
 */

const paths = noOfCities => {
    if(noOfCities == 1) {
        return noOfCities;
    } else {
        return noOfCities * paths(noOfCities - 1);
    }
}


// Run below code:
// console.log(paths(4))