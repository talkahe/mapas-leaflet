window.onload  = function(){
	//Capas
	var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		maxZoom: 20,
		subdomains:['mt0','mt1','mt2','mt3']
	}),
	googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
	    maxZoom: 20,
	    subdomains:['mt0','mt1','mt2','mt3']
	}),
	googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	    maxZoom: 20,
	    subdomains:['mt0','mt1','mt2','mt3']
	});

	var capas = {
		"Google Streets": googleStreets,
		"Google Hybrid": googleHybrid,
		"Google Satellite": googleSat
	};

	//Mapa
	var map = L.map('geomapa', {
		layers: [googleStreets],
		minZoom: 4
	});
	L.control.layers(capas).addTo(map);

	// Geolocalización
	map.locate({setView: true, maxZoom: 6});
	map.on('locationfound', function(e){
		L.marker(e.latlng).addTo(map);

		var radius = e.accuracy / 2;
		L.circle(e.latlng, {radius: radius, color: '#0026FF', weight: 5, opacity: 0.1, fillOpacity: 0.4}).addTo(map);

		map.setMaxBounds([e.latlng]);
	});
};