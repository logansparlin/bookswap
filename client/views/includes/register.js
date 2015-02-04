Template.register.events({
	'submit #register-form' : function(e, t) {
		e.preventDefault();
		// retrieve the input field values
		var email = t.find('#register-email').value,
		password = t.find('#register-password').value,
		username = t.find('#register-username').value;

		// Validate fields here
		var trimInput = function(val) {
			return val.replace(/^\s*|\s*$/g, "");
		}
		var isValidPassword = function(val) {
		    return val.length >= 6 ? true : false; 
		}
		var email = trimInput(email);

		// If validation passes, login
		if(isValidPassword(password)) {
			Accounts.createUser({username: username, email: email, password: password}, function(err) {
				if (err) {
					// return error message
					alert(err)
				}
				else {
					// User is logged in.
					$('body').removeClass('register--active')
					Router.go('/users')
				}
			});
		}
		return false;
	},
	'click .close-icon, click .overlay' : function(e) {
		e.preventDefault();

		$('body').removeClass('register--active');
	}
});