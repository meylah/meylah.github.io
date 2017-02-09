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
function Geomagnetic() 
{
let sensor = new MagnetometerSensor();
sensor.start();

sensor.onchange = function(event) {
    console.log("Magnetic field along the X-axis " + event.reading.magneticFieldX);
    console.log("Magnetic field along the Y-axis " + event.reading.magneticFieldY);
    console.log("Magnetic field along the Z-axis " + event.reading.magneticFieldZ);
};

sensor.onerror = event => console.log(event.error.name, event.error.message);
};
