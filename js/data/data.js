import { getTitles } from "./fetch.js";

// data from API response saved to the variable as an array of objects
export let titles = await getTitles();

// Extracting titles released after 2008
export function getNewReleases(titles) {
  let newReleases = [];
  for (let i = 0; i < titles.length; i++) {
    if (titles[i].released >= 2008) {
      newReleases.push(titles[i]);
    }
  }
  //Five is one too many, we need 4, so we remove the first one as this one repeats in the Trending now section.
  newReleases.shift();
  return newReleases;
}

// Creates the final list of games to display on the list of games page.
export function getGamesList(titles) {
  let gamesList = [];
  for (let i = 0; i < titles.length; i++) {
    gamesList.push(titles[i]);
  }
  // Adds two games at the end of the array, this way we can display 12 games and make good use of space since we do have 4 games in each row at desktop view.
  gamesList.push(titles[0]);
  gamesList.push(titles[1]);

  return gamesList;
}

// Extracts titles that are favorites
function getTrendingNow(titles) {
  let trendingNow = [];
  for (let i = 0; i < titles.length; i++) {
    if (titles[i].favorite) {
      trendingNow.push(titles[i]);
    }
  }
  return trendingNow;
}

// Because only three games are favorites and we need four at desktop screen size, we add one from our newly created array just to make the page look nice for this CA.
export function addOneToTrendingNow() {
  let trendingNow = getTrendingNow(titles);

  // for (let i = 0; i < trendingNow.length; i++) {} // i realized this didn't do anything.
  trendingNow.push(trendingNow[0]);

  return trendingNow;
}
