// Filter Array: Implement a function that filters out elements from an array based on a given condition.


function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
let evenNumbers = filterArray(numbers, function(num) {
    return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

// Filter out numbers greater than 5
let numbersGreaterThan5 = filterArray(numbers, function(num) {
    return num > 5;
});

console.log("Numbers greater than 5:", numbersGreaterThan5);
