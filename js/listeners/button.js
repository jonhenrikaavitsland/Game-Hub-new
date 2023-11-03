import { getId } from "../data/getId.js";
import { url } from "../data/constants.js";
import { getData } from "../data/fetchAPI.js";
import { findKey, findValue } from "../localStorage/findVariables.js";
import { checkToUpdateButton } from "../localStorage/checkToUpdateButton.js";
import { buttonRedirect } from "./buttonRedirect.js";
import { buttonAction } from "../localStorage/buttonAction.js";

export async function button() {
  const id = getId();
  const newUrl = url + `/${id}`;
  const game = await getData(newUrl);

  const updatedButton = "CONTINUE SHOPPING";
  const titleButton = document.querySelector(".cta-sale");

  let gameKey = findKey(game);
  let gameValue = findValue(game);
  console.log(titleButton);
  checkToUpdateButton(titleButton, gameKey, updatedButton);
  titleButton.addEventListener(
    "click",
    buttonRedirect(titleButton, updatedButton) // buttonRedirect can not run titlebutton and updatedbutton from here.
  );
  titleButton.addEventListener(
    "click",
    buttonAction(gameKey, gameValue, titleButton, updatedButton) // buttonAction same as above
  );
}

// fix updateCart
