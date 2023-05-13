let screen = document.getElementById("result");

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (e) => {
    let input = button.innerHTML;
    userClicked(input);
  });
});

const userClicked = (button) => {
  switch (button) {
    case "=":
      evaluate();
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

const addNumber = (num) => {
  screen.innerText = (screen.innerText + num).substring(0, 9);
};

const evaluate = () => {
  let formula = screen.innerHTML;
  screen.innerText = eval(formula);
};
