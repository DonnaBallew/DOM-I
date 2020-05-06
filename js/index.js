const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//  Task 1 & 2: Create selectors to point your data into elements &
// Using your selectors, update the content to match the example file

//Nav Section
const navBarItems = document.querySelectorAll("a");

navBarItems[0].textContent = siteContent.nav[`nav-item-1`];
navBarItems[1].textContent = siteContent.nav[`nav-item-2`];
navBarItems[2].textContent = siteContent.nav[`nav-item-3`];
navBarItems[3].textContent = siteContent.nav[`nav-item-4`];
navBarItems[4].textContent = siteContent.nav[`nav-item-5`];
navBarItems[5].textContent = siteContent.nav[`nav-item-6`];

//loops over node list and populates anchor link text (would replace the above code) - Josh Luscombe:

// navBarItems.forEach((item, index) => {
//   item.textContent = siteContent.nav[`nav-item-${index + 1}`];
// });

//CTA Section
const h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

const getStartedBtn = document.querySelector("button");
getStartedBtn.textContent = siteContent.cta.button;

const imgHeader = document.querySelector("#cta-img");
imgHeader.setAttribute("src", siteContent.cta["img-src"]);
// console.log("Get Started Button", getStartedBtn);

//Main-Content Section
const mainContentImg = document.querySelector("#middle-img");
// let mainContentImg = document.getElementById("middle-img");
mainContentImg.setAttribute(
  "src",
  siteContent["main-content"]["middle-img-src"]
);

const sectionHeader = document.querySelectorAll(".main-content h4");
sectionHeader[0].textContent = siteContent["main-content"]["features-h4"];
sectionHeader[1].textContent = siteContent["main-content"]["about-h4"];
sectionHeader[2].textContent = siteContent["main-content"]["services-h4"];
sectionHeader[3].textContent = siteContent["main-content"]["product-h4"];
sectionHeader[4].textContent = siteContent["main-content"]["vision-h4"];

const sectionPar = document.querySelectorAll(".main-content p");
sectionPar[0].textContent = siteContent["main-content"]["features-content"];
sectionPar[1].textContent = siteContent["main-content"]["about-content"];
sectionPar[2].textContent = siteContent["main-content"]["services-content"];
sectionPar[3].textContent = siteContent["main-content"]["product-content"];
sectionPar[4].textContent = siteContent["main-content"]["vision-content"];

//Contact Section
const contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent.contact["contact-h4"];

const [contactAddress, contactPhone, contactEmail] = document.querySelectorAll(
  ".contact p"
);
contactAddress.textContent = siteContent.contact.address;
contactPhone.textContent = siteContent.contact.phone;
contactEmail.textContent = siteContent.contact.email;

//Footer Section
const copyright = document.querySelector("footer p");
copyright.textContent = siteContent.footer.copyright;

// Task3: Green text on navbar
navBarItems.forEach((element) => {
  element.style.color = "green";
});

// Task 3:  append and prepend
const appButton = document.createElement("a");
appButton.href = "#";
appButton.textContent = "Append Button";
appButton.style.color = "green";
const nav = document.querySelector("nav");
nav.appendChild(appButton);

const preButton = document.createElement("a");
preButton.href = "#";
preButton.textContent = "Prepend Button";
preButton.style.color = "green";
nav.prepend(preButton);

// Stretch

getStartedBtn.style.borderRadius = "10px";

getStartedBtn.addEventListener("click", () => {
  getStartedBtn.style.background = "#00d733";
  getStartedBtn.style.transform = "translateY(8rem) rotateZ(360deg)";
  getStartedBtn.style.transition = "all 0.8s ease";
});

copyright.style.backgroundColor = "#0669c7";
copyright.style.padding = "1rem";
copyright.style.color = "white";
