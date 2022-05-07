const btn = document.querySelector(".btn");
const container = document.querySelector(".main");
const request = function () {
  fetch("https://api.adviceslip.com/advice")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const newAdvice = `
      <h1 class="advice">ADVICE #${data.slip.id}</h1>
      <p class="quote">"
        ${data.slip.advice}"
      </p>
    `;

      container.innerHTML = newAdvice;
    });
};
request();

btn.addEventListener("click", request);
