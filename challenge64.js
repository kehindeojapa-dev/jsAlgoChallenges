/*
C64: How Many Days Between Two Dates

Create a function that takes two dates and returns the number of days between the first and second date.
Examples:
getDays(
new Date("June 14, 2019"),
new Date("June 20, 2019")
) -> 6
getDays(
new Date("December 29, 2018"),
new Date("January 1, 2019")
) -> 3
**_source: (Edabit(H))_**

*/

function getDays(...dates) {
  let firstDay = dates[0];
  let secondDay = dates[1];

  // firstDay = firstDay.slice(3, 10);
  // console.log(firstDay.valueOf());
  // console.log(secondDay.valueOf());

  day = (firstDay - secondDay) / (24 * 3600000);
  return Math.abs(day);
}

console.log(
  getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
);

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
