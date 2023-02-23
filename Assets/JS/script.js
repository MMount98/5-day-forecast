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
      var currentArray = [
        Math.round(data.list[0].main.temp),
        Math.round(data.list[0].wind.speed),
        data.list[0].main.humidity,
      ];
      currentDay.text(currentName + " " + day.format("dddd, MMMM D"));
      var currentImg = $("<img></img").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[0].weather[0].icon +
          "@2x.png"
      );
      currentStats.append(currentImg);

      for (var i = 0; i < currentArray.length; i++) {
        var createLi = $("<li></li>").text(currentArray[i]);

        currentStats.append(createLi);
      }
      var dayOneBox = $(".dayOneBox h2");
      var dayOneDate = day.add(1, "d").format("M/D/YY");
      var dayOneTemp = Math.round(data.list[8].main.temp);
      var dayOneWind = Math.round(data.list[8].wind.speed);
      var dayOneHum = data.list[8].main.humidity;
      console.log(dayOneHum);

      dayOneBox.text(dayOneDate);

      var dayOneImg = $("<img></img").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[8].weather[0].icon +
          "@2x.png"
      );
      dayOneBox.append(dayOneImg);

      var createOneTemp = $("<p></p>").text("Temp: " + dayOneTemp + "\xB0");
      dayOneBox.append(createOneTemp);

      var createOneWind = $("<p></p>").text("Temp: " + dayOneWind + "MPH");
      dayOneBox.append(createOneWind);

      var createOneHum = $("<p></p>").text("Humidity: " + dayOneHum + "%");
      dayOneBox.append(createOneHum);

      var dayTwoBox = $(".dayTwoBox h2");
      var dayTwoDate = day.add(2, "d").format("M/D/YY");
      var dayTwoTemp = Math.round(data.list[16].main.temp);
      var dayTwoWind = Math.round(data.list[16].wind.speed);
      var dayTwoHum = data.list[16].main.humidity;

      dayTwoBox.text(dayTwoDate);

      var dayTwoImg = $("<img></img").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[16].weather[0].icon +
          "@2x.png"
      );
      dayTwoBox.append(dayTwoImg);

      var createTwoTemp = $("<p></p>").text("Temp: " + dayTwoTemp + "\xB0");
      dayTwoBox.append(createTwoTemp);

      var createTwoWind = $("<p></p>").text("Temp: " + dayTwoWind + "MPH");
      dayTwoBox.append(createTwoWind);

      var createTwoHum = $("<p></p>").text("Humidity: " + dayTwoHum + "%");
      dayTwoBox.append(createTwoHum);
    });
}

getApi();

//laebl boxes with cutoms names
//.each(box) loop
//for each thing in this box grab this temp
//uv index
