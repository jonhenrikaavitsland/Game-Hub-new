import { fetchTitle } from "../data/fetchTitle.js";
import { titleSpecific } from "../data/fetchTitle.js";
import { updateCartLink } from "../localStorage/cartLink.js";

// location for rendering html
export const titleContainer = document.querySelector(".title-wrap");
export const title = document.querySelector("title");

// getting querystring from parent page
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
export const id = params.get("id");

// url for fetching title details
export const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

// this code runs when entering title page, it also holds functions that works with the button element on the page.
// I found that I had to include it all inside this function to run it without errors.
export async function titlePage() {
  await fetchTitle();
  const titleButton = document.querySelector(".cta-sale");

  const updatedButton = "CONTINUE SHOPPING";

  let gameKey; // id
  let gameValue; // title

  // creates value to be used for the next few functions.
  function findVariables() {
    try {
      gameKey = titleSpecific.id;
      gameValue = titleSpecific.title;
    } catch (error) {
      console.log(error);
    }
  }

  // updates the buttons textContent if the games title has been stored in localStorage as a value.
  function checkToUpdateButton() {
    if (localStorage.getItem(gameKey)) {
      titleButton.textContent = updatedButton;
    }
  }

  // adds the title to local storage, then updates the button and cart link in the top.
  function buttonAction() {
    localStorage.setItem(gameKey, gameValue);
    checkToUpdateButton();
    updateCartLink();
  }

  // redirects if the button has changed
  function buttonRedirect() {
    if (this.innerHTML === updatedButton) {
      location.href = "../../games/";
    }
  }

  findVariables();
  checkToUpdateButton();
  titleButton.addEventListener("click", buttonRedirect);
  titleButton.addEventListener("click", buttonAction);
}


