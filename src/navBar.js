import { createElementWithProperty } from "./index";
import { attributes } from "./htmlAttributes.js";

const navBar = {
  container: createElementWithProperty("div", attributes.navBar.container),
  homepage: createElementWithProperty("button", attributes.navBar.homepage),
  menu: createElementWithProperty("button", attributes.navBar.menu),
  contact: createElementWithProperty("button", attributes.navBar.contact),
};
navBar.container.appendChild(navBar.homepage);
navBar.container.appendChild(navBar.menu);
navBar.container.appendChild(navBar.contact);

export default navBar;
