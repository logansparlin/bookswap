Template.register.helpers({
	emailLabel: function() {
		return Schema.register.label('email')
	},
	passwordLabel: function() {
		return Schema.register.label('password')
	}
})

Template.register.events({
	'submit form': function(e, template) {
		e.preventDefault()
		var lastName = $('#register-lastName').val();
		var firstName = $('#register-firstName').val();
		var email = $('#register-email').val();
		var password = $('#register-password').val();
		Accounts.createUser({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password
		})
		console.log('user created')
	}
})