import { titleContainer, url } from "../pages/title.js";
import { createHTML } from "./../render/renderTitle.js";

// fetching title for title page and rendering the html
export async function fetchTitle() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    createHTML(details);
    return details;
  } catch (error) {
    console.log(error);
    titleContainer.innerHTML = message("error", error);
  }
}
