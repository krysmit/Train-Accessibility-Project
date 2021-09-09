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
  

