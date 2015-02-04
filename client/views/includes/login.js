Template.login.events({
	'submit #login-form' : function(e, t) {
		e.preventDefault();
		// retrieve the input field values
		var email = t.find('#login-email').value,
		password = t.find('#login-password').value;

		// Validate fields here
		$('body').removeClass('login--active')

		// If validation passes, login
		Meteor.loginWithPassword(email, password, function(err) {
			if (err) {
				// return error message
				alert(err)
			}
			else {
				// User is logged in.
				Router.go('/users')
			}
		});
		return false;
	},
	'click .close-icon, click .overlay' : function(e) {
		e.preventDefault();

		$('body').removeClass('login--active');
	}
});