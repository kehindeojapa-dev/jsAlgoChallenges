/*
    Less than 100

        Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. Example lessThan(22,35) ->true, lessthan(55,65) ->false. 
*/

let num1 = Number(prompt("Enter value of num1"));
let num2 = Number(prompt("Enter value of num2"));

const lessThan = (x,y) => {
    if (x + y < 100) {
        return true;
    }else {
        return false;
    }
}

console.log(lessThan(num1,num2));