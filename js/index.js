import { createHome } from "./pages/home.js";
import { createGames } from "./pages/games.js";
import { createTitle } from "./pages/title.js";
import { button } from "./listeners/button.js";
import { updateCartLink } from "./localStorage/updateCartLink.js";

updateCartLink();

switch (location.pathname) {
  case "/index.html":
    createHome();
    break;
  case "/#":
    createHome();
    break;
  case "/games/title/":
    createTitle();
    setTimeout(button, 500); // lower the timer and consider if there is a better option than setTimeout()
    break;
  case "/games/":
    createGames();
    break;
  case "/cart/":
    // To do!
    break;
}
