Template.login.helpers({
	emailLabel: function() {
		return Schema.login.label('email')
	},
	passwordLabel: function() {
		return Schema.login.label('password')
	},
	loginError: function() {
		return Session.get('loginError');
	}
})

Template.login.events({
	'submit form': function(e) {
		e.preventDefault()
		console.log('Input Form Submitted')
		var email = $('#login-email').val();
		var password = $('#login-password').val();
		Meteor.loginWithPassword(email, password, function(err) {
			if(err) {
				console.log(err.reason)
				Session.set('loginError', err.reason)
			} else {
				$('body').removeClass('login--active register--active')
			}
		})
	}
})