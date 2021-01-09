/**
    Challenge48: Get Sum of People's Budget
    
    Create a function that takes an array with 
    objects and returns the sum of people's budgets.

    Examples:
getBudgets([
    {name: "John", age: 21, budget: 23000},
    {name: "Steve", age: 32, budget: 40000},
    {name: "Martin", age: 16, budget: 2700}
]) -> 65700
    
*/


const getBudgets = budgetArray => {
    let count = 0;
    budgetArray.forEach(eachBudget => {
        count += eachBudget.budget;
    })
    return count;
}


// run below code

// console.log(getBudgets([
//     {name: "John", age: 21, budget: 29000},
//     {name: "Steve", age: 32, budget: 32000},
//     {name: "Martin", age: 16, budget: 1600}
// ]));