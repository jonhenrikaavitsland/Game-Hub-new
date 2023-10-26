// // the code on this page is rendering html
// export function renderRelease(release, parentElement) {
//   const releaseHtml = createHtmlObject(release);
//   parentElement.append(releaseHtml);
// }

// export function renderReleases(releases, parentElement) {
//   releases.forEach(function (release) {
//     renderRelease(release, parentElement);
//   });
// }

// export function createHtmlObject(release) {
//   const linkUrl = `./../../games/title/?id=${release.id}`;

//   const element = document.createElement("div");
//   element.classList.add("just-center");

//   const childA1Element = document.createElement("a");
//   childA1Element.href = linkUrl;
//   element.append(childA1Element);

//   const childImgElement = document.createElement("img");
//   childImgElement.classList.add("cover");
//   childImgElement.src = `${release.image}`;
//   childImgElement.setAttribute("alt", `cover image of ${release.title}`);
//   childA1Element.append(childImgElement);

//   const childA2Element = document.createElement("a");
//   childA2Element.classList.add("titles");
//   childA2Element.textContent = `${release.title}`;
//   childA2Element.href = linkUrl;
//   element.append(childA2Element);

//   const childPElement = document.createElement("p");
//   childPElement.classList.add("prices");
//   childPElement.textContent = `€ ${release.price}`;
//   element.append(childPElement);

//   const childA3Element = document.createElement("a");
//   childA3Element.classList.add("cta", "cta-explore", "give-margin6-btm");
//   childA3Element.textContent = "explore";
//   childA3Element.href = linkUrl;
//   element.append(childA3Element);

//   return element;
// }

// export function clearReleaseList(parentElement) {
//   parentElement.innerHTML = "";
// }

// The following code was a failed attempt, i might try again, but above is working code.

// export function createContainer() {
//   const element = document.createElement("div");
//   element.classList.add("just-center");

//   return element;
// }

// export function createAnchor(linkUrl) {
//   const element = document.createElement("a");
//   element.href = linkUrl;

//   const childElement = document.createElement("img");
//   childElement.classList.add("cover");

//   element.append(childElement);

//   return element;
// }

// export function createAnchor2(linkText, linkUrl) {
//   const element = document.createElement("a");
//   element.classList.add("titles");
//   element.innerText = linkText;
//   element.href = linkUrl;
//   return element;
// }

// export function createParagraph(paragraph) {
//   const element = document.createElement("p");
//   element.classList.add("prices");
//   element.innerText = paragraph;
//   return element;
// }

// export function createAnchor3(linkText, linkUrl) {
//   const element = document.createElement("a");
//   element.classList.add("cta", "cta-explore", "give-margin6-btm");
//   element.innerHTML = linkText;
//   element.href = linkUrl;
//   return element;
// }
