/*
Secret Society

    A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function that takes in an array of names and returns the name of the secret society. Examples: societyName(['Adam','Sarah','Malcolm']) -> 'AMS', (['Harry','Newt','Luna','Cho']) -> CHLN. The secret society's name should be entirely uppercased. 
*/

function societyName(array) {
    let array2=[];  //container for sliced first letters;

    // for selecting the first letter of string and capitalising it.
    for (let item of array) {
        array2.push(item.slice(0,1).toUpperCase());
    }

    // selection sort technique
    for(let i = 0; i < array2.length; i++) {
        if (array2[i] > array2[array2.length-1]) {
            let store = array2[array2.length -1];
            array2[array2.length - 1] = array2[i];
            array2[i] = store;
        }
    }
   
    // recursive function array for different input when invoked.
    recursedArray = array2.slice(0, array2.length - 1);

    // Sorted element
    sort = array2.slice(array2.length-1, array2.length);

    // make the array to be arranged accordingly.
    let sort2 = [];
    sort2.unshift(sort);

    // Recursive function for geting sorted element;
    if (array2.length == 0) {
        return [];
    } else {
        let result = societyName(recursedArray).concat(sort2[0]);
        return result;
    }
}

console.log(societyName(['harry','newt','luna','cho']).join(''));