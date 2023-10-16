// location for rendering html
const titleContainer = document.querySelector(".title-wrap");

// getting querystring from parent page
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// url for fetching title details
const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

// fetching title for title page and rendering the html
async function fetchTitle() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHTML(details);
  } catch (error) {
    console.log(error);
    titleContainer.innerHTML = message("error", error);
  }
}
fetchTitle();

// the html to render
function createHTML(details) {
  titleContainer.innerHTML = `<div>
                                <img src="${
                                  details.image
                                }" alt="cover image for ${details.title}">
                              </div>
                              <section>
                                <h1>${details.title}</h1>
                                <p>Released: ${details.released}</p>
                                <p>${details.description}</p>
                                <p>Price: ${details.price}</p>
                                <p>Genre: ${details.genre}</p>
                                <p>Age rating: ${details.ageRating}</p>
                                <p><a href="../../account/" class="add-fancy">Login</a> and save € ${
                                  details.onSale
                                    ? `${
                                        details.price - details.discountedPrice
                                      }`
                                    : "0"
                                }</p>
                                <button class="cta cta-sale">ADD <i class="fa-solid fa-cart-plus add-fancy"></i></button>
                              </section>`;
}
