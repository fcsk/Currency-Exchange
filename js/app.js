const url = "https://api.nbp.pl/api/exchangerates/tables/a/?format=json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((currency) => {
      currency.rates.forEach((element) => {
        const names = `<li> ${element.currency}: ${element.mid.toFixed(
          2
        )}</li>`;
        document.querySelector("ul")?.insertAdjacentHTML("beforeend", names);
      });
    });
  })
  .catch((error) => console.log(error));
