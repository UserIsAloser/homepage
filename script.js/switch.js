let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themename = document.querySelector(".themename");
button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themename.innerText = "jasny";
    } else { themename.innerText = "ciemny"; }
});
let day = document.querySelector(".day").innerText;
let howMuch = document.querySelector(".howMuch");
if (day === "poniedziałek" || day === "wtorek") {
    howMuch.innerText = "dużo";
} else if (day === "środa" || day === "czwartek") {
    howMuch.innerText = "troche";
} else {
    howMuch.innerText = "mało";
}