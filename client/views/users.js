Template.users.helpers({
	user: function() {
		var user = Meteor.user();
		return user;
	},
	email: function() {
		var email = Meteor.user().emails[0].address;
		return email
	}
})