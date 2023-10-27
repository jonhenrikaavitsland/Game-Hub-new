import { fetchTitle } from "../data/fetchTitle.js";

// location for rendering html
export const titleContainer = document.querySelector(".title-wrap");
export const title = document.querySelector("title");

// getting querystring from parent page
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
export const id = params.get("id");

// url for fetching title details
export const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

export async function titlePage() {
  fetchTitle();
}
