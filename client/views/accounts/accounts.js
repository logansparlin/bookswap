Template.accounts.events({
	'click .close-icon': function() {
		$('body').removeClass('login--active')
		$('body').removeClass('register--active')
		$('.accounts-form input').val('');
		Router.go('/')
	}
})