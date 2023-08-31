import homepageImage from "./Wholesome-Table-Healthy-Restaurant-Manila.webp";
import menuImage from "./The-Farm-Organics-Healthy-Restaurant-Manila.webp";
import contactImage from "./contactus.png";
import text from "./text.json5";
// import foodImage from "./The-Farm-Organics-Healthy-Restaurant-Manila.webp";

const attributes = {
  navBar: {
    container: {
      class: "navbar",
    },
    homepage: {
      class: "navbar homepage",
      datasetTab: "homepageTab",
      textContent: "HOME",
    },
    menu: {
      class: "navbar menu",
      datasetTab: "menuTab",
      textContent: "MENU",
    },
    contact: {
      class: "navbar contact",
      datasetTab: "contactTab",
      textContent: "Contact Us",
    },
  },

  homepage: {
    container: {
      class: "homepage",
      datasetTab: "homepageTab",
    },

    header: {
      class: "homepage header",
      textContent: text.homepageHeader,
    },

    image: {
      class: "homepage image",
      src: homepageImage,
    },

    textBody: {
      class: "homepage text",
      textContent: text.homepageBody,
    },
  },

  menu: {
    container: {
      class: "menu",
      datasetTab: "menuTab",
    },

    header: {
      class: "menu header",
      textContent: text.menuHeader,
    },

    image: {
      class: "menu image",
      src: menuImage,
    },

    textBody: {
      class: "menu text",
      textContent: text.menuBody,
    },
  },

  contact: {
    container: {
      class: "contact",
      datasetTab: "contactTab",
    },

    header: {
      class: "contact header",
      textContent: text.contactHeader,
    },

    image: {
      class: "contact image",
      src: contactImage,
    },

    textBody: {
      class: "contact text",
      textContent: text.contactBody,
    },
  },
};

export { attributes };
