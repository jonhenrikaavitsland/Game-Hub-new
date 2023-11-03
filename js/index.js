import { createHome } from "./pages/home.js";
import { createGames } from "./pages/games.js";
import { createTitle } from "./pages/title.js";
import { button } from "./listeners/button.js";

switch (location.pathname) {
  case "/games/title/":
    createTitle();
    setTimeout(button, 5000);
    break;
  case "/games/":
    createGames();
    break;
  case "/cart/":
    // To do!
    break;
  default:
    createHome();
}
