import { createElementWithProperty } from "./index";
import { attributes } from "./htmlAttributes.js";

const contact = {
  container: createElementWithProperty("div", attributes.contact.container),
  header: createElementWithProperty("div", attributes.contact.header),
  image: createElementWithProperty("img", attributes.contact.image),
  textBody: createElementWithProperty("div", attributes.contact.textBody),
};
contact.container.appendChild(contact.header);
contact.container.appendChild(contact.image);
contact.container.appendChild(contact.textBody);

function contactTab() {
  const content = document.getElementById("content");
  content.appendChild(contact.container);
}
export default contactTab;
