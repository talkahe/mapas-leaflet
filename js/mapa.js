window.onload  = function(){
	// Mapa Alfacar 1
	var map = L.map('mapa-alfacar').setView([40.25, -3.41], 6);

	L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		maxZoom: 18
	}).addTo(map);

	map.locate({setView: true});
	map.on('locationfound', function(e){
		L.marker(e.latlng).addTo(map);
	});
};