Template.mainHeader.events({
	'click .logout': function() {
		Meteor.logout(function(err) {
			if(err) {
				alert(err);
			} else {
				Router.go('/');
			}
		})
	}
})