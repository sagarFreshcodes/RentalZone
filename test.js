function generateAscendingNumbers(n) {
    if (n <= 0) {
      return "Please provide a positive number greater than zero.";
    }
  
    const result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
  
    return result;
  }
  
  // Example usage:
  const number = 1;
  const ascendingNumbers = generateAscendingNumbers(number);
  console.log(ascendingNumbers); // Output: [1, 2, 3, 4, 5]
  