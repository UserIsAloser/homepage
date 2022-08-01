let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themename = document.querySelector(".themeName");
button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themename.innerText = "jasny";
    } else { themename.innerText = "ciemny"; }
});