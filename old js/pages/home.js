import { titles, getNewReleases, addOneToTrendingNow } from "../data/data.js";
import { clearReleaseList, renderReleases } from "../render/renderLists.js";

export let newReleases = getNewReleases(titles);
export let trendingNow = addOneToTrendingNow();

export const parentNewReleases = document.querySelector(
  ".new-releases-container"
);
export const parentTrendingNow = document.querySelector(".trending-container");

export function RenderNewReleases() {
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

export function RenderTrendingNow() {
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
