function mapa() {
	var map = L.map('map').
	setView([37.224102, -3.681285], 
		14);
		 
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		    maxZoom: 18
		}).addTo(map);

	L.control.scale().addTo(map);
	L.marker([37.223744, -3.686908]).addTo(map);

	map.locate({setView: true, maxZoom: 16});
	var location = e.latlng
         L.marker(location).addTo(map)

	L.control.layers(baseLayers, overlays).addTo(map);
	marker.dragging.disable();
	map.dragging.disable();
}
