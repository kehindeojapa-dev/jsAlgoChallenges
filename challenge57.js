/*
Challenge57: The Frugal Gentleman

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

*/

function chosenWine(arr) {
  let priceArray = [];
  let realWine = [];
  if (arr.length == 0) {
    return null;
  } else if (arr.length == 1) {
    return arr[0].name;
  } else {
    arr.forEach((item) => {
      priceArray.push(item.price);
    });
    priceArray.sort((a, b) => a - b);

    const realPrice = priceArray[1];
    arr.forEach((item) => {
      if (item.price == realPrice) {
        realWine.push(item.name);
      }
    });
    return realWine[0];
  }
}

console.log(
  chosenWine([
    {
      name: "wineA",
      price: 8.99,
    },
    {
      name: "wineB",
      price: 13.99,
    },
    {
      name: "wineC",
      price: 10.99,
    },
  ])
);
