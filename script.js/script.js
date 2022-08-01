
let przycisk = document.querySelector(".przycisk");
let header = document.querySelector(".header");
przycisk.addEventListener("click", () => {
    header.remove();
});
let przyc = document.querySelector(".przyc");
let tlo = document.querySelector(".background");
przyc.addEventListener("click", () => {
    tlo.classList.toggle("dark")
});
let number1 = 5;
let number2 = 2;
if (number1 < number2) {
    console.log("number1 jest mniejsze");
}
else { console.log("number1 nie jest mniejsze"); }
let container = document.querySelector(".container");
console.log(container);
if (container.classList.contains("dark")) {
    console.log("Kontener");
}
if (number1 <= number2) {
    console.log("number 1 jest mniejsza")
} else { console.log("number1 jest wieksza"); }

