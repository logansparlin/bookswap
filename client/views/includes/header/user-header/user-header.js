Template.userHeader.events({
	'click .settings-link': function() {
		$('body').toggleClass('settings--active')
	},
	'click .user-logout': function() {
		Meteor.logout()
		$('body').removeClass('settings--active')
	}
})