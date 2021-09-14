// <-------------------------------Geo Location Script--------------------------------->

// const successCallback = (position) => {
//     console.log(position)
// };

// const errorCallback = (errorCallback) => {
//     console.log(position)
// };

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
//     enableHighAccuracy: true,
//     timeout: 5000, //it is in milliseconds
// });

// watchId allows to keep updating the USER's location as they walk around
// const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);

// To stop watching location use the one below
// navigator.geolocation.clearWatch(watchId);

// <---------------------------------Another Option------------------------------->
// This option is connected to a button on the HTML side.
// Reference this code on mozzila @ https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples
// Hopefully one of these works.



var submitButton = $('#submitBtn');
var userOption = $('#ctaStationOptions').val();


//HIDE PAGES CODE - COMMENT BACK IN ONCE READY TO HIDE PAGES
// var page2 = $("#pagetwo");
// var page3 = $("#pagethree");
// var page4 = $("#pagefour");
// var page5 = $("#pagefive");

// $(document).ready(function(){
//   $("#letsGoBtn").click(function(){
//       $("#pagetwo").fadeToggle();
//   });
// });

// $(document).ready(function(){
//   $("#nextLocBtn").click(function(){
//       $("#pagethree").fadeToggle();
//   });
// });

// $(document).ready(function(){
//   $("#nextBtn").click(function(){
//       $("#pagefour").fadeToggle();
//   });
// });

// $(document).ready(function(){
//   $("submitBtn").click(function(){
//       $("#pagefive").fadeToggle();
//   });
// });




function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

    //STORING LAT LONG AND RETRIEVING LAT/LONG - IT WORKS!!!
    var latLongStore = { 'latitude': latitude, 'longitude': longitude };
    // This puts the object into storage
    localStorage.setItem('latLongStore', JSON.stringify(latLongStore));
    // RThis retrieves the object from storage
    var retrievedObject = localStorage.getItem('latLongStore');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);


function subButton(event) {
  event.preventDefault();

  var userOption = $('#ctaStationOptions').val();
  console.log(userOption);

  if (!userOption) {
      return;
  }


};


function getApi() {

var queryURL = 'https://cors-anywhere.herokuapp.com/http://www.transitchicago.com/api/1.0/alerts.aspx?outputType=JSON';

fetch(queryURL) 
  


.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);

})
};

submitButton.on('click', getApi);



/* $.ajax({
  url: "https://data.cityofchicago.org/resource/8pix-ypme.json?red=true",
  type: "GET",
  data: {
    "$limit" : 5000,
    //"$red": true,
    "$$app_token" : "qZrCvWmumZjN79dBFQ9ODzYH8"
  }
}).then(function(data){
    var appendHTML = "";

    appendHTML += `<div id="nearInfo">
      <h7>${data.ada}</h7>
    </div>`

$("#nearInfo").append(appendHTML)

});
*/

// .done(function(data) {
// // Take out ALERT below before FINAL PROJECT!!!!!
// alert("Retrieved " + data.length + " records from the dataset!");
// console.log(data);
// });

fetch('https://data.cityofchicago.org/resource/8pix-ypme.json?red=true')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("nearInfo");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Station: ' + data[i].station_descriptive_name + ' ' + data[i].stop_name;
                mainContainer.appendChild(div);
            }
        }

        let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8781, lng: 87.6298 },
    zoom: 8,
    mapId: '9366335a8cabde1',
  });
}














/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://data.cityofchicago.org/resource/8pix-ypme.json?red=true",
  "method": "GET"
}

// var currentStations = document.querySelector('#nearInfo');

$.ajax(settings).done(function (response) {
  console.log(response);
  // var content = response.station_descriptive_name;
  
  var currentStations = response.station_name[0].main;
  
  //$("#nearInfo").append(nearInfo);

  //$("#nearInfo").append(content);
});

var content = 'Station :'+data.station_name ;
content += 'Stop : '+data.stop_name ;
$("#nearInfo").append(content);
*/