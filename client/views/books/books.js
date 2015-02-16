Template.books.helpers({
	books : function() {
		var books = Session.get('searchResults');
		return books;
	}
})
Template.books.events({
	'click .book-container' : function(e) {
		var isbn = $(e.target).closest('.book').attr('data-isbn');
		Session.set('currentISBN', isbn);
		Router.go('singleBook', {isbn: isbn});
	}
})