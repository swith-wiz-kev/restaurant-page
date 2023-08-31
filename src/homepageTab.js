import { createElementWithProperty } from "./index";
import { attributes } from "./htmlAttributes.js";

const homepage = {
  container: createElementWithProperty("div", attributes.homepage.container),
  header: createElementWithProperty("div", attributes.homepage.header),
  image: createElementWithProperty("img", attributes.homepage.image),
  textBody: createElementWithProperty("div", attributes.homepage.textBody),
};
homepage.container.appendChild(homepage.header);
homepage.container.appendChild(homepage.image);
homepage.container.appendChild(homepage.textBody);

function homepageTab() {
  const content = document.getElementById("content");
  content.appendChild(homepage.container);
}
export default homepageTab;
