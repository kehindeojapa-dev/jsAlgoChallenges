/*
    Challenge32: How Much is True 
    
Create a function which returns the number of true values there are in an array.
Examples:
countTrue([true, false, false, true, false]) -> 2,
([false, false, false, false]) -> 0, ([]) -> 0.
 Return 0 if given an empty array, array items are of the type bool(true/false)   

 */

const countTrue = arr => {
    
    // Check to see if array is empty
    if(arr.length == 0) {
        return 0;
    }

    //for non-boolean items
    notBooleanCount = [];
    //for true items
    trueCount = [];

    arr.forEach(item => {
        if(typeof(item) !== 'boolean') {
            notBooleanCount.push('notBool')
        }
        if(item == true) {
            trueCount.push(true);
        }
    })
    
    {//for testing the passed array parameter
        if(notBooleanCount.length > 0) {
            return 'can only accept boolean values';
        }
    }

    return trueCount.length;
}
