Template.mapsTest.helpers({
	location: function() {
		var location = Geolocation.latLng();
		if(location !== null) {
			var lat = location.lat,
				lng = location.lng;
			reverseGeocode.getLocation(lat, lng, function(location){

			    Session.set('location', reverseGeocode.getAddrObj());
			});
			var data = Session.get('location');
			if(data) {
				console.log(data)
				var address = data[0].shortName + ' ' + data[1].shortName;
				var city = data[4].longName;
				var state = data[6].shortName;
				return address + ', ' + city + ', ' + state;
			}
		} else {
			return 'loading'
		}
	}
})