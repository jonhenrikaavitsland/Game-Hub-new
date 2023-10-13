export function renderTitle(title, parentElement) {
  // renderHtmlString(title, parentElement);
  const titleHTML = createHtmlObject(title);
  parentElement.append(titleHTML);
}

export function renderTitles(titles, parentElement) {
  titles.forEach(function (title) {
    renderTitle(title, parentElement);
  });
}

export function createHtmlObject(title) {
  const element = document.createElement("div");
  element.classList.add("just-center");
  return element;
}

export function clearTitleList(parentElement) {
  parentElement.innerHTML = "";
}
