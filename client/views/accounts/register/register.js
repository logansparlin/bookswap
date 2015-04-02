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
		var data = {
			lastName : $('#register-lastName').val(),
			firstName : $('#register-firstName').val(),
			email : $('#register-email').val(),
			password : $('#register-password').val()
		}
		var context = Schema.register.newContext();
		var isValid = context.validate(data);
		if(isValid) {
			Accounts.createUser({
				email: data.email,
				password: data.password,
				profile: {
					firstName: data.firstName,
					lastName: data.lastName,
					username: data.firstName + " " + data.lastName
				}
			});
		} else {
			console.log("error:")
		}
		$('body').removeClass('register--active')
		$('body').removeClass('login--active')
	}
})