// import { titles } from "./../data/data.js";

export const cartLink = document.querySelector(".cart-link");

export function updateCartLink() {
  const gameKeys = [];

  for (let i = 0; i < titles.length; i++) {
    let gameKey = titles[i].id;
    if (localStorage.getItem(gameKey)) {
      gameKeys.push(gameKey);
    }
  }
  console.log(gameKeys);
  cartLink.textContent = gameKeys.length;
  return gameKeys;
}
