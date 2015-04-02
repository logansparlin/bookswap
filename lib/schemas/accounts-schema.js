Schema = {};

Schema.login = new SimpleSchema({
	'email': {
		type: String, 
		regEx: SimpleSchema.RegEx.Email,
		label: "email"
	},
	'password': {
		type: String,
		label: "password",
		min: 8
	}
});

Schema.register = new SimpleSchema({
	'firstName': {
		type: String
	},
	'lastName': {
		type: String
	},
	'email': {
		type: String, 
		regEx: SimpleSchema.RegEx.Email,
		label: "email"
	},
	'password': {
		type: String,
		label: "password",
		min: 8
	}
});