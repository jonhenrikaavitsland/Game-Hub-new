import { checkToUpdateButton } from "./checkToUpdateButton.js";

// adds the title to local storage, then updates the button and cart link in the top.
export function buttonAction(key, value, button, textContent) {
  localStorage.setItem(key, value);
  checkToUpdateButton(button, key, textContent);
  // updateCartLink();
}
