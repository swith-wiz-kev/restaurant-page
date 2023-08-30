import "./style.css";
import { attributes } from "./htmlAttributes.js";

function createElementWithProperty(elementType, elementProperties) {
  const element = document.createElement(elementType);
  for (const prop in elementProperties) {
    if (prop === "textContent") {
      element.textContent = elementProperties[prop];
    } else {
      element.setAttribute(prop, elementProperties[prop]);
    }
  }
  return element;
}

const homepage = {
  container: createElementWithProperty("div", attributes.homepage.container),
  header: createElementWithProperty("div", attributes.homepage.headerHomepage),
  image: createElementWithProperty("img", attributes.homepage.image),
  textBody: createElementWithProperty("div", attributes.homepage.textBody),
};
homepage.container.appendChild(homepage.header);
homepage.container.appendChild(homepage.image);
homepage.container.appendChild(homepage.textBody);

const content = document.getElementById("content");
content.appendChild(homepage.container);
