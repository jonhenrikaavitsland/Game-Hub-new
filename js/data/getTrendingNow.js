// Extracts titles that are favorites
function getTrendingNow(titles) {
  let trendingNow = [];
  for (let i = 0; i < titles.length; i++) {
    if (titles[i].favorite) {
      trendingNow.push(titles[i]);
    }
  }
  return trendingNow;
}

// Because only three games are favorites and we need four at desktop screen size, we add one from our newly created array just to make the page look nice for this CA.
export function addOneToTrendingNow(titles) {
  let trendingNow = getTrendingNow(titles);

  // for (let i = 0; i < trendingNow.length; i++) {} // i realized this didn't do anything.
  trendingNow.push(trendingNow[0]);

  return trendingNow;
}
