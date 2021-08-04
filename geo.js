let el = document.getElementById("support");
// check for Geolocation support
if (navigator.geolocation) {
	el.textContent = "geoLocation supported";
}
else {
	el.textContent = "Geolocation is not supported for this Browser/OS version yet.";
}

window.onload = function() {
	let startPos;
	let geoSuccess = function(position) {
		startPos = position;
		document.getElementById('lat').innerHTML = startPos.coords.latitude;
		document.getElementById('lon').innerHTML = startPos.coords.longitude;
	};

	navigator.geolocation.getCurrentPosition(geoSuccess);
};

