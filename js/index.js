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

//anchor links
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

//h1 text
const h1 = document.querySelector("h1");

h1.textContent = siteContent.cta.h1;

//"Get Started Button"
const getStartedBtn = document.querySelector("button");

getStartedBtn.textContent = siteContent.cta.button;

//Update cta-img
let imgHeader = document.querySelector("#cta-img");

imgHeader.setAttribute("src", siteContent.cta["img-src"]);
console.log("Get Started Button", getStartedBtn);

//Update middle-img-src
let mainConentImg = document.querySelector("#middle-img");
// let mainConentImg = document.getElementById("middle-img");

mainConentImg.src = siteContent["main-content"]["middle-img-src"];

//Top Content - Features h4
const features = document.querySelectorAll(".top-content .text-content h4")[0];
features.textContent = siteContent["main-content"]["features-h4"];

//Top Content - Features paragraph
const featuresPar = document.querySelectorAll(
  ".top-content .text-content p"
)[0];
featuresPar.textContent = siteContent["main-content"]["features-content"];

//Top Content - About h4

const about = document.querySelectorAll(".top-content .text-content h4")[1];
about.textContent = siteContent["main-content"]["about-h4"];

//Top Content - About paragraph
const aboutPar = document.querySelectorAll(".top-content .text-content p")[1];
aboutPar.textContent = siteContent["main-content"]["about-content"];

//Bottom content - Services h4
const services = document.querySelectorAll(
  ".bottom-content .text-content h4"
)[0];
services.textContent = siteContent["main-content"]["services-h4"];

//Bottom content - Services paragraph
const servicesPar = document.querySelectorAll(
  ".bottom-content .text-content p"
)[0];
servicesPar.textContent = siteContent["main-content"]["services-content"];

//Bottom content - Product h4
const product = document.querySelectorAll(
  ".bottom-content .text-content h4"
)[1];
product.textContent = siteContent["main-content"]["product-h4"];

//Bottom content - Product paragraph
const productPar = document.querySelectorAll(
  ".bottom-content .text-content p"
)[1];
productPar.textContent = siteContent["main-content"]["product-content"];

//Bottom content - Vision h4
const vision = document.querySelectorAll(".bottom-content .text-content h4")[2];
vision.textContent = siteContent["main-content"]["vision-h4"];

//Bottom content - Vision paragraph
const visionPar = document.querySelectorAll(
  ".bottom-content .text-content p"
)[2];
visionPar.textContent = siteContent["main-content"]["vision-content"];
