let value1 = '';
let operator = '';
let value2 = '';
const result = document.getElementById('result');



// Add event listeners for all number buttons
document.querySelectorAll('.NumberButton').forEach(function (button) {
    button.addEventListener('click', function () {
        console.log(this.value);
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


// Update the result element with a given value
function updateResult(value) {
    result.value = value;
    console.log(result.value);
  }

