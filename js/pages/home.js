import { titles, getNewReleases, addOneToTrendingNow } from "../data/data.js";
import { clearReleaseList, renderReleases } from "../render/renderLists.js";

export let newReleases = getNewReleases(titles);
export let trendingNow = addOneToTrendingNow();

const parentNewReleases = document.querySelector(".new-releases-container");
const parentTrendingNow = document.querySelector(".trending-container");

export function RenderNewReleases() {
  try {
    clearReleaseList(parentNewReleases);
    renderReleases(newReleases, parentNewReleases);
  } catch (error) {
    console.log(error);
  }
}

export function RenderTrendingNow() {
  try {
    clearReleaseList(parentTrendingNow);
    renderReleases(trendingNow, parentTrendingNow);
  } catch (error) {
    console.log(error);
  }
}
