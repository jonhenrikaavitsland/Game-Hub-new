import { getData } from "../data/fetchAPI.js";
import { getNewReleases } from "../data/getNewReleases.js";
import { addOneToTrendingNow } from "../data/getTrendingNow.js";
import { clearReleaseList, renderReleases } from "../render/renderLists.js";
import { url } from "../data/constants.js";

const parentNewReleases = document.querySelector(".new-releases-container");
const parentTrendingNow = document.querySelector(".trending-container");

export async function createHome() {
  try {
    const titles = await getData(url);
    const newReleases = getNewReleases(titles);
    const trendingNow = addOneToTrendingNow(titles);
    clearReleaseList(parentNewReleases);
    renderReleases(newReleases, parentNewReleases);
    clearReleaseList(parentTrendingNow);
    renderReleases(trendingNow, parentTrendingNow);
  } catch (error) {
    console.log("An error occurred", error);
    parentTrendingNow.innerHTML = displayError(
      "An error occurred, try again later or contact customer service if error persist"
    );
    parentNewReleases.innerHTML = displayError(
      "An error occurred, try again later or contact customer service if error persist"
    );
  }
}
