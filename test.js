function convertStringToIntegerOrString(inputString) {
    // Check if the input string contains only numbers
    if (/^\d+$/.test(inputString)) {
      return parseInt(inputString, 10); // Convert the string to an integer
    } else {
      return inputString; // Return the input string as it is
    }
  }
  
  // Example usage:
  console.log(convertStringToIntegerOrString("123")); // Output: 123 (number)
  console.log(convertStringToIntegerOrString("abc")); // Output: "abc" (string)
  console.log(convertStringToIntegerOrString("456xyz")); // Output: "456xyz" (string)
  