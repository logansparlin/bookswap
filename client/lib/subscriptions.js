document.title = "Book Swap";

Meteor.subscribe('books');
Deps.autorun(function() {
	Meteor.subscribe('users');
})

Meteor.subscribe('locations');