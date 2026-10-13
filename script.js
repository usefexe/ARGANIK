const btnMenu = document.querySelector(".btn-menu");
const menuPhone = document.querySelector(".menuPhone")
btnMenu.addEventListener("click", () => {
    menuPhone.classList.toggle("active");
    if (menuLogo.src.includes(openIcon)) {
        menuLogo.src = closeIcon;
        menuLogo.alt = "Close Menu";
    } else {
        menuLogo.src = openIcon;
        menuLogo.alt = "Open Menu";
    }
})
