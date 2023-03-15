const url = "https://api.nbp.pl/api/exchangerates/tables/a/?format=json";
let PLN = {};
let CurrencyRates;

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const inputAmount = document.getElementById("amount");
const convertButton = document.getElementById("convert");
const resultspan = document.getElementById("result");

// console.log(fromCurrency);
// console.log(toCurrency);

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    CurrencyRates = data[0].rates;

    /* ADD polish currency to CurrencyRates */
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

function ConvertRates() {
  const fromCurrencyCode = fromCurrency.value;
  const toCurrencyCode = toCurrency.value;
  const amount = inputAmount.value;
  let result;

  //console.log(fromCurrencyCode);
  const fromCurrencyMid = CurrencyRates.find(
    (element) => element.code === fromCurrencyCode
  ).mid;

  const toCurrencyMid = CurrencyRates.find(
    (element) => element.code === toCurrencyCode
  ).mid;

  result = (fromCurrencyMid / toCurrencyMid) * amount;
  result = result.toFixed(2);
  resultspan.textContent = `${result} ${toCurrencyCode}`;
}

convertButton?.addEventListener("click", ConvertRates);
