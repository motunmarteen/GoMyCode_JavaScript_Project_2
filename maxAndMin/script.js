// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
let numbers = [13, 91, 55, 206, 49];

function findMaximum(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

function findMinimum(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let min = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}


console.log("Maximum:", findMaximum(numbers));
console.log("Minimum:", findMinimum(numbers));
