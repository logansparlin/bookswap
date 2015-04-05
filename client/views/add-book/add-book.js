Template.addBook.helpers({
	label: function(label) {
		return Schema.addBook.label(label)
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
			price: parseInt($(nb + 'price').val())
		};

		var context = Schema.addBook.newContext(),
			isValid = context.validate(book);

		if(isValid) {
			console.log(book)
			Meteor.call('addBook', book)
		} else {
			console.log('error')
		}

	}
})