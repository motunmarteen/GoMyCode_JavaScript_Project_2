// Sum of Array: Create a function that calculates the sum of all elements in an array.
let arr = [21, 24, 27, 34, 17, 55, 11];

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }

    return sum;
}

console.log("Sum:", sumArray(arr));
