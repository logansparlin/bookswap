Template.addBook.events({
	"click .main-btn" : function() {
		alert('clicked');
	},
	"submit #new-book-submit-form" : function(e, t) {
		e.preventDefault;

		var title = t.find('#book-title').value,
			author = t.find('#book-author').value,
			newPrice = t.find('#book-newPrice').value,
			price = t.find('#book-price').value;

		var data = {title: title, author: author, newPrice: newPrice, price: price};

		Meteor.call('addBook', data);

	}
})