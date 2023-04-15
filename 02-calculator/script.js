let value1 = '';
let operator = '';
let value2 = '';
const result = document.getElementById('result');

  // EQUAL ACTION
const equal = document.querySelector('.equalButton');
equal.addEventListener('click', function(){if (value2) {makeMathOperation()}});
  

// Add event listeners for all number buttons
document.querySelectorAll('.NumberButton').forEach(function (button) {
    button.addEventListener('click', function () {
        // If there's no operator, add the clicked digit to the first operand
        if (!operator) {
          value1 += this.value;
          updateResult(value1);
        } else {
          // Otherwise, add the clicked digit to the second operand
          value2 += this.value;
          updateResult(value2);
        }
      }
    );
  });

  // MATH OPERATORS
document.querySelectorAll('.MathOperations').forEach(function (button){
  button.addEventListener('click', function () {
    // if (result.value){
      if (!operator){
        value1 = result.value;
        operator = this.value;
      } else {
        if (value2) {
          makeMathOperation();
          operator = this.value;
        }
      }
    // }
  });
});

// Execute Math Operation
function makeMathOperation() {
  if (result.value && value1 && operator){
    value2 = result.value;
    let resultNum = '';
    switch (operator){
      case "-": {
        resultNum = parseFloat(value1) - parseFloat(value2);
        break;
      }
    }
    clearAll();
    value1 = resultNum.toString();
    updateResult(value1);
  }
}


  // CLEAR BUTTON
const clearField = document.querySelector('.clear');
clearField.addEventListener('click', clearAll);

function clearAll() {
  value1 = '';
  value2 = '';
  operator = '';
  updateResult('');
}

// BACK DELETE
const deleteNumber = document.querySelector('.back-delete');
deleteNumber.addEventListener('click',
  function () {
      if (result.value){
        if (!operator){
          value1 = value1.slice(0,-1);
          updateResult(value1);
        } else {
          value2 = value2.slice(0,-1);
          updateResult(value2);
        }
      }
  }
);



// Update the result element with a given value
function updateResult(value) {
    result.value = value;
  }

