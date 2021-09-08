var queryURL = "http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=11ae9b19ddc64a1c99d8d93d7f304871&mapid=40380";

var welcomeTitle = document.getElementById('welcome');
var goButton = document.getElementById('lets-go');
var permText = document.getElementById('perm');
var noButton = document.getElementById('nobtn');
var yesButton = document.getElementById('yesbtn');
var h3Text = document.getElementById('h3text');
var subButton = document.getElementById('subbtn');
var nearInfo = document.getElementById('nearinfo');
var destInfo = document.getElementById('destinfo');





window.onload = function() {
    document.getElementById('perm').style.display = 'none';
    document.getElementById('nobtn').style.display = 'none';




}

    function geoFindMe() {
        if (!navigator.geolocation){
         console.log("Geolocation is not supported by your browser");
          return;
        }
        function success(position) {
          var latitude  = position.coords.latitude;
          var longitude = position.coords.longitude;
          reverseGeocodingWithGoogle(longitude, latitude);
          console.log(reverseGeocodingWithGoogle(longitude, latitude));
        }
        function error() {
          console.log("Unable to retrieve your location");
        }
        navigator.geolocation.getCurrentPosition(success, error);
      }

      geoFindMe();
// fetch (queryURL) {
    
// }
