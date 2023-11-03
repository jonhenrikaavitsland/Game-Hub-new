import { getId } from "../data/getId.js";
import { url } from "../data/constants.js";
import { getData } from "../data/fetchAPI.js";
import { createHTML } from "../render/renderTitle.js";

const titleButton = document.querySelector(".cta-sale");

// location for rendering html
export const titleContainer = document.querySelector(".title-wrap");
export const title = document.querySelector("title");

export async function createTitle() {
  try {
    const id = getId();
    const newUrl = url + `/${id}`;
    const game = await getData(newUrl);
    createHTML(game);
  } catch (error) {}
}
