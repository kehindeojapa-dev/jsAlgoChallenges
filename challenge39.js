/*
    Challenge39: Number Length Sort

    Create a sorting function which sorts 
    numbers not by numerical order, 
    but by number length!. 
    This means sorting numbers with the least 
    amount of digits first, up to the numbers 
    with the most digits. 
Example: 
numberLenSort([1,54,1,2,463,2]) -> [1,1,2,2,54,463], 
([9,8,7,6,5,4,31,2,1,3]) -> [9,8,7,6,5,4,2,1,3,31].
Notes: if two numbers have the same number of digits, 
return them in the order they first appeared
(this makes it different to just sorting the numbers normally).  
*/


const numberLenSort = array => {
    //SORT TYPE: Bubble Sort
    //hold string converted version of the Array;
    arr = [];
    //Convert inputed arr into string so as to get its length;
    array.forEach(item => {
        arr.push(String(item));
    })

    // Iterate btw largest item lenght and swap btw ith and i+th element
    let store;
    let i = 0;


    while (i < arr.length - 1){
        let nextElement = i + 1;
        if(arr[i].length > arr[nextElement].length) {
            store = arr[i];
            arr[i] = arr[nextElement];
            arr[nextElement] = store;
        }
        // run below code to see how the sorting was achieved.
        // console.log(arr)
        i++;
    }
 
    //Reduce the array, by taking the last element in the array
    //which has been sorted., and passing it again to make it a 
    //recursive function till the element remains one.
    //unshift the last element into sortedArray.
    let recursiveArray = arr.slice( 0, arr.length - 1)
    let sortitem = arr.slice(arr.length - 1, arr.length);
    sortitem = Number(sortitem);//Need the item back as a number.



    if(arr.length == 0) {
        return [];
    } else {
        //Takes the empty array from above and
        //concat(push) the sorted item from each 
        //sorting function call.
        return numberLenSort(recursiveArray).concat(sortitem);
    }
}

console.log(numberLenSort([999,421,22,990,32]));