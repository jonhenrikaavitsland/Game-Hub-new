import { updateCartLink } from "./localStorage/cartLink.js";
import { gamesPage } from "./pages/games.js";
import { RenderNewReleases, RenderTrendingNow } from "./pages/home.js";
import { titlePage } from "./pages/title.js";

updateCartLink();

switch (location.pathname) {
  case "/games/title/":
    titlePage();
    break;
  case "/games/":
    gamesPage();
    break;
  case "/cart/":
    // To do!
    break;
  default:
    RenderNewReleases();
    RenderTrendingNow();
}
