// ================= SIDE MENU =================

function toggleMenu() {

    const menu = document.getElementById("sideMenu");

    menu.classList.toggle("active");

}


// ================= CLOSE MENU =================

function closeMenu() {

    const menu = document.getElementById("sideMenu");

    menu.classList.remove("active");

}


// ================= DEMO MESSAGE =================

function showMessage(text) {

    const message = document.getElementById("message");

    message.innerText = text;

    message.classList.add("show");

    setTimeout(function () {

        message.classList.remove("show");

    }, 2000);

}


// ================= CLICK OUTSIDE MENU =================

document.addEventListener("click", function(event) {

    const menu = document.getElementById("sideMenu");

    const menuButton = document.querySelector(".menu");

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        menu.classList.remove("active");

    }

});