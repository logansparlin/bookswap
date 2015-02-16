Router.configure({
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	layoutTemplate: 'layout'
});

Router.route('/', {
	waitOn: function() {
		Meteor.user();
	},
	onBeforeAction: function() {
		if(Meteor.user()) {
			this.render('home');
			this.render('mainHeader', {to: 'header'})
		}
		else {
			this.render('landing');
		}
	},
	yieldTemplates: {
		'landingHeader': {to: 'header'}
	}
});

Router.route('/:isbn', {
	name: 'singleBook',
	waitOn: function() {
		Meteor.http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + Session.get('currentISBN') + "&key=AIzaSyApUSiddfk5SFAzatjDy6I8BUNBUm7Ue68", function(error, result) {
			if(error) {
				console.log('failed')
			} else {
				var books = result.data;
				Session.set('currentBook', result.data.items);
				Router.go('singleBook', {isbn: Session.get('currentISBN')})
			}
		});
	},
	onBeforeAction: function() {
		if(Session.get('currentBook')) {
			Router.go('singleBook', {isbn: Session.get('currentISBN')})
		} else {
			Router.go('/')
		}
		this.next();
	}
	// this.render('singleBook');
})