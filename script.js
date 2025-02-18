const screen = document.getElementById("result");

// Function to simulate user clicks
const userClicked = (button) => {
  switch (button) {
    case "=":
      evaluate();
      break;
    case "C":
      clearScreen();
      break;
    case ".":
      addNumber(".");
      break;
    case "/":
      addNumber("/");
      break;
    case "X":
      addNumber("*");
      break;
    case "+":
      addNumber("+");
      break;
    case "-":
      addNumber("-");
      break;
    default:
      addNumber(button);
  }
};

// Function to add numbers to the screen
const addNumber = (num) => {
  screen.innerText = (screen.innerText + num).substring(0, 9);
};

// Function to evaluate the expression
const evaluate = () => {
  let formula = screen.innerText; // Changed from innerHTML to innerText
  try {
    screen.innerText = eval(formula) || ""; // Use eval to compute the formula
  } catch (error) {
    screen.innerText = "Error"; // Show error if evaluation fails
  }
};

// Function to clear the screen
const clearScreen = () => {
  screen.innerText = "";
};
