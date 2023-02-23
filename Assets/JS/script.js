var currentDay = $("span");
var currentStats = $(".currentDay");
var recentBox = $(".pastBox");
var searchInput = $("#searchInput");
var searchBtn = $("#searchBtn");
var pastSearch = [];
var day = dayjs();

searchBtn.on("click", function (event) {
  event.preventDefault();

  var userSearch = searchInput.val();
  pastSearch.push(userSearch);

  requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    userSearch +
    "&appid=2061c6c3acd7e8fc81514bd609fb308e&units=imperial";

  localStorage.setItem("pastSearch", JSON.stringify(pastSearch));
  var storedHistory = JSON.parse(localStorage.getItem("pastSearch"));

  getApi();
});

function getApi() {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //current Day - Local Varibles
      var currentDayBox = $(".currentDayBox");
      var currentName = data.city.name;
      var currentDayTemp = Math.round(data.list[0].main.temp);
      var currentDayWind = Math.round(data.list[0].wind.speed);
      var currentDayHum = data.list[0].main.humidity;

      currentDay.text(currentName + " " + day.format("dddd, MMMM D"));

      $("#currentIcon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[0].weather[0].icon +
          "@2x.png"
      );

      $("#temp").text("Temp: " + currentDayTemp + "\xB0");

      $("#wind").text("Wind: " + currentDayWind + " MPH");

      $("#hum").text("Humidity: " + currentDayHum + "%");

      //Day One Box - Local Varibles
      var dayOneBox = $(".dayOneBox h2");
      var dayOneDate = day.add(1, "d").format("M/D/YY");
      var dayOneTemp = Math.round(data.list[8].main.temp);
      var dayOneWind = Math.round(data.list[8].wind.speed);
      var dayOneHum = data.list[8].main.humidity;

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

      var createOneWind = $("<p></p>").text("Wind: " + dayOneWind + " MPH");
      dayOneBox.append(createOneWind);

      var createOneHum = $("<p></p>").text("Humidity: " + dayOneHum + "%");
      dayOneBox.append(createOneHum);

      //day Two Box - Local Varibles
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

      var createTwoWind = $("<p></p>").text("Wind: " + dayTwoWind + " MPH");
      dayTwoBox.append(createTwoWind);

      var createTwoHum = $("<p></p>").text("Humidity: " + dayTwoHum + "%");
      dayTwoBox.append(createTwoHum);

      //Day Three Box - Local Varibles
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

      var createThreeWind = $("<p></p>").text("Wind: " + dayThreeWind + " MPH");
      dayThreeBox.append(createThreeWind);

      var createThreeHum = $("<p></p>").text("Humidity: " + dayThreeHum + "%");
      dayThreeBox.append(createThreeHum);

      //Day Four Box - Local Varibles
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

      var createFourWind = $("<p></p>").text("Wind: " + dayFourWind + " MPH");
      dayFourBox.append(createFourWind);

      var createFourHum = $("<p></p>").text("Humidity: " + dayFourHum + "%");
      dayFourBox.append(createFourHum);

      //Day Five Box - Local Varibles
      var dayFiveBox = $(".dayFiveBox h2");
      var dayFiveDate = day.add(5, "d").format("M/D/YY");
      var dayFiveTemp = Math.round(data.list[39].main.temp);
      var dayFiveWind = Math.round(data.list[39].wind.speed);
      var dayFiveHum = data.list[39].main.humidity;

      dayFiveBox.text(dayFiveDate);

      var dayFiveImg = $("<img></img").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[39].weather[0].icon +
          "@2x.png"
      );
      dayFiveBox.append(dayFiveImg);

      var createFiveTemp = $("<p></p>").text("Temp: " + dayFiveTemp + "\xB0");
      dayFiveBox.append(createFiveTemp);

      var createFiveWind = $("<p></p>").text("Wind: " + dayFiveWind + " MPH");
      dayFiveBox.append(createFiveWind);

      var createFiveHum = $("<p></p>").text("Humidity: " + dayFiveHum + "%");
      dayFiveBox.append(createFiveHum);
    });
}

//creat btn function in the button

// $(".pastBtnSearch").on("click", function (event) {
//   event.preventDefault();
//   var userSearch = event.target.innerText;
//   var userSearchURL =
//     weatherUrl + userSearch + "&length1" + weatherApiKey + "&units=imperial";
//   fetch(userSearchURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       addWeatherToday(data);
//     });
// });
// var cityList = JSON.parse(localStorage.getItem("pastSearch"));
//   pastSearchEl.textContent = "";
