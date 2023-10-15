import {
  titles,
  getNewReleases,
  getGamesList,
  addOneToTrendingNow,
} from "./js/data/data.js";
import { renderReleases, clearReleaseList } from "./js/render/newReleases.js";

export let newReleases = getNewReleases(titles);
export let trendingNow = addOneToTrendingNow();
export let gamesList = getGamesList(titles);

console.log(newReleases);
console.log(trendingNow);
console.log(gamesList);

// ================== //
// const parentNewReleases = document.querySelector(".new-releases-container");
// const parentTrendingNow = document.querySelector(".trending-container");

// clearReleaseList(parentNewReleases);
// renderReleases(newReleases, parentNewReleases);

// clearReleaseList(parentTrendingNow);
// renderReleases(trendingNow, parentTrendingNow);