Template.singleBook.helpers({
	books : function() {
		return Session.get('currentBook');
	}
})