// Define variables to hold the operands and operator, and get the result element
let operand1 = '';
let operator = '';
let operand2 = '';
const result = document.getElementById('result');

// Add event listeners for all number buttons
document.querySelectorAll('.number').forEach(function (button) {
  button.addEventListener('click', function () {
    // If there's no operator, add the clicked digit to the first operand
    if (!operator) {
      operand1 += this.value;
      updateResult(operand1);
    } else {
      // Otherwise, add the clicked digit to the second operand
      operand2 += this.value;
      updateResult(operand2);
    }
  });
});

// Add event listeners for all operator buttons
document.querySelectorAll('.operator').forEach(function (button) {
  button.addEventListener('click', function () {
    operator = this.value;
  });
});

// Add event listener for the equal button
document.querySelector('.equal').addEventListener('click', calculate);


// Add event listener for the clear button
document.querySelector('.clear').addEventListener('click', clearResult);

// Add event listener for the keydown event
document.addEventListener('keydown', function (event) {
  // If the key pressed is a digit, add it to the appropriate operand
  if (event.key >= '0' && event.key <= '9') {
    if (!operator) {
      operand1 += event.key;
      updateResult(operand1);
    } else {
      operand2 += event.key;
      updateResult(operand2);
    }
  } 
  // If the key pressed is an operator, set it as the current operator
  else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    operator = event.key;
  } 
  // If the key pressed is Enter, calculate the result
  else if (event.key === 'Enter') {
    calculate();
  }
  // If the key pressed is Escape, clear the result
  else if (event.key === 'Escape') {
    clearResult();
  }
});


// Calculate the result based on the current operands and operator
function calculate() {
  let resultValue;
  switch (operator) {
    case '+':
      resultValue = Number(operand1) + Number(operand2);
      break;
    case '-':
      resultValue = Number(operand1) - Number(operand2);
      break;
    case '*':
      resultValue = Number(operand1) * Number(operand2);
      break;
    case '/':
      resultValue = Number(operand1) / Number(operand2);
      break;
    default:
      resultValue = '';
  }
  // Update the result element with the calculated value
  updateResult(resultValue);
  // Set the first operand to the result, and clear the other operands and operator
  operand1 = resultValue.toString();
  operand2 = '';
  operator = '';
}

// Clear all operands and operator, and update the result element with an empty string
function clearResult() {
  operand1 = '';
  operator = '';
  operand2 = '';
  updateResult('');
}

// Update the result element with a given value
function updateResult(value) {
  result.value = value;
}
