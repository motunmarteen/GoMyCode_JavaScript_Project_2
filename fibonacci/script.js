function fibonacciSequence(numTerms) {
  let fibonacci = [0, 1]; // Initialize Fibonacci sequence with first two terms

  // Generate Fibonacci sequence up to numTerms
  for (let i = 2; i < numTerms; i++) {
    let nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2]; // Calculate next Fibonacci number
    fibonacci.push(nextFibonacci); // Add next Fibonacci number to sequence
  }

  return fibonacci.slice(0, numTerms); 
}

let numTerms = 10;
console.log(
  "Fibonacci sequence up to",
  numTerms,
  "terms:",
  fibonacciSequence(numTerms)
);
