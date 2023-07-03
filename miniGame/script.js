let randomIndex = Math.floor(Math.random() * 9);
let buttons = document.getElementsByClassName("button");

function checkButton(button) {
  if (button === buttons[randomIndex]) {
    alert("Ви програли! Натиснули на заборонену кнопку.")
    location.reload();
  } else {
    button.style.backgroundColor = "green";
  }
}
