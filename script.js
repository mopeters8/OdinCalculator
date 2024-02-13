console.log("script loaded..");

function operate(operator, num1, num2) {
  if (operator === null || num1 === null || num2 === null) {
    return "error in operating";
  }

  let total = 0;
  if (operator === "+") {
    total = add(num1, num2);
  } else if (operator === "*") {
    total = multiply([num1, num2]);
  } else if (operator === "-") {
    total = subtract(num1, num2);
  } else if (operator === "/") {
    total = divide(num1, num2);
  }

  return total;
}

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (array) {
  return array.reduce((total, num1) => total * num1);
};

const divide = function (num1, num2) {
  if (num1 === 0 || num2 === 0) {
    console.log("divided by 0");
    return 0;
  }

  return num1 / num2;
};

// Functions for receiving input

let firstNum = "";
let operator = "";
let secondNum = "";

function addButtonEvents() {
  console.log("adding button events..");
  const parentCalcButtons = document.getElementById("calcButtons");
  const allChildButtons = parentCalcButtons.querySelectorAll("div");

  allChildButtons.forEach((button) => {
    button.addEventListener("click", () => {
      //   updateDisplay(button.textContent);

      if (button.classList.contains("number") && operator === "") {
        firstNum += button.textContent;
      } else if (button.classList.contains("operand") && operator === "") {
        operator = button.textContent;
      } else if (!button.classList.contains("empty")) {
        secondNum += button.textContent;
      }
      console.log(firstNum + " " + operator + " " + secondNum);
    });
  });
}

// Display
const calcDisplay = document.querySelector(".calcDisplay");
let currentDisplayValue = "";

function updateDisplay(newDisVal) {
  currentDisplayValue += newDisVal;
  calcDisplay.textContent = currentDisplayValue;
}

function clearDisplay() {
  currentDisplayValue = "";
  calcDisplay.textContent = "empty";
  firstNum = "";
  operator = "";
  secondNum = "";
}

addButtonEvents();
