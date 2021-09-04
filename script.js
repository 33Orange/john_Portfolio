let button = document.querySelector(".burger-menu-cont");

function openMenu() {
    document.querySelector(".burger-menu").style.display = "flex";
    document.querySelector(".burger-menu-cont").style.background = "none";
}

button.addEventListener("click", openMenu);

let closeButton = document.querySelector(".krest");

function closeMenu() {
    document.querySelector(".burger-menu").style.display = "none";
}
closeButton.addEventListener("click", closeMenu);
