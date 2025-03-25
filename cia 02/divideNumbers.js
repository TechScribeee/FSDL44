function divideNumbers() {
    try {
      // Get user input for two numbers
      let num1 = parseFloat(prompt("Enter the first number:"));
      let num2 = parseFloat(prompt("Enter the second number:"));
  
      // Check if the second number is zero
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed!");
      }
  
      // Perform the division
      let result = num1 / num2;
      
      // Display the result
      alert(`The result is: ${result}`);
  
    } catch (error) {
      // Catch and display any error
      alert(`Error: ${error.message}`);
    }
  }
  
  // Call the function
  divideNumbers();
  