// Extracting titles released after 2008
export function getNewReleases(titles) {
  let newReleases = [];
  for (let i = 0; i < titles.length; i++) {
    if (titles[i].released >= 2008) {
      newReleases.push(titles[i]);
    }
  }
  //Five is one too many, we need 4, so we remove the first one as this one repeats in the Trending now section.
  newReleases.shift();
  return newReleases;
}
