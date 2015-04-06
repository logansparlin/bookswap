Template.searchBook.events({
	'keyup .book-search': function() {
		event.preventDefault();
		var text = event.target.value;
		var q = $('.book-search').val();
		Meteor.http.get("https://www.googleapis.com/books/v1/volumes?q=" + q + "&orderBy=relevance&printType=books&maxResults=5&key=AIzaSyApUSiddfk5SFAzatjDy6I8BUNBUm7Ue68", function(error, result) {
			if(error) {
				Session.set('searchResults')
			} else {
				var books = result.data;
				Session.set('searchResults', result.data.items)
				_.each(result.data.items, function(item) {
					// console.log(item.volumeInfo.title)
				});
				// if(Session.get('searchResults')) {
				// 	TweenMax.to($('.landing'), 0.2, {height: '80%', ease: Back.easeOut, autoRound: false});
				// }
			}
		});
	},
	'click .results-book-container': function() {
		Session.set('currentBookListing', this)
	}
})

Template.searchBook.helpers({
	books : function() {
		var books = Session.get('searchResults');
		return books;
	}
})