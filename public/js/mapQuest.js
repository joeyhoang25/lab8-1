function initMap() {
	L.mapquest.key = 'OhGZigmA4WfNGAgTNjbDoLHXv0ZjeHpw';
	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [37.7749, -122.4194],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	  });

	//Add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
	L.marker([32.87897128257093, -117.23575787568393]).addTo(map);
}