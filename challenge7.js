/*
The Farm Problem

    A farmer is asking you to tell how many legs can be counted among all his animals. The farmer breeds three species: chickens(2 legs), Cows(4 legs), pigs(4 legs). The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. Example animals(2,3,5) ->36. Order of animals passed is animals(chickens, cows, pigs).
*/


function animals(chickens, cows, pigs) {
    totalLegs = (2 * chickens) + (4 * cows) + (4 * pigs);
    return totalLegs
}

