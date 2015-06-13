Template.mapsTest.helpers({
	location: function() {
		// var location = Geolocation.latLng();
		// if(location !== null) {
		// 	var lat = location.lat,
		// 		lng = location.lng;
		// 	reverseGeocode.getLocation(lat, lng, function(location){

		// 	    Session.set('location', reverseGeocode.getAddrObj());
		// 	});
		// 	var data = Session.get('location');
		// 	if(data) {
		// 		console.log(data)
		// 		var address = data[0].shortName + ' ' + data[1].shortName;
		// 		var city = data[4].longName;
		// 		var state = data[6].shortName;
		// 		return address + ', ' + city + ', ' + state;
		// 	}
		// } else {
		// 	return 'loading'
		// }
		return '1312 E Cherry Street';
	},
	nearPlaces: function() {
		var meters = 1609.34;
		var miles = Template.instance().defaultDistance.get() || defaultDistance;
		var distance = miles * meters;
		var location = [-94.515381, 37.086953]
		var nearPlaces = Books.find({
			location: {
				$near: {
					$geometry: {
						type: "Point",
						coordinates: location
					},
					$maxDistance: distance
				}
			}
		});
		return nearPlaces;
	},
	refLocation: function() {
		return '1312 E Cherry St, Springfield, MO'
	},
	refLatLon: function() {
		var address = '1312 E Cherry St, Springfield, MO'
		Meteor.call('getLatLon', address, function(error, result) {
			Session.set('address', result)
		});
		var object = Session.get('address');
		if(object !== undefined) {
			return object[0].longitude + ', ' + object[0].latitude;
		}
	}
});

Template.mapsTest.events({
	'change .distance-range, input .distance-range': function(e) {
		var range = $(e.target).val();
		Template.instance().defaultDistance.set( range )
	}
})

Template.mapsTest.created = function() {
	this.defaultDistance = new ReactiveVar(25);
}