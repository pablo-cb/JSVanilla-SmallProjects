let value1 = '';
let operator = '';
let value2 = '';
const result = document.getElementById('result');
let equalValidator = false;
let equalValidatorButton = false;

// Preview operation
const value1Preview = document.getElementById('value1Display');
const operatorPreview = document.getElementById('operatorDisplay');
const value2Preview = document.getElementById('value2Display');

  // EQUAL ACTION
const equal = document.querySelector('.equalButton');
equal.addEventListener('click', function(){
  if (value2) {
    makeMathOperation();
    equalValidatorButton = true;
  }
});
  

// NUMBERS
document.querySelectorAll('.NumberButton').forEach(function (button) {
    button.addEventListener('click', function () {
        if (equalValidator){
          if (equalValidatorButton){
            clearAll();
            equalValidatorButton = false;
            equalValidator = false;
            updateResult(value1);
          } else{
            const tempNum = result.value;
            const operatorTemp = operator;
            clearAll();
            value1 = tempNum;
            operator = operatorTemp;
            equalValidator = false;
          }
        }
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
    if (!equalValidator){  
      if (!operator){
        value1 = result.value;
        operator = this.value;
        updateResult(value1);
      } else {
        if (value2) {
          makeMathOperation();
          operator = this.value;
          updateResult(value1);
        } else {
          operator = this.value;
          updateResult(value1);
        }
      }
    // }
    } else {
      const resultTemp = result.value;
      clearAll();
      value1 = resultTemp;
      equalValidator = false;
      operator = this.value;
      updateResult(value1);
    }
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
      case "+": {
        resultNum = parseFloat(value1) + parseFloat(value2);
        break;
      }
      case "*": {
        resultNum = parseFloat(value1) * parseFloat(value2);
        break;
      }
      case "/": {
        resultNum = parseFloat(value1) / parseFloat(value2);
        break;
      }
    }
    equalValidator = true;
    clearAll();
    value1 = resultNum.toString();
    updateResult(value1);
  }
}


  // CLEAR BUTTON
const clearField = document.querySelector('.clear');
clearField.addEventListener('click', function(){
  equalValidator = false;
  clearAll();
});

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
      if (result.value && !equalValidator){
        console.log("entra")
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

// UPDATE RESULT
function updateResult(value) {
    result.value = value;
    if (!equalValidator){
      updatePreview();
    }
  }


// UPDATE PREVIEW
function updatePreview(){
  if (value1 && operator){
    value1Preview.innerText = value1;
    value1Preview.classList.remove('inactive');
    operatorPreview.innerText = operator;
    operatorPreview.classList.remove('inactive');
  } else {
    value1Preview.classList.add('inactive');
    operatorPreview.classList.add('inactive');
  }
  if (value2){
    value2Preview.innerText = value2;
    value2Preview.classList.remove('inactive');
  } else {
    value2Preview.classList.add('inactive');
  }
}