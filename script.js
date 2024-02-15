console.log("script loaded..");

let firstNum = "";
let operator = "";
let secondNum = "";

function operate() {
  console.log("calculating...");
  if (
    operator === undefined ||
    firstNum === undefined ||
    secondNum === undefined
  ) {
    return "error in operating";
  }

  let num1 = Number(firstNum);
  let num2 = Number(secondNum);

  let total = 0;
  if (operator === "+") {
    total = add(num1, num2);
  } else if (operator === "*") {
    total = multiply([num1, num2]);
  } else if (operator === "-") {
    total = subtract(num1, num2);
  } else if (operator === "/") {
    if (firstNum == 0 || secondNum == 0) {
      total = "DIVDED BY ZERO DETECTED. ROBOT EARTH INVASION INITIATED.";
    } else {
      total = divide(num1, num2);
    }
  }

  console.log(total);
  finishedOperation(total);
  updateDisplay(firstNum);
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
function addNumberButtonEvents() {
  console.log("adding number events..");
  const allNumberButtons = document.querySelectorAll(".number");

  allNumberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (operator === "") {
        firstNum += button.textContent;
        updateDisplay(firstNum);
      } else if (!operator !== "") {
        secondNum += button.textContent;
        updateDisplay(secondNum);
      }
      console.log(
        "Number button pressed..\n" +
          firstNum +
          " " +
          operator +
          " " +
          secondNum
      );
    });
  });
}

function addOperandButtonEvents() {
  console.log("adding operand events..");
  const allOperandButtons = document.querySelectorAll(".operand");

  allOperandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      operator = button.textContent;
      console.log(
        "Operand button pressed..\n" +
          firstNum +
          " " +
          operator +
          " " +
          secondNum
      );
    });
  });
}

// Display
const calcDisplay = document.querySelector(".calcDisplay");
let currentDisplayValue = "";

function updateDisplay(newDisVal) {
  currentDisplayValue = newDisVal;
  calcDisplay.textContent = currentDisplayValue;
}

function finishedOperation(newFirstNum) {
  firstNum = newFirstNum;
  operator = "";
  secondNum = "";
}

function clearDisplay() {
  firstNum = "";
  operator = "";
  secondNumNum = "";
  currentDisplayValue = "";
  calcDisplay.textContent = "0";
}

addNumberButtonEvents();
addOperandButtonEvents();
