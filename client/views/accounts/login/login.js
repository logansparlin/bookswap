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
	}
})