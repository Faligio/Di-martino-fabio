// ButtonAcceder
const button = document.querySelector(".btn");
button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("btn--clicked");
    document.querySelectorAll("span").forEach((element) => {
        element.classList.add("expanded");
    });

    setTimeout(function() {
        location.href = "../Profil/profil.html";
    }, 1200);

});