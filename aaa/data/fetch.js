// the url to the API
const url = "https://api.noroff.dev/api/v1/gamehub";

// function calling the api to fetch an array of objects and returning the data
export async function getTitles() {
  // fetch
  const response = await fetch(url);

  const data = await response.json();

  return data;
}
