/*
    Challenge41: Adding Suffixes

    Write a function that returns an anonymous function 
    which transforms its input by adding a particular 
    suffix at the end. 
Examples:
 add_ly = add_suffix("ly")
add_ly("hopeless") -> "hopelessly"
add_less = add_suffix("less")
add_less("fear") = "fearless"
 */


const add_suffix = (suffix) => {

    const add = (word, word2) => {
        return  word + suffix;
    }

    return add;
}

// const add_less = add_suffix('less');
// console.log(add_less('fear'))

