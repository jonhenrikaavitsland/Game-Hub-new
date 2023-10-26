import { updateCartLink } from "../localStorage/cartLink.js";
import { gameKey, gameValue } from "../pages/title.js";
import { titleButton } from "../index.js";

const updatedButton = "CONTINUE SHOPPING";

export function checkToUpdateButton() {
  if (localStorage.getItem(gameKey)) {
    titleButton.innerHTML = updatedButton;
  }
}

// adds the title to local storage
export function buttonAction() {
  localStorage.setItem(gameKey, gameValue);
  checkToUpdateButton();
  updateCartLink();
}

// redirects if the button has changed
export function buttonRedirect() {
  if (this.innerHTML === updatedButton) {
    window.location = "../index.html";
  }
}
