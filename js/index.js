import { titles, getNewReleases, addOneToTrendingNow } from "./data/data.js";
import { renderReleases, clearReleaseList } from "./render/TitleLists.js";

export let newReleases = getNewReleases(titles);
export let trendingNow = addOneToTrendingNow();

// ================== //
const parentNewReleases = document.querySelector(".new-releases-container");
const parentTrendingNow = document.querySelector(".trending-container");

clearReleaseList(parentNewReleases);
renderReleases(newReleases, parentNewReleases);

clearReleaseList(parentTrendingNow);
renderReleases(trendingNow, parentTrendingNow);
