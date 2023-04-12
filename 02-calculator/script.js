let value1 = '';
let operator = '';
let value2 = '';
const result = document.getElementById('result');

let equal = false;


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
    });
  });

  // MATH OPERATORS
document.querySelectorAll('.MathOperations').forEach(function (button){
  button.addEventListener('click', function () {
    if (result.value){
      if (!operator){
        value1 = result.value;
      } else{
        value2 = result.value;
      }
      
      switch (this.value){
        case "-": {
          operator = this.value;
          
        }
      }
    }
  });
});


// Execute Math Operation




  // CLEAR BUTTON
const clearField = document.querySelector('.clear');
clearField.addEventListener('click',
    function () {
        value1 = '';
        value2 = '';
        operator = '';
        updateResult('');
    }
);

// BACK DELETE
const deleteNumber = document.querySelector('.back-delete');
deleteNumber.addEventListener('click',
  function () {
      if (!equal && result.value){
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

