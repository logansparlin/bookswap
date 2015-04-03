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
		type: String,
		min: 1
	},
	'lastName': {
		type: String,
		min: 1
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

SimpleSchema.messages({
	minString: "[label] is required",
	required: "[label] is required!"
})