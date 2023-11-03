import { getData } from "../data/fetchAPI.js";
import { getGamesList } from "../data/getGamesList.js";
import { clearReleaseList, renderReleases } from "../render/renderLists.js";
import { displayError } from "../error/displayError.js";
import { url } from "../data/constants.js";

const parentGames = document.querySelector(".games-container");

export async function createGames() {
  try {
    const titles = await getData(url);
    const gamesList = getGamesList(titles);
    clearReleaseList(parentGames);
    renderReleases(gamesList, parentGames);
  } catch (error) {
    console.log("An error occurred", error);
    parentGames.innerHTML = displayError(
      "An error occurred, try again later or contact customer service if error persist"
    );
  }
}
