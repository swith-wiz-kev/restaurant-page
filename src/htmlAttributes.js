import homeImage from "./Wholesome-Table-Healthy-Restaurant-Manila.webp";
import text from "./text.json5";
// import foodImage from "./The-Farm-Organics-Healthy-Restaurant-Manila.webp";

const attributes = {
  homepage: {
    container: {
      class: "homepage",
    },

    headerHomepage: {
      class: "homepage header",
      textContent: text.headerHomepage,
    },

    image: {
      class: "homepage image",
      src: homeImage,
    },

    textBody: {
      class: "homepage text",
      textContent: text.bodyHomepage,
    },
  },
};

export { attributes };
