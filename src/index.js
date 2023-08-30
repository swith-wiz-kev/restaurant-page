import "./style.css";
import homeImage from "./Wholesome-Table-Healthy-Restaurant-Manila.webp";
import foodImage from "./The-Farm-Organics-Healthy-Restaurant-Manila.webp";
import json from "./data.json5";

function createElementWithProperty(elementType, elementProperties) {
  const element = document.createElement(elementType);
  for (const prop in elementProperties) {
    element.setAttribute(
      elementProperties[prop].name,
      elementProperties[prop].value
    );
  }
  return element;
}

const homePage = {
  container: createElementWithProperty("div", {
    class: {
      name: "class",
      value: "homepage",
    },
  }),

  image: createElementWithProperty("img", {
    class: {
      name: "class",
      value: "homepage image",
    },
    source: {
      name: "src",
      value: homeImage,
    },
  }),
};
homePage.container.appendChild(homePage.image);
const content = document.getElementById("content");
content.appendChild(homePage.container);
