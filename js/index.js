import { createHome } from "./pages/home.js";
import { createGames } from "./pages/games.js";
import { createTitle } from "./pages/title.js";
import { button } from "./listeners/button.js";
import { updateCartLink } from "./localStorage/updateCartLink.js";
import { createCart } from "./pages/cart.js";

updateCartLink();

switch (location.pathname) {
  case "/games/title/":
    createTitle();
    setTimeout(button, 300);
    break;
  case "/games/":
    createGames();
    break;
  case "/cart/":
    createCart();
    break;
  case "/about/":
    // nothing here
    break;
  case "/contact/":
    // nothing here
    break;
  default:
    createHome();
    break;
}
