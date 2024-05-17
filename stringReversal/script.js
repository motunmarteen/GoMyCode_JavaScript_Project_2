// Reverse a String: Write a function that reverses a given string.

let userString = prompt("Type in a word or a statement in here")

function stringReversal(wordOrSentence) {
    return wordOrSentence.split("").reverse().join("");
}

console.log(stringReversal(userString))