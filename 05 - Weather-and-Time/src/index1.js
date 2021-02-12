// import {coord} from './index';

const handlePress = () => {
    const city = document.getElementById("cityInput");
    console.log(city.value);
    var e = new Date();
    var utc = e.getTime() + e.getTimezoneOffset() * 60000;
    var multi = new Date(utc + 3600000 * 1);
  
    console.log();
    //const cityValue = city.value;
    const apiKey = "YNV6KRHE7W2R";

    var lat = "18.516726";
    var lon = "73.856255";

    fetch(
      "http://api.timezonedb.com/v2.1/get-time-zone?key=YNV6KRHE7W2R&format=json&by=position&lat="+lat+"&lng="+lon
    )
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        console.log(data);
        putTime(data);
      })
      .catch(function () {
        // catch any errors
      });
};

function putTime(d) {
    document.getElementById("location").innerHTML = d.zoneName;
    console.log('Succeed');
    
}

document.getElementById("time").onclick = handlePress;
