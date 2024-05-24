// Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Close Menu
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change Header Background
const shadowHeader = () => {
  const header = document.getElementById("header");
  window.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

// Swiper
const swiperFavorites = new Swiper(".favorites-swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});

// Scroll Up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

// Scroll Sections: Active 
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive)

// Scroll Reveal: Animation
const sr = ScrollReveal ({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 150,
  reset: true, 
});

sr.reveal(".home-data, .favorites-container, .footer-container");
sr.reveal(".home-circle, .home-img", {delay: 600, scale: .5});
sr.reveal(".home-chips-1, .home-chips-2, .home-chips-3",  {delay: 1000, interval: 100});
sr.reveal(".home-leaf",  {delay: 1200});
sr.reveal(".home-tomato-1, .home-tomato-2",  {delay: 1400, interval: 100});
sr.reveal(".care-img, .contact-img",  {origin: "left"});
sr.reveal(".care-list, .contact-data",  {origin: "right"});
sr.reveal(".banner-item, .products-card",  {interval: 100});