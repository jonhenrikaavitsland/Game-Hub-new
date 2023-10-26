import { gamesPage } from "./pages/games.js";
import { RenderNewReleases, RenderTrendingNow } from "./pages/home.js";
import { titlePage } from "./pages/title.js";
import {
  checkToUpdateButton,
  buttonAction,
  buttonRedirect,
} from "./listeners/titleButton.js";
import { updateCartLink } from "./localStorage/cartLink.js";

updateCartLink(); // updates the cart link in the top of the page

export const titleButton = document.querySelector(".cta-sale");
console.log(titleButton); // why is this NULL?!?!

if (location.pathname === "/index.html") {
  RenderNewReleases();
  RenderTrendingNow();
}

if (location.pathname === "/games/") {
  gamesPage();
}

if (location.pathname === "/games/title/") {
  //button is not working!!! NULL error and why are the errors showing on the other pages?
  titlePage();
  checkToUpdateButton(); // updates button to a link if game was already added to the cart.
  titleButton.addEventListener("click", buttonRedirect); // converts to link if condition is met.
  titleButton.addEventListener("click", buttonAction); // adds game to cart and updates button + cart link
}

if (location.pathname === "/cart/") {
  // fetch games
  // render games
}

