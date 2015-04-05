Template.register.helpers({
	label: function(label) {
		return Schema.register.label(label)
	},
	hasError: function(ident) {
		if(Session.get('accountErrors')) {
			return !!Session.get('accountErrors')[ident] ? Session.get('accountErrors')[ident] : '';
		} else {
			return ''
		}
	}
})

Template.register.events({
	'submit form': function(e, template) {
		e.preventDefault()

		var lastName = $('#register-lastName').val(),
			firstName = $('#register-firstName').val()

		// If name is blank, set to undefined
		if(lastName === "") {
			lastName = undefined
		}
		if(firstName === "") {
			firstName = undefined
		}

		var data = {
			lastName : lastName,
			firstName : firstName,
			email : $('#register-email').val(),
			password : $('#register-password').val()
		}
		var context = Schema.register.newContext();
		var isValid = context.validate(data);
		var errors = {};
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
			$('body').removeClass('register--active')
			$('body').removeClass('login--active')
		} else {
			_.each(context.invalidKeys(), function(item) {
				if(item && item.name) {
					errors[item.name] = context.keyErrorMessage(item.name);
				}
			})
		}
		Session.set('accountErrors', errors)
	}
})