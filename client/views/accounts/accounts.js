Template.accounts.events({
	'click .close-icon': function() {
		$('body').removeClass('login--active')
		$('body').removeClass('register--active')
		Router.go('/')
	}
})