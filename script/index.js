const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function() {
    if (menu.className=="hidden") {
        menu.classList.remove("hidden");
    }
    else{
        menu.classList.add("hidden");
    }
});

