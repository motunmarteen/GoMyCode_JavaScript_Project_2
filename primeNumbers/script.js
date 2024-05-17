
let number = Number(prompt("What number do you want to check? "))

function isPrime(number) {
    // If the number is less than 2, it's not prime
    if (number < 2) {
        return false;
    }
    // If the number is 2, it's prime
    else if (number === 2) {
        return true;
    }
    // If the number is even, it's not prime
    else if (number % 2 === 0) {
        return false;
    }
    // Check divisibility up to the square root of the number
    else {
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) {
                return false; 
            }
        }
        return true; 
    }
}

console.log(number, "is prime?", isPrime(number)); // Output: 17 is prime? true
