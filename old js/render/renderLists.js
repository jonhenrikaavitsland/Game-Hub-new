// the code on this page is rendering html
function renderRelease(release, parentElement) {
  const releaseHtml = createHtmlObject(release);
  parentElement.append(releaseHtml);
}

function renderReleases(releases, parentElement) {
  releases.forEach(function (release) {
    renderRelease(release, parentElement);
  });
}

function createHtmlObject(release) {
  const linkUrl = `./../../games/title/?id=${release.id}`;

  const element = document.createElement("div");
  element.classList.add("just-center");

  const childA1Element = document.createElement("a");
  childA1Element.href = linkUrl;
  element.append(childA1Element);

  const childImgElement = document.createElement("img");
  childImgElement.classList.add("cover");
  childImgElement.src = `${release.image}`;
  childImgElement.setAttribute("alt", `cover image of ${release.title}`);
  childA1Element.append(childImgElement);

  const childA2Element = document.createElement("a");
  childA2Element.classList.add("titles");
  childA2Element.textContent = `${release.title}`;
  childA2Element.href = linkUrl;
  element.append(childA2Element);

  const childPElement = document.createElement("p");
  childPElement.classList.add("prices");
  childPElement.textContent = `€ ${release.price}`;
  element.append(childPElement);

  const childA3Element = document.createElement("a");
  childA3Element.classList.add("cta", "cta-explore", "give-margin6-btm");
  childA3Element.textContent = "explore";
  childA3Element.href = linkUrl;
  element.append(childA3Element);

  return element;
}

function clearReleaseList(parentElement) {
  parentElement.innerHTML = "";
}
