import { titleContainer, url } from "../pages/title.js";
import { createHTML } from "./../render/renderTitle.js";

export let titleSpecific;

// fetching title for title page and rendering the html
export async function fetchTitle() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    createHTML(details);
    titleSpecific = details;
    return details;
  } catch (error) {
    console.log(error);
    titleContainer.innerHTML = message("error", error);
  }
}
