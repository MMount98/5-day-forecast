var currentDay = $("span");
var currentStats = $(".currentDay");
var day = dayjs();
var requestUrl =
  "https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=2061c6c3acd7e8fc81514bd609fb308e&units=imperial";

function getApi() {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var currentName = data.city.name;
      console.log(currentName);
      var currentArray = [
        data.list[0].weather[0].icon,
        Math.round(data.list[0].main.temp),
        Math.round(data.list[0].wind.speed),
        data.list[0].main.humidity,
      ];
      currentDay.text(currentName + " " + day.format("dddd, MMMM D"));

      for (var i = 0; i < currentArray.length; i++) {
        var createLi = $("<li></li>").text(currentArray[i]);

        currentStats.append(createLi);
      }
      console.log(currentArray);
    });
}

getApi();
