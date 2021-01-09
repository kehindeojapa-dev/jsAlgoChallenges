/**
    Challenge49: Function Factory

Create a function that takes a "base number" as an argument. 
This function should return another function which takes a 
new argument, and returns the sum of the "base number" and 
the new argument.


*/

const addBaseNumber = baseNum => {

    const addMe = newNum => {
        return newNum + baseNum;
    }
    return addMe;

}

//run below code
// const addTen = addBaseNumber(10);
// console.log(addTen(5));