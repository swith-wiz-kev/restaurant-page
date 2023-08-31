import "./style.css";
import homepageTab from "./homepageTab";
import menuTab from "./menuTab";
import contactTab from "./contactTab";
import navBar from "./navBar";

function createElementWithProperty(elementType, elementProperties) {
  const element = document.createElement(elementType);
  for (const prop in elementProperties) {
    if (prop === "textContent") {
      element.textContent = elementProperties[prop];
    } else if (prop.slice(0, 7) === "dataset") {
      element.dataset[prop.slice(7).toLowerCase()] = elementProperties[prop];
    } else {
      element.setAttribute(prop, elementProperties[prop]);
    }
  }
  return element;
}

export { createElementWithProperty };

const content = document.getElementById("content");
content.appendChild(navBar.container);

homepageTab();
function switchTab(event) {
  const currentTab = document.querySelector("#content>div:last-child");
  if (event.target.dataset.tab === currentTab.dataset.tab) {
  } else {
    currentTab.remove();
    if (event.target.dataset.tab === "homepageTab") {
      homepageTab();
    } else if (event.target.dataset.tab === "menuTab") {
      menuTab();
    } else if (event.target.dataset.tab === "contactTab") {
      contactTab();
    }
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", switchTab);
});
