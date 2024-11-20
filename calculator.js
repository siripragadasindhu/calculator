const display = document.getElementById('display');

let currentInput = '';
let previousInput = '';
let operator = null;

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      // Clear all inputs
      currentInput = '';
      previousInput = '';
      operator = null;
      display.textContent = '0';
    } else if (['+', '-', '*', '/'].includes(value)) {
      // Handle operators
      if (operator && previousInput !== '' && currentInput !== '') {
        currentInput = calculate(previousInput, currentInput, operator);
        display.textContent = currentInput;
      }
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else if (value === '=') {
      // Handle equals
      if (operator && previousInput !== '' && currentInput !== '') {
        currentInput = calculate(previousInput, currentInput, operator);
        display.textContent = currentInput;
        operator = null;
        previousInput = '';
      }
    } else {
      // Handle numbers and decimal points
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

function calculate(a, b, operator) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : 'Error';
    default: return '';
  }
}