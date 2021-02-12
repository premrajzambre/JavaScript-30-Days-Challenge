let lat = "18.516726";
let lon = "73.856255";



const handleClick = () => {
  const city = document.getElementById("cityInput");
  console.log(city.value);
  var e = new Date();
  var utc = e.getTime() + e.getTimezoneOffset() * 60000;
  var multi = new Date(utc + 3600000 * 1);

  console.log();
  const cityValue = city.value;
  const key = "8eadc328b47149521321cf2bb779cf36";

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityValue +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      console.log(data);
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
};

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  document.getElementById("description").innerHTML = d.weather[0].description;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("location").innerHTML = d.name;

  lat = d.coord.lat;
  lon = d.coord.lon;
}
document.getElementById("weather").onclick = handleClick;
// export = {coord};
 




// Time Api


const handlePress = () => {
  const city = document.getElementById("cityInput");
  console.log(city.value);
  var e = new Date();
  var utc = e.getTime() + e.getTimezoneOffset() * 60000;
  var multi = new Date(utc + 3600000 * 1);

  console.log();
  //const cityValue = city.value;
  const apiKey = "YNV6KRHE7W2R";

  //  
  fetch(
    "http://api.timezonedb.com/v2.1/get-time-zone?key=YNV6KRHE7W2R&format=json&by=position&lat="+lat+"&lng="+lon
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      console.log(data);
      putTime(data);
      // putTimee(data);
      
    })
    .catch(function () {
      // catch any errors
    });
};

function putTime(d) {
  document.getElementById("timeZone").innerHTML = d.zoneName;
  document.getElementById("time12").innerHTML = d.formatted;
  // console.log(lon,lat);
  // console.log('Succeed');
  
}
document.getElementById("time").onclick = handlePress;
