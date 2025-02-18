// Mocking the document's getElementById to simulate the calculator's screen
document.body.innerHTML = `
  <section class="result" id="result"></section>
`;

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
  let formula = screen.innerText;
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

// Jest test suite
describe("Calculator Tests", () => {
  beforeEach(() => {
    clearScreen();
  });

  test("Adding numbers updates the screen", () => {
    userClicked("1");
    userClicked("2");
    expect(screen.innerText).toBe("12");
  });

  test("Adding operations updates the screen", () => {
    userClicked("1");
    userClicked("+");
    userClicked("2");
    expect(screen.innerText).toBe("1+2");
  });

  test("Evaluates a simple expression correctly", () => {
    userClicked("3");
    userClicked("+");
    userClicked("4");
    userClicked("=");
    expect(screen.innerText).toBe(7);
  });

  test("Handles multiplication", () => {
    userClicked("2");
    userClicked("X");
    userClicked("3");
    userClicked("=");
    expect(screen.innerText).toBe(6);
  });

  test("Handles division by zero", () => {
    userClicked("1");
    userClicked("/");
    userClicked("0");
    userClicked("=");
    expect(screen.innerText).toBe(Infinity);
  });
});
