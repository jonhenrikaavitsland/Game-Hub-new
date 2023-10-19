import { getGamesList, titles } from "../data/data.js";
import { clearReleaseList, renderReleases } from "../render/TitleLists.js";

export let gamesList = getGamesList(titles);

// ============== //

const parentGamesList = document.querySelector(".games-container");

clearReleaseList(parentGamesList);
renderReleases(gamesList, parentGamesList);
