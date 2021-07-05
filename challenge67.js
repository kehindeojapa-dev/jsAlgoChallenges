/*
C67: Star Ratings

Given an array of five values, calculate the average star rating, rounded to two decimal places. The array contains user votes per star, so the first element[0] contains the number of 1-star ratings and the last element[4], the number of 5-star ratings.
Return the average score in [brackets], followed by a space and asterisks'\* to represent the star rating, rounded to the nearest whole star. Round stars to whole stars.
Examples:
starRating([55,67,98,115,61]) -> "[3.15] ***"
starRating([0,2,0,1,23]) -> "[4.73] ****"
starRating([16,17,23,40,45]) -> "[3.57] ****"
*/

const starRating = (array) => {
  let sum = 0;
  let sumDivide = 0;
  let starCount = "";
  array.forEach((item) => {
    sum += item;
  });
  for (let i = 1; i <= 5; i++) {
    let rating = array[i - 1] / sum;
    sumDivide = sumDivide + rating * i;
  }
  const stars = Math.round(sumDivide);
  const starValue = sumDivide.toFixed(2);

  // Get stars
  for (let i = 0; i < stars; i++) {
    starCount = starCount + "*";
  }
  return `[${starValue}] ${starCount}`;
};

// console.log(starRating([55, 67, 98, 115, 61]));
// console.log(starRating([0, 2, 0, 1, 23]));
// console.log(starRating([16, 17, 23, 40, 45]));
