// Mapa Alfacar 1
var map = L.map('mapa-alfacar', {
	dragging: false,
	scrollWheelZoom: false,
	keyboard: false,
	doubleClickZoom: false,
	zoomControl: false
}).setView([37.242331, -3.562764], 15);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 18
}).addTo(map);

var markerFuenteGrande = L.marker([37.246660, -3.553813],{draggable: false, title: 'Fuente Grande'}).addTo(map);
markerFuenteGrande.bindTooltip("Fuente Grande").openTooltip();