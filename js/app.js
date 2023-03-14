const url = "https://api.nbp.pl/api/exchangerates/tables/a/?format=json";
let PLN = {};
let CurrencyRates;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    CurrencyRates = data[0].rates;

    /* ADD polish currency to json */
    PLN["currency"] = "polski złoty";
    PLN["code"] = "PLN";
    PLN["mid"] = 1;
    CurrencyRates.push(PLN);
    console.log(CurrencyRates);

    CurrencyRates.forEach((rate) => {});
  })
  .catch((error) => console.log(error));
