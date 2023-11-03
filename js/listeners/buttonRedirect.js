// redirects if the button has changed
export function buttonRedirect(btn, textContent) {
  if (btn.innerHTML === textContent) {
    location.href = "../../games/";
  }
}
