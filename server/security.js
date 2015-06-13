Meteor.startup(function() {
	Locations._ensureIndex({location: "2dsphere"});
	Meteor.publish('locations', function() {
		return Locations.find({});
	})
})