import { renderTitles, clearTitleList } from "./js/render/title.js";

// the url to the API
const url = "https://api.noroff.dev/api/v1/gamehub";

// function calling the api to fetch an array of objects and returning the data
async function getTitles() {
  // fetch
  const response = await fetch(url);

  const data = await response.json();

  const titles = data;

  return titles;
}

// data from API response saved to the variable as an array of objects
const titles = await getTitles();

//
//
//

const parent = document.querySelector(".new-releases-container");

clearTitleList(parent);
renderTitles(titles, parent);
