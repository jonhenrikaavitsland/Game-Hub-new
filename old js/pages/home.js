// import { titles, getNewReleases, addOneToTrendingNow } from "../data/data.js";
// import { clearReleaseList, renderReleases } from "../render/renderLists.js";

let newReleases = getNewReleases(titles);
let trendingNow = addOneToTrendingNow();

const parentNewReleases = document.querySelector(".new-releases-container");
const parentTrendingNow = document.querySelector(".trending-container");

function RenderNewReleases() {
  try {
    clearReleaseList(parentNewReleases);
    renderReleases(newReleases, parentNewReleases);
  } catch (error) {
    console.log("An error occurred", error);
    parentNewReleases.innerHTML = displayError(
      "An error occurred, try again later or contact customer service if error persist"
    );
  }
}

function RenderTrendingNow() {
  try {
    clearReleaseList(parentTrendingNow);
    renderReleases(trendingNow, parentTrendingNow);
  } catch (error) {
    console.log("An error occurred", error);
    parentTrendingNow.innerHTML = displayError(
      "An error occurred, try again later or contact customer service if error persist"
    );
  }
}
