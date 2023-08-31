import { createElementWithProperty } from "./index";
import { attributes } from "./htmlAttributes.js";

const menu = {
  container: createElementWithProperty("div", attributes.menu.container),
  header: createElementWithProperty("div", attributes.menu.header),
  image: createElementWithProperty("img", attributes.menu.image),
  textBody: createElementWithProperty("div", attributes.menu.textBody),
};
menu.container.appendChild(menu.header);
menu.container.appendChild(menu.image);
menu.container.appendChild(menu.textBody);

function menuTab() {
  const content = document.getElementById("content");
  content.appendChild(menu.container);
}
export default menuTab;
