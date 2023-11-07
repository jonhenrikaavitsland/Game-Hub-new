import { getId } from "../data/getId.js";
import { url } from "../data/constants.js";
import { getData } from "../data/fetchAPI.js";
import { createHTML } from "../render/renderTitle.js";
import { displayError } from "../error/displayError.js";

// location for rendering html
export const titleContainer = document.querySelector(".title-wrap");
export const title = document.querySelector("title");

export async function createTitle() {
  try {
    const id = getId();
    const newUrl = url + `/${id}`;
    const game = await getData(newUrl);
    createHTML(game);
  } catch (error) {
    console.log("An error occurred", error);
    titleContainer.innerHTML = displayError(
      "An error occurred, try again later or contact customer service if error persist"
    );
  }
}
