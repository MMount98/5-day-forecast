//GLOBAL VARIBLES
var landingPage = $(".landingPage");
var currentDay = $("span");
var currentStats = $(".currentDay");
var recentBox = $(".pastBox");
var searchInput = $("#searchInput");
var searchBtn = $("#searchBtn");
var pastSearch = JSON.parse(localStorage.getItem("pastSearch")) || []; //definded to check local storage from past vists
var day = dayjs();
var statusCheck;

//EVENT LISNTERS
searchBtn.on("click", function (event) {
  event.preventDefault();
  var userSearch = searchInput.val();

  //If statement to track if the user input a city
  if (userSearch === "") {
    alert("Please Enter a Valid City Name");
    return;
  }

  //Pushs users input to global var
  pastSearch.push(userSearch);
  //restes input feild
  searchInput.val("");

  //removes class 'hidden' from DOM element to display info boxes
  $(".container").removeClass("hidden");
  //add 'hidden' to landing text
  landingPage.addClass("hidden");

  //custom request URL to add users input
  requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    userSearch +
    "&appid=2061c6c3acd7e8fc81514bd609fb308e&units=imperial";

  //saves user input to local storage
  localStorage.setItem("pastSearch", JSON.stringify(pastSearch));
  var storedHistory = JSON.parse(localStorage.getItem("pastSearch"));

  //clears the recent search box to avoid duplication
  $("#pastBox").empty();

  //for loop to build recent buttons from past user input
  for (var i = 0; i < storedHistory.length; i++) {
    var createBtn = $("<button></button>")
      .attr("class", "pastBtn")
      .text(storedHistory[i]);
    $("#pastBox").append(createBtn);
  }
  //sets event lisnter to the past buttons and updates the URL and call getAPI function
  $(".pastBtn").on("click", function (event) {
    var savedCity = event.target.innerText;

    requestUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      savedCity +
      "&appid=2061c6c3acd7e8fc81514bd609fb308e&units=imperial";
    getApi(requestUrl);
  });
  //Calls get API when search btn is clicked
  getApi(requestUrl);
});

//FUNCTIONS
function getApi(requestUrl) {
  //Grabs Data from API
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

      //Sets Stats for current Weather
      currentDay.text(currentName + " " + day.format("dddd, MMMM D"));

      $("#currentIcon").attr(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[0].weather[0].icon +
          "@2x.png"
      );
      //Changes the DOM to display the data from API
      $("#temp").text("Temp: " + currentDayTemp + "\xB0 F");

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

      var createOneTemp = $("<p></p>").text("Temp: " + dayOneTemp + "\xB0 F");
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

      var createTwoTemp = $("<p></p>").text("Temp: " + dayTwoTemp + "\xB0 F");
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

      var createThreeTemp = $("<p></p>").text(
        "Temp: " + dayThreeTemp + "\xB0 F"
      );
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

      var createFourTemp = $("<p></p>").text("Temp: " + dayFourTemp + "\xB0 F");
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

      var createFiveTemp = $("<p></p>").text("Temp: " + dayFiveTemp + "\xB0 F");
      dayFiveBox.append(createFiveTemp);

      var createFiveWind = $("<p></p>").text("Wind: " + dayFiveWind + " MPH");
      dayFiveBox.append(createFiveWind);

      var createFiveHum = $("<p></p>").text("Humidity: " + dayFiveHum + "%");
      dayFiveBox.append(createFiveHum);

      //Sets background visual to change depening on given weather condition from API
      if (data.list[0].weather[0].main === "Clouds") {
        $("body").removeClass();
        $("body").addClass("cloudyDay");
      } else if (data.list[0].weather[0].main === "Clear") {
        $("body").removeClass();
        $("body").addClass("sunnyDay");
      } else if (data.list[0].weather[0].main === "Snow") {
        $("body").removeClass();
        $("body").addClass("snowyDay");
      } else if (data.list[0].weather[0].main === "Rain") {
        $("body").removeClass();
        $("body").addClass("rainyDay");
      } else if (data.list[0].weather[0].main === "Drizzle") {
        $("body").removeClass();
        $("body").addClass("drizzle");
      } else if (data.list[0].weather[0].main === "Thunderstorm") {
        $("body").removeClass();
        $("body").addClass("thunder");
      }
    });
}
