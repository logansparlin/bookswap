Meteor.publish('books', function() {
	return Books.find();
});

Meteor.publish('users', function() {
	return Meteor.users.find({}, {fields: {firstName: 1, lastName: 1}})
});