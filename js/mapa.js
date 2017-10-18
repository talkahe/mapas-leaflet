window.onload  = function(){
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

	var map = L.map('geomapa', {
		layers: [googleStreets]
	});
	L.control.layers(capas).addTo(map);

	map.locate({setView: true});
	map.on('locationfound', function(e){
		L.marker(e.latlng).addTo(map);

		var radius = e.accuracy / 2;
		L.circle(e.latlng, {'radius': radius, 'color': '#0026FF'}).addTo(map);
	});
};