# JS Algorithm Challenges

### This repo contains solutions to algorithmic challenges, aim is to get better understanding of Javascript.

- Goal: 100 challenges
- Milestone: 50 challenges solved
- Reference: VH = Very Hard, H = Hard, I = Intermediate, E = Easy, V = Very Easy

### C80: Persistence

The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.
The multiplcative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.
NOTE: The input n is never negative.
Create two functions that take an integer as an argument and:

- Return its additive persistence.
- Return its multiplicative persistence.

  Examples:
  additivePersistence(1679583) -> 3
  additivePersistence(123456) -> 2
  additivePersisitence(6) -> 0
  multiplcativePersistence(77) -> 4
  multiplcativePersistence(123456) -> 2
  multiplcativePersistence(4) -> 0

  **_source: (Edabit(VH))_**

### C79: Track the Robot(Part 2)

This robot roams around a 2D grid. It starts at (0,0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot moved each time, you have to calculate the robot's final position.
To illustrate, if the robot is given the movements 20,30,10,40 then it will move:

- 20 steps North, now at (0,20)
- 30 steps East, now at (30,20)
- 10 steps South, now at (30,10)
- 40 steps West, now at (-10,10)
  Examples:
  trackRobot(20,30,10,40) -> [-10,10]
  trackRobot() -> [0,0]
  trackRobot(-10,20,10) -> [20,-20]
  **_source: (Edabit(VH))_**

### C78: Balanced Words

We can assign a value to each character in a word, based on their position in the alphabet(a=1,b=2,...,z=26). A balanced word is one where the sum of values on the left hand side of the word equals the sum of values on the right hand side. For odd length words, the middle character(balance point) is ignored.
Write a function that returns true if the word is balanced, and false if it's not.
NOTE:

- All words will be lowercase, and have a minimum of 2 characters.
- Palindromic words will always be balanced.
  Examples:
  balanced("zips") -> true //zi|ps = 26+9|16+19
  balanced("brake") -> false //br|ke
  **_source: (Edabit(VH))_**

### C77: Primal Strength

A prime number is balanced if it is equidistant from the prime before it and the prime after it. It is therefore the arithmetic mean of those primes. For example, 5 is a balanced prime, two units away from 3, and two from 7, 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.
A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime. It is closer to the prime after it than the one before it. For example, the strong prime 17 is closer to 19 than it is to 13.
A prime that is lesser than the arihmetic mean of the primes before and after it is called weak prime. For example, 19.
Create a function that takes a prime number as input and returns "strong" if it is a strong prime, "Weak" if it is a weak prime, or "Balanced".
Examples:
primalStrength(211) -> "Balanced"
primalStrength(17) -> "Strong"
primalStrength(19) -> "Weak
**_source: (Edabit(VH))_**

### C76: Sort by Number of Calls

Create a function that takes a list of functions and sorts them in ascending order based on how many calls are needed for them to return a non-function
NOTE:

- Treat non-functions as needing zero calls.
- Every function will be called with empty parameters.
- Every function will need to be called at least once.
- The potentially returned values include Number, Boolean and String, among others.
  Examples:
  f1 = _ => "hello"
  f2 = _ => _ => "edabit"
  f3 = _ => _ => _ => "user"
  funcSort(f2,f3,f1) -> [f1,f2,f3]
  **_source: (Edabit(VH))_**

  ### C75: Guitar Tuner

Create a function that takes guitar strings as an array of frequencies(numbers) and returns the display of a tuner as an array.

- If the guitar string matches, return "OK" for that guitar string.
- If it's too low, return ">." for 1 or 2 percent off(the arrow means, tune up).
- Return ">>." if it's way off. For more than 3 percent.
- If it's too high, return ".<" for 1 or 2 percent, and ".<<" for more, (tune down).
- If 0 is given, the guitar string isn't played, return " - ".
  Examples:
  tune([0,246.94,0,0,0,80]) -> [" - ", "OK", " - ", " - ", " - ", ">>."]
  tune([329,246,195,146,111,82]) -> ["OK", "OK", ">.", ">.",".<", "OK"]
  tune([329.63,246.94,196,146.83,110,82.41]) -> ["OK", "OK", "OK", "OK", "Ok", "Ok"]

  **_source: (Edabit(VH))_**

### C74: Product of Digits of Sum

Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only one digit long. The input of the function is at least one number.
Examples:
sumDigProd(16 , 28) -> 6
// 16 + 28 = 44
// 4 times 4 = 16
// 1 times 6 = 6
sumDigProd(0) -> 0
**_source: (Edabit(VH))_**

### C73: Happy Numbers

Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. 13 -> 10 -> 1.
Sometimes, like the 203, the sequence reaches (and stays at) 1. Numbers like this are called happy. Not all numbers are happy. If we started with 11, the sequence will never reach 1, and so the number 11 is called unhappy.
Given a positive whole number, you have to determine whether that number is happy or unhappy.
Examples:
happy(203) -> true
happy(11) -> false
happy(107) -> false
**_source: (Edabit(VH))_**

### C72: Headline Hash Tags

Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
Examples:
getHashTags("")
**_source: (Edabit(VH))_**

### C71: Sherlock and Squares

Waston likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints(note that a square integer is an integer which is the square of an integer, e.g. 1,4,9,16,25,36,49).
For example, the range is a=24 and b-49, inclusive. There are three square integers in the range: 25, 36 and 49.
Complete the squares function that returns an integer representing the number of square integers in the inclusive range from a to b.
NOTE: Your solution must solve each problem in 1 second or less.
Examples:
squares(3,9) -> 2
squares(17,24) -> 0
squares(1,1000000000) -> 31622
**_source: (Edabit(VH))_**

### C70: RegExp: Validate Pin

Create a RegExp to test if a string is valid pin or not. Empty strings should return false when tested.
A valid pin has:

- Exactly 4 or 6 characters.
- Only numerical characters(0-9).
- No whitespace.
  Examples:
  myRegExp.test('1234') -> true
  myRegExp.test('45124') -> false
  myRegExp.test('89abc1') -> false
  myRegExp.test('900876') -> true
  myRegExp.test(' 4983') -> false
  **_source: (Edabit(H))_**

### C69: Double Character Swap

Write a function to replace all instances of character c1 with character c2 and vice versa.
Examples:
Swap("aabbcc", "a", "b") -> 'bbaaccc'
Swap("<>", ">", "<") -> "><"
Swap("128 895 556 788 999", "8", "9") -> "129 985 799 888"
**_source: (Edabit(H))_**

### C68: Check if the Brick fits through the Hole

Write the function that takes three dimensions of a brick: height(a), width(b), and depth(c) and returns true if this can fit into a hole with the width(w) and height(h).
Examples:
isBrickFit(1,1,1,1,1) -> true
isBrickFit(1,2,1,1,1) -> true
isBrickFit(1,2,2,1,1) -> false
**_source: (Edabit(H))_**

### C67: Star Ratings

Given an array of five values, calculate the average star rating, rounded to two decimal places. The array contains user votes per star, so the first element[0] contains the number of 1-star ratings and the last element[4], the number of 5-star ratings.
Return the average score in [brackets], followed by a space and asterisks'\* to represent the star rating, rounded to the nearest whole star. Round stars to whole stars.
Examples:
starRating([55,67,98,115,61]) -> "[3.15] \*\*\*"
starRating([0,2,0,1,23]) -> "[4.73] \*\*\*\*\*\"
starRating([16,17,23,40,45]) -> "[3.57] \*\*\*\*\"

**_source: (Edabit(H))_**

### C66: Numerical Morphisms

A number num, that elevated to the power of another number k ends with the same num, it's automorphic.
5**2 = 25 // It's automorphic because "25" ends with 5
5**3 = 125 // It's automorphic because "125" ends with 5
76\*\*4 = 33362176 It's automorphic because "33362176" ends with 76
Given a non-negative integer num, implement a function that returns the string:

- "Polymorphic" if num is automorphic for every power from 2 up to 10.
- "Quadrimorphic" if num is automorphic for only four powers(any from 2 up to 10).
- "Dimorphic" if num is automorphic for only two powers (any power from 2 up to 10).
- "Enamorphic" if num is automorphic for only one power(any from 2 up to 10).
- "Amorphic" if num is not automorphic for any powers from 2 up to 10.
  Examples:
  powerMorphic(5) -> "Polymorphic" // from 2 up to 10, every power of 5 ends with 5
  powerMorphic(21) -> "Enamorphic"
  powerMorphic(7) -> "Dimorphic"
  powerMorphic(4) -> "Quadrimorphic"
  powerMorphic(10) -> "Amorphic"
  **_source: (Edabit(H))_**

### C65: Pentagonal Number

Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center dot on the Nth iteration. Return the number of dots that exist in the whole pentagon on the Nth iteration
Examples:
pentagonal(1) -> 1
pentagonal(2) -> 6
pentagonal(3) -> 16
pentagonal(8) -> 141
**_source: (Edabit(H))_**

### C64: How Many Days Between Two Dates

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

### C63: Length of a Nested Array

The .length property on an array will return the number of elements in the array. For example [1, [2,4]] will return 2 number 1 and array[2].
Write a function tha returns the total number of non-nested items in a nested array.
Examples:
getLength([1, [2,3]]) -> 3
getLength([1. [2, [3,4]]]) -> 4
getLength(1, [2], 1, [2], 1) -> 5
**_source: (Edabit(H))_**

### C62: Bitwise Operator to Check Odd, Regular Expression to Check Even

Create two functions:

- The first is isOdd() to check if a given number is odd using bitwise operator.
- The second is isEven() to check if a given input is even using regular expressions.
  Use of % operator is disallowed.
  Examples:
  isOdd(3) -> 'Yes' // use bitwise operator
  isOdd(58) -> 'No' // use bitwise operator
  isEven('0') -> 'Yes' //use Regular Expression
  isEven('-99') -> 'No' // use Regular Expression
  NOTE: Input will only be integers, for the second function, input will be numbers in string.
  **_source: (Edabit(H))_**

### C61: Number of Boomerangs

A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
examples: [3,7,3], [1, -1, 1], [5,6,5];
Create a function that returns the total number of boomerangs in an array.
To illustrate:
[3,7,3,2,1,5,1,2,2,-2,2,] -> 3 Boomerangs: [3,7,3], [1,5,1], [2,-2,2]

Examples:
countBoomerangs([9,5,9,5,1,1,1]) -> 2
countBoomerangs([1,7,1,7,1,7,1]) -> 5
countBoomerangs([4,4,4,9,9,9,9]) -> 0
**_source: (Edabit(H))_**

### C60: Oddish vs Evenish

Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
Examples:
oddishOrEvenish(43) -> Oddish // 4 + 3 = 7;
oddishOrEvenish(372) -> Evenish // 3 + 7 + 2 = 12;
**_source: (Edabit(H))_**

### C59: Converting One Binary String to Another

Write a function that returns the minimum number of swaps to convert the first binary string into the second.

Examples:
minSwaps('1100', '1001') -> 1;
minSwaps('1100', '0011') -> 2;
minSwaps('110011, '010111') -> 1;
minSwaps('1001', '1001') -> 0;
**_source: (Edabit(H))_**

### C58: LCM of Two Numbers

Write a function that returns the least common multiple(LCM) of two integers.
Examples:
lcm(9, 18) -> 18;
lcm(8, 5) -> 40;
lcm(17, 11) -> 187;
**_source: (Edabit(H))_**

### C57: The Frugal Gentleman

Atticus as been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a frugal gentleman(yet disliking looking like a cheapstake), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine
Examples:
chosenWine([{
{name: 'wineA', price: 8.99}
{name: 'wineB', price: 13.99}
{name: 'wineC', price: 10.99}
}]) -> wineC
chosenWine([{name: wineA, price: 8.99}]) -> wineA
chosenWine([]) -> null
**_source: (Edabit(H))_**

### C56: Tower of Hanoi

There are three towers. The objective of the game is to move all the disks over to tower#3, but you can't place a larger disk onto a smaller disk.
Create a function that takes a number (discs) and returns the minimum amount of steps needed to complete the game.
Examples:
towerHanoi(3) -> 7
towerHanoi(5) -> 31
towerHanoi(0) -> 0
**_source: (Edabit(H))_**

### C55: Pandigital Numbers

A pandigital number contains all digits(0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
Examples:
isPandigital(98140723568910) -> true
isPandigital(90864523148909) -> false // 7 is missing
isPandigital(11223344556677889900) -> true
**_source: (Edabit(H))_**

### C54: Seven Boom!

Create a function that takes an array of numbers and return "Boom!" if the digit appears in the array. Otherwise, return "there is no 7 in the array".
Examples:
sevenBoom([1,2,3,4,5,6,7]) -> Boom!
sevenBoom([8,6,33,100]) -> there is no 7 in the array.
sevenBoom([2, 55, 60, 97, 86]) -> Boom! // 97 contains the number seven. **_source: (Edabit(H))_**

### C53: repeatedrepeatedrepeaed

This challenge concerns strings such as: 'repeatedrepeatedrepeated' that are obtained by repeating a smaller string, which in this case is the string 'repeated'.
Write a function that, given a string, either:

- Returns false if the string isn't made by repeating a smaller string or ...
- Returns the number of repetitions if the string repeats a smaller string.
  Examples:
  isRepeated('repeatedrepeatedrepeated') -> 3
  isRepeated('overintellectualization) -> false
  isRepeated('nononononono) -> 6
  **_source: (Edabit(H))_**

### C52: Numbers in Strings

Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array
Examples:
numInStr(['1a', 'a', '2b', 'b']) -> ['1a', '2b]
numInStr(['abc', 'abc10']) -> ['abc10'];
NOTE: Try solving this without regex.
**_source: (Edabit(H))_**

### C51: Combinations

Create a function that takes a variable number of arguments, each argument representing the nuber of items in a group, and returns the number of permutations(combinations) of items that you could get by taking one item from each group
Examples:
combinations(2, 3) -> 6
combinations(3, 7, 4) -> 84
combinations(2, 3, 4, 5) -> 120
**_source: (Edabit(H))_**

### C50: Sum of Number Elements in an Array

Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
Examples:
numbersSum([1,2,"13","4","645"]) -> 3
numbersSum([true,false,"123","75"]) -> 0
**_source: (Edabit(I))_**

### C49: Function Factory

Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.
**_source:(Edabit(I))_**

### C48: Get Sum of People's Budget

Create a function that takes an array with objects and returns the sum of people's budgets.
Examples:
getBudgets([
{name: "John", age: 21, budget: 23000},
{name: "Steve", age: 32, budget: 40000},
{name: "Martin", age: 16, budget: 2700}
]) -> 65700
**_source: (Edabit(I))_**

### C47: Square Every Digit

Create a function that squares every digit of a number.
Examples:
squareDigits(9119) -> 811181
squareDigits(2483) -> 416649
**_source: (Edabit(I))_**

### C46: Remove Trailing and Leading Zeros

Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
Examples:
removeLeadingTrailing("230.000") -> "230"
removeLeadingTrailing("00402") -> "402"
removeLeadingTrailing("03.1400") -> "3.14"
removeLeadingTrailing("30") -> "30"
**_source: (Edabit(I))_**

### C45: Flattening an Array

I'm trying to write a function to flatten an array of subarrays into one array. (Suppose i am unaware there is a .flat() method in the Array prototype). In other words, i want to transform this: [[1,2], [3,4]] into [1,2,3,4].
Examples:
flatten([[1,2], [3,4]]) -> [1,2,3,4]
flatten [["a", "b"], ["c", "d"]] -> ["a", "b", "c", "d"].
**_source: (Edabit(I))_**

### C44: Special Arrays

An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
Examples:
isSpecialArray([2,7,4,9,6,1,6,3]) -> true
isSpecialArray([2,7,9,1,6,1,6,3]) -> false
// Index 2 has an odd number 9.
**_source: (Edabit(I))_**

### C43: Travelling Salesman Problem

A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of paths a salesman can travel, given n cities.
Examples:
paths(4) -> 24. paths(1) -> 1
**_source: (Edabit(I))_**

### C42: Move Capital Letters to the front

Create a function that moves all capital letters to the front of a word.
Examples:
capToFront("hApPy") -> "APhpy"
capToFront("shOrtCAKE") -> "OCAKEshrt"
**_source: (Edabit(I))_**

### C41: Adding Suffixes

Write a function that returns an anonymous function which transforms its input by adding a particular suffix at the end.
Examples:
add*ly = add_suffix("ly")
add_ly("hopeless") -> "hopelessly"
add_less = add_suffix("less")
add_less("fear") = "fearless"
\*\*\_source: (Edabit(I))*\*\*

### C40: Make a Circle with OOP

Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() and getPerimeter() which give both respective areas and perimeter(circumference). **_source: (Edabit(I))_**

### C39: Number Length Sort

Create a sorting function which sorts numbers not by numerical order, but by number length!. This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.
Example:
numberLenSort([1,54,1,2,463,2]) -> [1,1,2,2,54,463], ([9,8,7,6,5,4,31,2,1,3]) -> [9,8,7,6,5,4,2,1,3,31].
Notes: if two numbers have the same number of digits, return them in the order they first appeared(this makes it different to just sorting the numbers normally). **_source: (Edabit(I))_**

### C38: Basic Calculator

Create a function that takes two numbers and a mathematical operator(+, -, /, _)
and will perform a calculation with the given numbers. Examples: calculator(2, "+", 2) -> 4, (2, "_" 2) -> 4, (4, "/", 2) -> 2. If the input tries to divide by 0, return 'can't divide by 0!'.
**_source: (Edabit(I))_**

### C37: Find Nemo

You are given a string of words. You need to find the word "Nemo", and returns a string like this: 'I found Nemo at [the order of the word you find Nemo]!', if you can't find nemo, return 'I can't find Nemo :('. Examples: findNemo("I am finding Nemo !") -> 'I found Nemo at 4', ("Nemo is me") -> 'I found Nemo at 1'. If there are multiple Nemo's in the sentence, only return for the first one. **_source: (Edabit(I))_**

### C36: Triangular Number Sequence

The triangular Number sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots, and so on.
Write a function that gives the number of dots with its corresponding triangle number of the sequence. Examples: triangle(1) -> 1, (6) -> 21, (215) -> 23220; **_source: (Edabit(I))_**

### C35: Converting Objects to Arrays

Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array. Examples: toArray({a:1, b:2}) -> [["a", 1], ["b", 2]], ({shrimp:15, tots:12}) -> [["shrimp", 15], ["tots", 12]], ({}) -> []. Return an empty array if the object is empty. **_source: (Edabit(I))_**

### C34: A Redundant Function

Write a function redundant that takes in a string str and returns a function that returns str. Examples:
const f1 = redundant('apple'), f1() -> 'apple'.  
 const f3 = redundant(""), f3() -> "".
Your function should return a function, not a string. **_source: (Edabit(I))_**

### C33: Find the nth Tetrahedral Number

Create a function that takes an integer n and returns the nth tetrahedral number. Examples: tetra(2) -> 4, (5) -> 35, (6) -> 56. **_source: (Edabit(I))_**

### C32: How Much is True?

Create a function which returns the numer of true values there are in an array. Examples: countTrue([true, false, false, true, false]) -> 2, ([false, false, false, false]) -> 0, ([]) -> 0. Return 0 if given an empty array, array items are of the type bool(true/false) **_source: (Edabit(I))_**

### C31: Is the Number a Repdigit

A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not. Examples: isRepdigit(66) -> true, (0) -> true, (-11) -> false. The number 0 should return true. **_source: (Edabit(I))_**

### C30: Regex Series: Even Number?

Write a regular expression that matches only an even number. Numbers will be represented as strings. Examples: '2341' -> false, '5558' -> true. This challenge is designed to use Regex only. **_source: (Edabit(E))_**

### C29: Remove Every Vowel from a String

Create a function that takes a string and returns a new string with all vowels removed. Examples: removeVowels("I have never seen a lion) -> " hv nvr sn ln", ("We're gonna build a wall) -> "W'r gnn bld wll" **_source: (Edabit(E))_**

### C28: Chat Room Status

Write a function that returns the number of users in a chatroom based on the following rules: 1. If there is on one, return "no one online". 2. If there is 1 person, return "user1 online". 3. If there are 2 people, return "user1 and user2 online". 4. If there are n>2 people, return the first two names and add "and n-2 more online".
Examples: chatroomStatus([]) -> "no one online", (["daniscon"]) -> daniscon online, (["daniscon", "mai","wduw","2e2"]) -> "daniscon, mai and 2 more online". **_source: (Edabit(E))_**

### C27: Return the Highest and Lowest Numbers

Create a function that accepts a string of space seperated numbers and returns the highest and lowest number(as a string). Examples: highLow("1 2 3 4 5") -> "5 1", ("1 2 -3 4 5") -> "5 -3", ("13") -> "13 13". Notes: there will always be one number in the input string. **_source: (Edabit(E))_**

### C26: Maximum Edge of a Triangle

Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers. Examples: nextEdge(8,10) ->17, (9,2) ->10. **_source: (Edabit(E))_**

### C25: How Many Vowels?

Create a function that takes a string and returns the number(count) of vowels contained within it. Examples: countVowels('Celebration') -> 5, ('Palm') -> 1. **_source: (Edabit(E))_**

### C24: Sort an Array by String Length

Create a function that takes an array of strings and return an array, sorted from shortest to longest. Examples: sortByLength(['Google', 'Apple','Microsoft']) -> ['Apple', 'Google', 'Microsoft'], (['Turing', 'Einstein, 'Jung']) -> ['Jung', 'Turing', 'Einstein']. **_source: (Edabit(E))_**

### C23: Secret Society

A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function that takes in an array of names and returns the name of the secret society. Examples: societyName(['Adam','Sarah','Malcolm']) -> 'AMS', (['Harry','Newt','Luna','Cho']) -> CHLN. The secret society's name should be entirely uppercased. **_source: (Edabit(E))_**

### C22: Sort Numbers in Ascending Order

Create a function that takes an array of numbers and returns a new array, sorted in ascending order(smallest to biggest). - Sort numbers array in ascending order. - If the function's argument is null, an empty array, or undefined; return an empty array. - Return a new array of sorted number.
Examples: sortNumAscend([1,2,10,50,5]) -> [1,2,5,10,50], [80,29,4,-95,-24,85] -> [-95,-24,4,29,80,85], (null) -> [], ([]) -> []. **_source: (Edabit(E))_**

### C21: Reverse the Case

Get a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa. Examples: reverseCase('Happy Birthday') -> 'hAPPY bIRTHDAY', ('MANY THANKS') -> 'many thanks', ('sPoNtAnEoUs') -> 'SpOnTaNeOuS'. **_source: (Edabit(E))_**

### C20: Absolute Sum

Take an array of integers(positive or negative or both) and return the sum of the absolute value of each element. Examples: getAbsSum([2,-1,4,8,10]) -> 25, getAbsSum([-3,-4,-10,-2,-3]) -> 22, getAbsSum([2,4,6,8,10]) -> 30. **_source: (Edabit(E))_**

### C19: Phone Number Formatting

Create a function that takes an array of 10 numbers(btw 0 -9) and returns a string of those numbers formatted as a phone number(e.g (555) 555-5555). formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]) -> "(123) 456-7890". **_source: (Edabit(E))_**

### C18: Largest Swap

Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps. To illustrate: largestSwap(27) -> false, largestswap(43) -> false. If 27 is our input, we should return false because swapping the digits gives us 72 and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34. Numbers with two identical digits should yield true(you can't do better). **_source: (Edabit(E))_**

### C17: What's Hiding Amongst the Crowd?

A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
-The wanted word is in lowercase.
-The crowd of letters is all in uppercase.
-Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples: detectWord("UcUNDOSLNSaFYOWOtOL") -> "Cat". **_source: (Edabit(E))_**

### C16: Calculate the Mean

Create a function that takes an array of numbers and returns the mean value. Examples: mean([2,3,2,3]) ->2.50, mean([3,3,3,3,3]) ->3.00. Round to two decimal places, you can expect a number ranging from 0 to 10,000. **_source: (Edabit(E))_**

### C15: Matchstick Houses

Reference the source for further info. Examples matchHouses(1) ->6, matchHouses(4) ->21, matchHouses(87) ->436. **_source: (Edabit(E))_**

### C14: CAPS LOCK DAY is over!

Create a function that takes a string, if the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end. Examples: normalize("CAPS LOCK DAY IS OVER") -> "Caps lock day is over !", normalize("Today is not caps lock day") -> "Today is not caps lock day" Note: Each string is a sentence and should start with an uppercase character. **_source: (Edabit(E))_**

### C13: Count Instances of a Character in a String

Create a function that takes two strings as srguments and returns the number of times the first string(the single character) is found in the second string. Examples charCount("a", "edabit") ->1, charCount("c", "Chamer of secrets") ->1. **_source: (Edabit(E))_**

### C12: Add up the Numbers from a Single Number

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. Examples: addUp(4) ->10, addUp(600) ->180300. **_source: (Edabit(E))_**

### C11: Factorial of a Number

Create a function that receives a non-negative integer and returns the factorial of that number. Examples: fact(0) ->1, fact(6) ->720. **_source: (Edabit(E))_**

### C10: Upvotes vs Downvotes

Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculted by substracting the number of downvotes from upvotes. Examples: getVoteCount({upvotes:13, downvotes:0}) ->13, getVoteCount({upvotes:2, downvotes:33}) ->-31, getVoteCount({upvotes:132, downvotes:132}) ->0. You can expect only positive integers for vote counts. **_source: (Edabit(VE))_**

### C9: Frames per Second

Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. Examples frames(1,1) ->60, frames(10, 1) ->600, frames(10, 25) ->15000. **_source: (Edabit(VE))_**

### C8: Recursion: Length of a String

Write a function that returns the length of a string. Make your function recursive. Examples length("apple") ->5, length("a") ->1, length("") ->0. **_source: (Edabit(VE))_**

### C7: The Farm Problem

A farmer is asking you to tell how many legs can be counted among all his animals. The farmer breeds three species: chickens(2 legs), Cows(4 legs), pigs(4 legs). The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. Example animals(2,3,5) ->36. Order of animals passed is animals(chickens, cows, pigs). **_source: (Edabit(VE))_**

### C6: Football Points

Create a function that takes the number of wins, draws and losses and calculate the number of points a football team has obtained so far, wins(3pt), draw(1pt), lose(0pt). Example footballPoints(3,4,2) ->13. Inputs will be numbers greater than or equal to zero. **_source: (Edabit(VE))_**

### C5: Less than 100

Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. Example lessThan(22,35) ->true, lessthan(55,65) ->false. **_source: (Edabit(VE))_**

### C4: Area of a Triangle

Write a function that takes the base and height of a triangle and return its area. Examples triArea(3,2) ->3. **_source: (Edabit(VE))_**

### C3: Return the next number from the integer passed

Create a function that takes a number as an argument, increments the number by +1 and returns the result. Examples: addition(0) ->1, addition(9) ->10. **_source: (Edabit(VE))_**

### C2: Convert Minutes into Seconds

Write a function that takes an integer minutes and converts it into seconds. Examples convert(5) ->300. **_source: (Edabit(VE))_**

### C1: Return the Sum of two numbers

Create a function that takes two numbers as arguments and return their sum. Examples addition(3,2) ->5, addition(-3,-6) ->-9. **_source: (Edabit(VE))_**
