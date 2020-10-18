/*
Chat Room Status

    Write a function that returns the number of users in a chatroom based on the following rules:
    1. If there is on one, return "no one online".
    2. If there is 1 person, return "user1 online".
    3. If there are 2 people, return "user1 and user2 online".
    4. If there are n>2 people, return the first two names and add "and n-2 more online".
Examples: chatroomStatus([]) -> "no one online", (["daniscon"]) -> daniscon online, (["daniscon", "mai","wduw","2e2"]) -> "daniscon, mai and 2 more online".
*/

function chatroomStatus(array) {

    switch (array.length) {
        case 0:
            onlineStatus = 'no one online'
            break;
        case 1:
            onlineStatus = `${array[0]} online`;
            break;
        case 2:
            onlineStatus = `${array[0]} and ${array[1]} online`;
            break;
        default:
            onlineStatus = `${array[0]}, ${array[1]} and ${array.length-2} more online`
            break; 
    }
    return onlineStatus;
}

console.log(chatroomStatus(['daniel', 'annie', 'seun', 'dannie', 'lionel']));