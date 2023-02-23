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

      //Day One box
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

      var createOneWind = $("<p></p>").text("Wind: " + dayOneWind + "MPH");
      dayOneBox.append(createOneWind);

      var createOneHum = $("<p></p>").text("Humidity: " + dayOneHum + "%");
      dayOneBox.append(createOneHum);

      //day Two Box
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

      var createTwoWind = $("<p></p>").text("Wind: " + dayTwoWind + "MPH");
      dayTwoBox.append(createTwoWind);

      var createTwoHum = $("<p></p>").text("Humidity: " + dayTwoHum + "%");
      dayTwoBox.append(createTwoHum);

      //Day Three Box
      var dayThreeBox = $(".dayThreeBox h2");
      var dayThreeDate = day.add(3, "d").format("M/D/YY");
      var dayThreeTemp = Math.round(data.list[24].main.temp);
      var dayThreeWind = Math.round(data.list[24].wind.speed);
      var dayThreeHum = data.list[24].main.humidity;

      dayThreeBox.text(dayThreeDate);

      var dayThreeImg = $("<img></img").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[24].weather[0].icon +
          "@2x.png"
      );
      dayThreeBox.append(dayThreeImg);

      var createThreeTemp = $("<p></p>").text("Temp: " + dayThreeTemp + "\xB0");
      dayThreeBox.append(createThreeTemp);

      var createThreeWind = $("<p></p>").text("Wind: " + dayThreeWind + "MPH");
      dayThreeBox.append(createThreeWind);

      var createThreeHum = $("<p></p>").text("Humidity: " + dayThreeHum + "%");
      dayThreeBox.append(createThreeHum);

      //Day Four Box
      var dayFourBox = $(".dayFourBox h2");
      var dayFourDate = day.add(4, "d").format("M/D/YY");
      var dayFourTemp = Math.round(data.list[32].main.temp);
      var dayFourWind = Math.round(data.list[32].wind.speed);
      var dayFourHum = data.list[32].main.humidity;

      dayFourBox.text(dayFourDate);

      var dayFourImg = $("<img></img").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[32].weather[0].icon +
          "@2x.png"
      );
      dayFourBox.append(dayFourImg);

      var createFourTemp = $("<p></p>").text("Temp: " + dayFourTemp + "\xB0");
      dayFourBox.append(createFourTemp);

      var createFourWind = $("<p></p>").text("Wind: " + dayFourWind + "MPH");
      dayFourBox.append(createFourWind);

      var createFourHum = $("<p></p>").text("Humidity: " + dayFourHum + "%");
      dayFourBox.append(createFourHum);
    });
}

getApi();

//laebl boxes with cutoms names
//.each(box) loop
//for each thing in this box grab this temp
//uv index
