/*
Area of a Triangle

    Write a function that takes the base and height of a triangle and return its area. Examples triArea(3,2) ->3.
*/
let baseValue = Number(prompt("Enter base value"));
let heightValue = Number(prompt("Enter height value"));

const triArea = (base,height) => 0.5 * base * height;


triArea(baseValue, heightValue);

console.log(triArea(baseValue, heightValue));
