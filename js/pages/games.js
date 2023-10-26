import { getGamesList, titles } from "../data/data.js";
import { clearReleaseList, renderReleases } from "../render/renderLists.js";

let gamesList = getGamesList(titles);
const parentGamesList = document.querySelector(".games-container");

export function gamesPage() {
  try {
    clearReleaseList(parentGamesList);
    renderReleases(gamesList, parentGamesList);
  } catch (error) {
    console.log(error);
  }
}
