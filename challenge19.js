/*
Phone Number Formatting

    Create a function that takes an array of 10 numbers(btw 0 -9) and returns a string of those numbers formatted as a phone number(e.g (555) 555-5555). formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]) -> "(123) 456-7890". 
*/

function formatPhoneNo(array) {
    if(array.length != 10) {
        return "Please enter an array length of 10 single digit numbers";
    }
    // convert array to string and remove the commas separator.
    conv1 = array.join("");
    conv1 = conv1.replace(",","");
    // Divide numbers into 3 different parts
    let first = conv1.slice(0, 3);
    let second = conv1.slice(3, 6);
    let third = conv1.slice(6, conv1.length)
    // Returns formatted number
    let format = `(${first}) ${second}-${third}`;
    return format;
}

console.log(formatPhoneNo([1,2,3,4,5,6,7,8,9,0]))
