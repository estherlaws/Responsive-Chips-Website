// Show Menu
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

if(navToggle) {
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
    })
}

if(navClose) {
    navClose.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
    })
}

// Close Menu
const navLink = document.querySelectorAll(".nav-link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu") 
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// Change Header Background
const shadowHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("shadow-header")
                       : header.classList.remove("shadow-header")
}
