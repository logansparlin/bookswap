Template.login.helpers({
	emailLabel: function() {
		return Schema.login.label('email')
	},
	passwordLabel: function() {
		return Schema.login.label('password')
	}
})

Template.login.events({
	'submit form': function(e) {
		e.preventDefault()
		console.log('Input Form Submitted')
		var email = $('#register-email').val();
		var password = $('#register-password').val();
		Meteor.loginWithPassword(email, password, function(err) {
			if(err) {
				console.log(err)
			} else {

			}
			return false;
		})
		$('body').removeClass('login--active register--active')
	}
})