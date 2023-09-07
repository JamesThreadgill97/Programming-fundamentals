Brief
Create a calculate.js file that exports a single function, calculate();
calculate() should accept three arguments: two numbers and a string.
If the string is one of the following signs - "+", "-", "/", "*" - the function should return the result of the relevant mathematical operator on the two numbers.
Examples:

calculate(1, 2, "+") -> 3

calculate(2, 4, "-") -> -2

Create an index.js file that imports the calculate() function.

When run, this file should prompt the user to enter numbers and a sign

The program should then output the result.

If the result is greater than 0, it should be output in red text.
If the result is below zero, it should be output in green text.
Any error messages or zero itself should be output in orange text.
After displaying the result, the program should prompt the user again for another calculation

The program should be runnable using an NPM script.
