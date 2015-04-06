Template.addBook.helpers({
	label: function(label) {
		return Schema.addBook.label(label)
	},
	currentBook: function() {
		return Session.get('currentBookListing')
	}
});

Template.addBook.events({
	'submit #new-book-form': function(e) {
		e.preventDefault();

		var nb = '#new-book-';

		var book = {
			title: $(nb + 'title').val(),
			author: $(nb + 'author').val(),
			condition: $(nb + 'condition').val(),
			course: $(nb + 'course').val(),
			newPrice: parseInt($(nb + 'newPrice').val()),
			price: parseInt($(nb + 'price').val()),
			createdBy: Meteor.userId()
		};

		var context = Schema.addBook.newContext(),
			isValid = context.validate(book),
			errors = {};

		if(isValid) {
			Meteor.call('addBook', book)
		} else {
			_.each(context.invalidKeys(), function(item) {
				if(item && item.name) {
					errors[item.name] = context.keyErrorMessage(item.name);
				}
				console.log(errors)
			})
		}

	}
})