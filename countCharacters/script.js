// Count Characters: Create a function that counts the number of characters in a string.

let userWords = prompt("Type in here the word or sentences to check")

function countCharacters(wordsOrCharacters) {
    return wordsOrCharacters.length;
}

console.log(countCharacters(userWords))