/*
    Football Points

        Create a function that takes the number of wins, draws and losses and calculate the number of points a football team has obtained so far, wins(3pt), draw(1pt), lose(0pt). Example footballPoints(3,4,2) ->13. Inputs will be numbers greater than or equal to zero. 
*/

alert("Enter the number of wins, draws and losses your team has acquired so far.");

// Collecting values of wins, draws and losses
let wins = Number(prompt("Enter number of wins acquired so far"));
let draws = Number(prompt("Enter number of draws acquired so far"));
let losses = Number(prompt("Enter number of losses suffered so far"));

// Creating function for calculating total point
function footballPoints(win, draw, loss) {
    if (win < 0 || draw < 0 || loss < 0) {
        return `Can't accept any value less than 0. The inputed value are wins ${win} draws ${draw} and losses ${loss}. Check if any of these value is less than zero and correct accordingly.`
    }
    else {
        total = (3 * win) + (1 * draw) + (0 * loss);
        return "Total points acquired so far is " +total;
    }
}


alert( footballPoints(wins, draws, losses) );