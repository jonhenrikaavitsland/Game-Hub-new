// export function renderRelease(release, parentElement) {
//   const releaseHtml = createHtmlObject(release);
//   parentElement.append(releaseHtml);
// }

// export function renderReleases(releases, parentElement) {
//   releases.forEach(function (release) {
//     renderRelease(release, parentElement);
//   });
// }

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
//   element, classList.add("cta", "cta-explore", "give-margin6-btm");
//   element.innerHTML = linkText;
//   element.href = linkUrl;
//   return element;
// }

// export function createHtmlObject(release) {
//   const linkUrl = "../../games/title/";
//   const linkText1 = `${release.title}`;
//   const linkText2 = "explore";
//   const paragraph = `€ ${release.price}`;

//   const a1 = createAnchor(linkUrl);
//   const a2 = createAnchor2(linkText1, linkUrl);
//   const p = createParagraph(paragraph);
//   const a3 = createAnchor3(linkText2, linkUrl);

//   const childItems = [a1, a2, p, a3];

//   const div = createContainer();
//   childItems.append(div);

//   return div;
// }

// export function clearReleaseList(parentElement) {
//   parentElement.innerHTML = "";
// }
