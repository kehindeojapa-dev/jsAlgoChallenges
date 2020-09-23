/*
Matchstick Houses

    Reference the source for further info. Examples matchHouses(1) ->6, matchHouses(4) ->21, matchHouses(87) ->436. 
*/

function matchHouses(num){
    if(num < 0) {
        return null;
    } else if(num == 0) {
        return 0;
    } else if(num == 1){
        return 6;
    } else {
        return 5 + matchHouses(num-1);
    }
}

console.log(matchHouses(2));