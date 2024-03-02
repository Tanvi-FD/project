const serchIcon = document.querySelector(".search-icon");
const serchForm = document.querySelector(".search-form");

serchIcon.addEventListener("click", () =>{
    serchForm.classList.add("active");
})

const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () =>{
    cartItemsContainer.classList.add("active");
})

