import { updateCartLink } from "../localStorage/updateCartLink.js";
import { url } from "../data/constants.js";
import { getData } from "../data/fetchAPI.js";

export const parentCart = document.querySelector(".checkout-container");
const keys = await updateCartLink();
export const cartContent = [];

export async function createCartContent() {
  for (let i = 0; i < keys.length; i++) {
    const newUrl = url + `/${keys[i]}`;
    const title = await getData(newUrl);
    cartContent.push(title);
  }
}

export function createInnerCart() {
  let total = 0;
  let discount = 0;
  parentCart.innerHTML = "";
  for (let i = 0; i < cartContent.length; i++) {
    total += cartContent[i].price;
    discount += cartContent[i].discountedPrice;
    parentCart.innerHTML += `
    <div class="cart-content">
      <img src="${cartContent[i].image}" alt="cover for ${cartContent[i].title}" class="cart-img">
      <section>
        <p>Title: ${cartContent[i].title}</p>
        <p>Price: $${cartContent[i].price}</p
      </section>
    </div>
    `;
  }
  parentCart.innerHTML += `
  <section>
    <h2>Cart Summary</h2>
    <p>Sum Total: $${total.toFixed(2)}</p>
    <p><a href="./../index.html" class="on-hover">Login</a> to save $<span class="add-fancy">${(
      total - discount
    ).toFixed(2)}</span></p>
  </section>
  `;
}

console.log(cartContent);

export function createCart() {
  createCartContent();
  setTimeout(createInnerCart, 1000);
}
