// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: multiply n by the factorial of n-1
    else {
        return n * factorial(n - 1);
    }
}

let number = 5;
console.log("Factorial of", number, "is", factorial(number)); 
