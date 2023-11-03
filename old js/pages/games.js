// import { getGamesList, titles } from "../data/data.js";
// import { clearReleaseList, renderReleases } from "../render/renderLists.js";

const parentGamesList = document.querySelector(".games-container");
let gamesList = getGamesList(titles);

function gamesPage() {
  try {
    clearReleaseList(parentGamesList);
    renderReleases(gamesList, parentGamesList);
  } catch (error) {
    console.log("An error occurred", error);
    parentGamesList.innerHTML = displayError(
      "An error occurred, try again later or contact customer service if error persist"
    ); // i cant get this error handling to work properly
  }
}
