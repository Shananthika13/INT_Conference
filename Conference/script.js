document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });
});
