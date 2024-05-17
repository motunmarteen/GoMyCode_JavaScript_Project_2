// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

let userWords = prompt("Type in here to capitalize your words or sentences")

function wordsCapitalize(sentence) {
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

console.log(wordsCapitalize(userWords))