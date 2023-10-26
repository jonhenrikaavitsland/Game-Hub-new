import { gamesPage } from "./pages/games.js";
import { RenderNewReleases, RenderTrendingNow } from "./pages/home.js";
import { titlePage } from "./pages/title.js";

console.log(location.pathname);

if (location.pathname === "/games/") {
  gamesPage();
} else if (location.pathname === "/title/") {
  titlePage();
} else if (location.pathname === "/cart/") {
  // fetch games
  // render games
} else {
  RenderNewReleases();
  RenderTrendingNow();
}
