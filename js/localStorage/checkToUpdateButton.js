// updates the buttons textContent if the games title has been stored in localStorage as a value.
export function checkToUpdateButton(button, key, textContent) {
  if (localStorage.getItem(key)) {
    button.textContent = textContent;
  }
}
