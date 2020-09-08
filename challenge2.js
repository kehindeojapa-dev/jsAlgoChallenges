/*
Convert Minutes into Seconds

    Write a function that takes an integer minutes and converts it into seconds. Examples convert(5) ->300.
*/

function minuteConverter(minute) {
    minute = minute * 60;
    // Add seconds to the converted minute.
    // minute = String(minute) +"sec";
    return minute;
}

minuteConverter();