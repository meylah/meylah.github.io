function getLocation() 
{
    if (navigator.geolocation)

        navigator.geolocation.getCurrentPosition(showPosition, showError);
    else
        x.innerHTML = "Geolocation is not supported by this browser.";
}

function showPosition(position) 
{
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=600x500&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    document.getElementById("hiThere").innerHTML = "latitude: " + position.coords.latitude + "<br/>" + "longitude: " + position.coords.longitude;

    let sensor = new MagnetometerSensor();
sensor.start();

sensor.onchange = function(event) {
    alert("Hey you");
document.getElementById("hiThere1").innerHTML = "MFx: " + event.reading.magneticFieldX + "<br/>" + "MFy: " + event.reading.magneticFieldY;
};
sensor.onerror = event => console.log(event.error.name, event.error.message);
}

function showError(error) 
{
    var x = document.getElementById("hiThere");
    switch(error.code) 
    {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
let sensor = new MagnetometerSensor();
sensor.start();

sensor.onchange = function(event) {
    alert("Hey you");
document.getElementById("hiThere1").innerHTML = "MFx: " + event.reading.magneticFieldX + "<br/>" + "MFy: " + event.reading.magneticFieldY;
};
sensor.onerror = event => console.log(event.error.name, event.error.message);
