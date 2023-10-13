import { getTitles } from "./js/fetch/fetch.js";
import { renderTitles } from "./js/render/title.js";

// data from API response saved to the variable as an array of objects
let titles = await getTitles();

//
//
//

const parent = document.querySelector(".new-releases-container");

renderTitles(titles, parent);
console.log(titles);
