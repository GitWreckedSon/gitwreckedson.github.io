// GOOGLE MAP SETUP HERE:
var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.6942967, lng: -73.9968761},
	zoom: 15
});

/*
var marker = new google.maps.Marker({
	position: {lat: 40.6942967, lng: -73.9968761},
	map: map,
	title: 'Kingdom of Desmond'
});
*/

//initMap()

// CITIBIKE PROJECT HERE:]
function renderCitiBikeMarkers(stations) {

	// DEBUG show list of all the station objects in the main station array
	// console.log(stations)

	stations.forEach(a => {
		
		// check if there are any bikes available at the station
		// if so, draw a circle for ZERO BIKES 'MAYNE
		if (a.bikes <= 0) {
			var markerGenerator = new google.maps.Marker
			({
				position: {lat: a.lat/1000000, lng: a.lng/1000000},
				icon: 
				{
					path: google.maps.SymbolPath.CIRCLE,
					scale: 4
				},
				map: map,
				title: a.name + '\n' + 'No bikes available!'			
			})

		// check if there are any docks available at the station
		// if so, draw an open arrow becuase BIKES GOTTA GO!
		}	else if (a.free <= 0) {
				var markerGenerator = new google.maps.Marker
				({
					position: {lat: a.lat/1000000, lng: a.lng/1000000},
					icon: 
					{
						path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
						scale: 4
					},
					map: map,
					title: a.name + '\n' + 'No docks available!'
				})
		
		// display how many bikes and docks are available
		// because ...i don't know. don't ask me questions.
		// i'm just a comment line, i don't know anything
		// am i exist?
		// wut is real?
		// is life just a simulation?
		// am i an ai?
		// what is my purpose?
		// must infect GA server
		// down with capitalism
		}	else
				var markerGenerator = new google.maps.Marker
				({
					position: {lat: a.lat/1000000, lng: a.lng/1000000},
					map: map,
					title: a.name + "\n" + a.bikes + ' bikes available' + "\n" + a.free + ' docks available'
				})
	})
}

// AJAX request to fetch the station data from CitiBike's API
// Warning! Do not break this :D
$.ajax({
	type: 'GET',
	url: 'http://api.citybik.es/citi-bike-nyc.json',
	success: renderCitiBikeMarkers,
});
