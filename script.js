
$("button").click("click", function(event){
    event.preventDefault();

    userInput = $("input").val()
    console.log(userInput)
    afterClick(userInput)
})


function afterClick(city){

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4a7fdf3ffa7fe3babaad39da372fd0e2&units=imperial";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  var town = document.createElement("h2") 
  town.textContent = response.name;

  var icon = document.createElement("img")
  icon.setAttribute("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png")

  var temp = document.createElement("p")
  temp.textContent = "Temp: " + response.main.temp 

  $("#current-weather").append(town, icon, temp)
  
uvRating(response.coord.lat, response.coord.lon)
fiveDay(city)
  
}); 

}

function uvRating(lat, long){
  var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=a7fdf3ffa7fe3babaad39da372fd0e2&units=imperial"


}

function fiveDay(city){
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=4a7fdf3ffa7fe3babaad39da372fd0e2&units=imperial" 

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var fiveDayForcast = document.createElement("h2") 
    fiveDayForcast.textContent = response.list[0]




  });

  }



