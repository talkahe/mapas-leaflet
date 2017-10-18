window.onload  = function(){
	var map = L.map('geomapa');

	L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		maxZoom: 20,
		subdomains:['mt0','mt1','mt2','mt3']
	}).addTo(map);

	map.locate({setView: true});
	map.on('locationfound', function(e){
		L.marker(e.latlng).addTo(map);
	});
};