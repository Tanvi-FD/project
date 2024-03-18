const serchIcon = document.querySelector(".search-icon");
const serchForm = document.querySelector(".search-form");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");



serchIcon.addEventListener("click", () =>{
    serchForm.classList.add("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");

});

menuIcon.addEventListener("click", () =>{
    navbar.classList.add("active");
    serchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
});

const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () =>{
    cartItemsContainer.classList.add("active");
    serchForm.classList.remove("active");
    navbar.classList.remove("active");
});

window.onscroll = () =>{
    cartItemsContainer.classList.remove("active");
    serchForm.classList.remove("active");
    navbar.classList.remove("active");
}
