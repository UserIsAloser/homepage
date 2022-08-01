console.log("Witam!")
let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let pln = plnElement.value;
    let currency = currencyElement.value;
    let eur = 4.74;
    let usd = 4.63;
    let gbt = 5.65;
    let result;

    switch (currency) {
        case "eur":
            result = pln / eur;
            break;
        case "usd":
            result = pln / usd;
            break;
        case "gbt":
            result = pln / gbt;
            break;
    }

    resultElement.innerText = result.toFixed(2);
});
