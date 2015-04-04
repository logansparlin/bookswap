Template.accounts.events({
	'click .close-icon': function() {
		$('body').removeClass('login--active')
		$('body').removeClass('register--active')
		$('.accounts-form input').not('[type="submit"]').val('');
		Session.set('accountErrors')
		Session.set('loginError')
		Router.go('/')
	}
})