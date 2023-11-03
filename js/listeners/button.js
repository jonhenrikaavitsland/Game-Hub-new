import { getId } from "../data/getId.js";
import { url } from "../data/constants.js";
import { getData } from "../data/fetchAPI.js";
import { findKey, findValue } from "../localStorage/findVariables.js";
import { updateCartLink } from "../localStorage/updateCartLink.js";

export async function button() {
  const id = getId();
  const newUrl = url + `/${id}`;
  const game = await getData(newUrl);

  const updatedButton = "CONTINUE SHOPPING";
  const titleButton = document.querySelector(".cta-sale");

  let gameKey = findKey(game);
  let gameValue = findValue(game);
  console.log(gameKey, gameValue);

  // redirects if the button has changed
  function buttonRedirect() {
    if (titleButton.innerHTML === updatedButton) {
      location.href = "../../games/";
    }
  }

  // adds the title to local storage, then updates the button and cart link in the top.
  function buttonAction() {
    localStorage.setItem(gameKey, gameValue);
    checkToUpdateButton();
    updateCartLink();
  }

  // updates the buttons textContent if the games title has been stored in localStorage as a value.
  function checkToUpdateButton() {
    if (localStorage.getItem(gameKey)) {
      titleButton.textContent = updatedButton;
    }
  }

  console.log(titleButton);
  checkToUpdateButton();
  titleButton.addEventListener("click", buttonRedirect);
  titleButton.addEventListener("click", buttonAction);
}
