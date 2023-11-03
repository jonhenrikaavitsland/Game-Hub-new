// Creates the final list of games to display on the list of games page.
export function getGamesList(titles) {
  let gamesList = [];
  for (let i = 0; i < titles.length; i++) {
    gamesList.push(titles[i]);
  }
  // Adds two games at the end of the array, this way we can display 12 games and make good use of space since we do have 4 games in each row at desktop view.
  gamesList.push(titles[0]);
  gamesList.push(titles[1]);

  return gamesList;
}
