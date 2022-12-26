const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCountry(e.target.country_name.value);
});
// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}

function renderCountry(country) {
  console.log(country);
  const html = `<article class="country">
  <img class="country__img" src="${country.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${country.name.common}</h3>
    <h4 class="country__region">${country.region}</h4>
    <p class="country__row"><span>👫</span>${(
      country.population / 1_000_000
    ).toFixed(2)}M</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(country.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(country.currencies)[0].name
    } ${Object.values(country.currencies)[0].symbol}</p>
  </div>
</article>`;
  countriesContainer.innerHTML += html;
  countriesContainer.style.opacity = 1;
}

function getCountry(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}/`)
    .then((res) => res.json())
    .then((data) => renderCountry(data[0]))
    .catch((err) => {
      countriesContainer.innerHTML = "iim oron delhii deer bhgue";
    });
}

// -----------------------------------

const countriesContainer2 = document.querySelector(".countries1");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCountry(e.target.country_name.value);
});

function renderCountry(neighbour) {
  console.log(country);
  const html = `<article class="country">
  <img class="country__img" src="${country.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${country.name.common}</h3>
    <h4 class="country__region">${country.region}</h4>
    <p class="country__row"><span>👫</span>${(
      country.population / 1_000_000
    ).toFixed(2)}M</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(country.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(country.currencies)[0].name
    } ${Object.values(country.currencies)[0].symbol}</p>
  </div>
</article>`;
  countriesContainer.innerHTML += html;
  countriesContainer.style.opacity = 1;
}

function getCountry(neighbour) {
  fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    .then((res) => res.json())
    .then((data) => renderCountry(data[0]));
}
