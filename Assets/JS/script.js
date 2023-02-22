var requestUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=denver&appid=2061c6c3acd7e8fc81514bd609fb308e&units=imperial";

function getApi() {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi();
