const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.id;

    if (id === "C") {
      // Clear all
      display.value = "";
    } else if (id === "back") {
      // Clear one character
      display.value = display.value.slice(0, -1);
    } else if (id === "equal") {
      // Evaluate expression
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (id === "divi") {
      display.value += "/";
    } else if (id === "plus") {
      display.value += "+";
    } else if (id === "-") {
      display.value += "-";
    } else if (id === "*") {
      display.value += "*";
    } else if (id === "op") {
      display.value += "(";
    } else if (id === "cl") {
      display.value += ")";
    } else if (id === "dot") {
      display.value += ".";
    } else {
      // For all number buttons
      display.value += id;
    }
  });
});
