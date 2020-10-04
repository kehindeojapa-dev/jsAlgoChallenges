# JS Algorithm Challenges


### C30: Regex Series: Even Number?

Write a regular expression that matches only an even number. Numbers will be represented as strings. Examples: '2341' -> false, '5558' -> true. This challenge is designed to use Regex only.



### C29: Remove Every Vowel from a String

Create a function that takes a string and returns a new string with all vowels removed. Examples: removeVowels("I have never seen a lion) -> " hv nvr sn ln", ("We're gonna build a wall) -> "W'r gnn bld  wll"



### C28: Chat Room Status

Write a function that returns the number of users in a chatroom based on the following rules:
    1. If there is on one, return "no one online".
    2. If there is 1 person, return "user1 online".
    3. If there are 2 people, return "user1 and user2 online".
    4. If there are n>2 people, return the first two names and add "and n-2 more online".
Examples: chatroomStatus([]) -> "no one online", (["daniscon"]) -> daniscon online, (["daniscon", "mai","wduw","2e2"]) -> "daniscon, mai and 2 more online".



### C27: Return the Highest and Lowest Numbers

Create a function that accepts a string of space seperated numbers and returns the highest and lowest number(as a string). Examples: highLow("1 2 3 4 5") -> "5 1", ("1 2 -3 4 5") -> "5 -3", ("13") -> "13 13". Notes: there will always be one number in the input string.        (Edabit(E))



### C26: Maximum Edge of a Triangle

Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers. Examples: nextEdge(8,10) ->17, (9,2) ->10.      (Edabit(E))


### C25: How Many Vowels?

Create a function that takes a string and returns the number(count) of vowels contained within it. Examples: countVowels('Celebration') -> 5, ('Palm') -> 1.        (Edabit(E))


### C24: Sort an Array by String Length

Create a function that takes an array of strings and return an array, sorted from shortest to longest. Examples: sortByLength(['Google', 'Apple','Microsoft']) -> ['Apple', 'Google', 'Microsoft'], (['Turing', 'Einstein, 'Jung']) -> ['Jung', 'Turing', 'Einstein'].      (Edabit(E))



### C23: Secret Society

A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function that takes in an array of names and returns the name of the secret society. Examples: societyName(['Adam','Sarah','Malcolm']) -> 'AMS', (['Harry','Newt','Luna','Cho']) -> CHLN. The secret society's name should be entirely uppercased.      (Edabit(E))



### C22: Sort Numbers in Ascending Order

Create a function that takes an array of numbers and returns a new array, sorted in ascending order(smallest to biggest).
    - Sort numbers array in ascending order.
    - If the function's argument is null, an empty array, or undefined; return an empty array.
    - Return a new array of sorted number.
Examples: sortNumAscend([1,2,10,50,5]) -> [1,2,5,10,50], [80,29,4,-95,-24,85] -> [-95,-24,4,29,80,85], (null) -> [], ([]) -> [].        (Edabit(E))



### C21: Reverse the Case

Get a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa. Examples: reverseCase('Happy Birthday') -> 'hAPPY bIRTHDAY', ('MANY THANKS') -> 'many thanks', ('sPoNtAnEoUs') -> 'SpOnTaNeOuS'.        (Edabit(E))



### C20: Absolute Sum

Take an array of integers(positive or negative or both) and return the sum of the absolute value of each element. Examples: getAbsSum([2,-1,4,8,10]) -> 25, getAbsSum([-3,-4,-10,-2,-3]) -> 22, getAbsSum([2,4,6,8,10]) -> 30.      (Edabit(E))



### C19: Phone Number Formatting

Create a function that takes an array of 10 numbers(btw 0 -9) and returns a string of those numbers formatted as a phone number(e.g (555) 555-5555). formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]) -> "(123) 456-7890".      (Edabit(E))



### C18: Largest Swap

Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps. To illustrate: largestSwap(27) -> false, largestswap(43) -> false. If 27 is our input, we should return false because swapping the digits gives us 72 and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34. Numbers with two identical digits should yield true(you can't do better).        (Edabit(E))



### C17: What's Hiding Amongst the Crowd?

A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
    -The wanted word is in lowercase.
    -The crowd of letters is all in uppercase.
    -Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples: detectWord("UcUNDOSLNSaFYOWOtOL") -> "Cat".       (Edabit(E))




### C16: Calculate the Mean

Create a function that takes an array of numbers and returns the mean value. Examples: mean([2,3,2,3]) ->2.50, mean([3,3,3,3,3]) ->3.00. Round to two decimal places, you can expect a number ranging from 0 to 10,000.       (Edabit(E))



### C15: Matchstick Houses

Reference the source for further info. Examples matchHouses(1) ->6, matchHouses(4) ->21, matchHouses(87) ->436.        (Edabit(E))



### C14: CAPS LOCK DAY is over!

Create a function that takes a string, if the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end. Examples: normalize("CAPS LOCK DAY IS OVER") -> "Caps lock day is over !", normalize("Today is not caps lock day") -> "Today is not caps lock day"    Note: Each string is a sentence and should start with an uppercase character.       (Edabit(E))



### C13: Count Instances of a Character in a String

Create a function that takes two strings as srguments and returns the number of times the first string(the single character) is found in the second string. Examples charCount("a", "edabit") ->1, charCount("c", "Chamer of secrets") ->1.         (Edabit(E))



### C12: Add up the Numbers from a Single Number

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. Examples: addUp(4) ->10, addUp(600) ->180300.      (Edabit(E))



### C11: Factorial of a Number

Create a function that receives a non-negative integer and returns the factorial of that number. Examples: fact(0) ->1, fact(6) ->720.      (Edabit(E))


### C10: Upvotes vs Downvotes

Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculted by substracting the number of downvotes from upvotes. Examples: getVoteCount({upvotes:13, downvotes:0}) ->13, getVoteCount({upvotes:2, downvotes:33}) ->-31, getVoteCount({upvotes:132, downvotes:132}) ->0. You can expect only positive integers for vote counts.



### C9: Frames per Second

Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. Examples frames(1,1) ->60, frames(10, 1) ->600, frames(10, 25) ->15000.       (Edabit(VE))



### C8: Recursion: Length of a String

Write a function that returns the length of a string. Make your function recursive. Examples length("apple") ->5, length("a") ->1, length("") ->0.



### C7: The Farm Problem

A farmer is asking you to tell how many legs can be counted among all his animals. The farmer breeds three species: chickens(2 legs), Cows(4 legs), pigs(4 legs). The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. Example animals(2,3,5) ->36. Order of animals passed is animals(chickens, cows, pigs).



### C6: Football Points

Create a function that takes the number of wins, draws and losses and calculate the number of points a football team has obtained so far, wins(3pt), draw(1pt), lose(0pt). Example footballPoints(3,4,2) ->13. Inputs will be numbers greater than or equal to zero.        (Edabit(VE))



### C5: Less than 100

Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. Example lessThan(22,35) ->true, lessthan(55,65) ->false.        (Edabit(VE))



### C4: Area of a Triangle

Write a function that takes the base and height of a triangle and return its area. Examples triArea(3,2) ->3.       (Edabit(VE))



### C3: Return the next number from the integer passed

Create a function that takes a number as an argument, increments the number by +1 and returns the result. Examples: addition(0) ->1, addition(9) ->10.      (Edabit(VE))



### C2: Convert Minutes into Seconds

Write a function that takes an integer minutes and converts it into seconds. Examples convert(5) ->300.     (Edabit(VE))



### C1: Return the Sum of two numbers

Create a function that takes two numbers as arguments and return their sum. Examples addition(3,2) ->5, addition(-3,-6) ->-9.   ( Edabit(VE)) 




