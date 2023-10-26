import { createHTML } from "./../render/renderTitle.js";
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

// An object containing title details.
const game = fetchTitle();

export const gameKey = game.id;
export const gameValue = game.title;

export async function titlePage() {}
