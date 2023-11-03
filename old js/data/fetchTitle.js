// import { titleContainer, url } from "../pages/title.js";
// import { createHTML } from "./../render/renderTitle.js";
// import { displayError } from "../error/displayError.js";

let titleSpecific;

// fetching title for title page and rendering the html
async function fetchTitle() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    createHTML(details); // renders the html for the title page.
    titleSpecific = details; // updates title element on the specific title page
    return details;
  } catch (error) {
    console.log("An error occurred", error);
    titleContainer.innerHTML = displayError(
      "An error occurred when fetching game details, please try again later or contact customer service if the error persists"
    );
  }
}
