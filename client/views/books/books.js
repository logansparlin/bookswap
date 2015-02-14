Template.books.helpers({
	books : function() {
		var books = Session.get('searchResults');
		return books;
	}
})