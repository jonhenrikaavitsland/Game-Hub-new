import { gamesPage } from "./pages/games.js";
import { RenderNewReleases, RenderTrendingNow } from "./pages/home.js";
import { titlePage } from "./pages/title.js";

switch (location.pathname) {
  case "/index.html":
    RenderNewReleases();
    RenderTrendingNow();
    break;
  case "/games/":
    gamesPage();
    break;
  case "/games/title/":
    titlePage();
    break;
  case "/cart/":
    break;
  default:
}

// if (location.pathname === "/index.html") {
//   RenderNewReleases();
//   RenderTrendingNow();
// }

// if (location.pathname === "/games/") {
//   gamesPage();
// }

// if (location.pathname === "/games/title/") {
//   titlePage();
// }

// if (location.pathname === "/cart/") {
//   // fetch games
//   // render games
// }

