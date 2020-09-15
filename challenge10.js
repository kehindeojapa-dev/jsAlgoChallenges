/*
Upvotes vs Downvotes

    Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculted by substracting the number of downvotes from upvotes. Examples: getVoteCount({upvotes:13, downvotes:0}) ->13, getVoteCount({upvotes:2, downvotes:33}) ->-31, getVoteCount({upvotes:132, downvotes:132}) ->0. You can expect only positive integers for vote counts.
*/

function getVoteCount({upvotes: x,downvotes:y}) {
    if (x < 0 || y < 0) {
        return "Enter number from 0";
    } else {
        return x - y;
    }
}
