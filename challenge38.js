/*
    Challenge38: Basic Calculator

    Create a function that takes two numbers
    and a mathematical operator(+, -, /, *) 
    and will perform a calculation with the given numbers. 
    Examples: 
    calculator(2, "+", 2) -> 4, 
    (2, "*" 2) -> 4, 
    (4, "/", 2) -> 2.    
    If the input tries to divide by 0, 
    return 'can't divide by 0!'. 
 */

const calculator = (num1, operator, num2) => {
    
    switch(operator){
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;
        
        case "*":
            return num1 * num2;
        
        case "/":
            if(num2 == 0){
                return "can't divide by 0!";
            } else {
                return num1 / num2;
            }
    }

}


// //run below code to test

// console.log(calculator(58,"/",0))
