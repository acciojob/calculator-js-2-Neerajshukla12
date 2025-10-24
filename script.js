//your JS code here. If required.
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.id;

    if (id === "C") {
      display.value = "";
    } else if (id === "back") {
      display.value = display.value.slice(0, -1);
    } else if (id === "equal") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      if (id === "mul") display.value += "*";
      else if (id === "minus") display.value += "-";
      else display.value += btn.innerText;
    }
  });
});
