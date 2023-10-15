import { getGamesList, titles } from "../js/data/data.js";
import { clearReleaseList, renderReleases } from "../js/render/TitleLists.js";

export let gamesList = getGamesList(titles);

// ============== //

const parentGamesList = document.querySelector(".games-container");

clearReleaseList(parentGamesList);
renderReleases(gamesList, parentGamesList);
