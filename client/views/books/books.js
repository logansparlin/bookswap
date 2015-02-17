Template.books.helpers({
	books : function() {
		var books = Session.get('searchResults');
		return books;
	},
	isbn : function() {
		var isbn = this.volumeInfo.industryIdentifiers[0].identifier.replace(/\D+/, '');
		return isbn;
	}
})
Template.books.events({
	'click .book-container' : function(e) {
		var isbn = $(e.target).closest('.book').attr('data-isbn');
		Session.set('currentISBN', isbn);
		// Meteor.http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + Session.get('currentISBN') + "&key=AIzaSyApUSiddfk5SFAzatjDy6I8BUNBUm7Ue68", function(error, result) {
		// 	if(!error) {
		// 		var books = result.data;
		// 		Session.set('currentBook', result.data.items);
		// 	} else {
		// 		console.log('failed')
		// 	}
		// });
		var title = $(e.target).closest('.book').children('.book-title').text(),
			author = $(e.target).closest('.book').children('.author').text(),
			price = $(e.target).closest('.book').children('.old-price').text(),
			img = $(e.target).closest('.book').children('.book-image').children('img').prop('src').replace("zoom=1", 'zoom=2');
		var bookData = {
			title: title,
			author: author,
			isbn: isbn,
			price: price,
			img: img
		}

		Session.set('currentBook', bookData);
		Router.go('/' + isbn);
	}
});