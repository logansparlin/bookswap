Template.books.helpers({
	books: function() {
		var books = Books.find();
		return books;
	}
}) 