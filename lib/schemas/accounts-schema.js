Schema = {};

Schema.login = new SimpleSchema({
	'email': {
		type: String, 
		regEx: SimpleSchema.RegEx.Email,
		label: "Email"
	},
	'password': {
		type: String,
		label: "Password",
		min: 8
	}
});

Schema.register = new SimpleSchema({
	'firstName': {
		type: String,
		label: "First Name",
		min: 1
	},
	'lastName': {
		type: String,
		label: "Last Name",
		min: 1
	},
	'email': {
		type: String, 
		regEx: SimpleSchema.RegEx.Email,
		label: "Email"
	},
	'password': {
		type: String,
		label: "Password",
		min: 8
	}
});

SimpleSchema.messages({
	minString: "[label] is required",
	required: "[label] is required!"
})