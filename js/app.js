const url = "https://api.nbp.pl/api/exchangerates/tables/a/?format=json";
let PLN = {};
let CurrencyRates;

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const inputAmount = document.getElementById("amount");
const convertButton = document.getElementById("convert");

// console.log(fromCurrency);
// console.log(toCurrency);

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    CurrencyRates = data[0].rates;

    /* ADD polish currency to json */
    PLN["currency"] = "polski złoty";
    PLN["code"] = "PLN";
    PLN["mid"] = 1;
    CurrencyRates.push(PLN);

    CurrencyRates.forEach((element) => {
      const option = document.createElement("option");
      option.text = `${element.currency} [${element.code}]`;
      option.value = element.code;
      fromCurrency.add(option);

      const option2 = document.createElement("option");
      option2.text = `${element.currency} [${element.code}]`;
      option2.value = element.code;
      toCurrency.add(option2);
    });
  })
  .catch((error) => console.log(error));
