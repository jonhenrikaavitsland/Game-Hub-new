import { createHTML } from "../../render/renderTitle.js";

// location for rendering html
export const titleContainer = document.querySelector(".title-wrap");
export const title = document.querySelector("title");

// getting querystring from parent page
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// url for fetching title details
const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

// fetching title for title page and rendering the html
async function fetchTitle() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHTML(details);
  } catch (error) {
    console.log(error);
    titleContainer.innerHTML = message("error", error);
  }
}

fetchTitle();
