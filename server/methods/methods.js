Meteor.methods({
	addBook: function(data) {
		Books.insert(data);
	}
})