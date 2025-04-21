const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor em real
    const CurrencyValueConverted = document.querySelector(".currency-value"); // outras moedas 


    const dolarToday = 5.81;
    const euroToday = 6.15;
    const libraToday = 7.25;
    const bitcoinToday = 120.000;




    if (currencySelect.value == "dolar") { // se o select estiver selecionado o dolar.
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") { // se o selct estiver selecionado o euro.
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday);

    }


    if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"

        }).format(inputCurrencyValue / libraToday);



        if (currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "Bitcoin"
            currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {

                style: "currency",
                currency: "BTC"

            }).format(inputCurrencyValue / bitcoinToday);
        }
               
         
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

    function changecurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americado"
        currencyImage.src = "https://flagcdn.com/w320/us.png  "
    }


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"}

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"}


    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    convertValues() // chama a funçao para ja apararecer o valor em real assim que a pagina carregar.

}






currencySelect.addEventListener("change", changecurrency);

convertButton.addEventListener("click", convertValues);