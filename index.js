import {
  titles,
  getNewReleases,
  getGamesList,
  addOneToTrendingNow,
} from "./js/data/data.js";

let newReleases = getNewReleases(titles);
let trendingNow = addOneToTrendingNow();
let gamesList = getGamesList(titles);

console.log(newReleases);
console.log(trendingNow);
console.log(gamesList);
