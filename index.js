import { titles, getNewReleases, addOneToTrendingNow } from "./js/data/data.js";
import { renderReleases, clearReleaseList } from "./js/render/TitleLists.js";

export let newReleases = getNewReleases(titles);
export let trendingNow = addOneToTrendingNow();

console.log(newReleases);
console.log(trendingNow);

// ================== //
const parentNewReleases = document.querySelector(".new-releases-container");
const parentTrendingNow = document.querySelector(".trending-container");

clearReleaseList(parentNewReleases);
renderReleases(newReleases, parentNewReleases);

clearReleaseList(parentTrendingNow);
renderReleases(trendingNow, parentTrendingNow);
