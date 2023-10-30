import { fetchTitle } from "./data/fetchTitle.js";
import { updateCartLink } from "./localStorage/cartLink.js";
import { gamesPage } from "./pages/games.js";
import { RenderNewReleases, RenderTrendingNow } from "./pages/home.js";
import { titlePage } from "./pages/title.js";

updateCartLink();

switch (location.pathname) {
  case "/index.html":
    RenderNewReleases();
    RenderTrendingNow();
    break;
  case "/games/title/":
    titlePage();
    break;
  case "/games/":
    gamesPage();
    break;
  case "/cart/":
    // To do!
    break;
}
