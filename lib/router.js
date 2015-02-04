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
			this.render('books');
			this.render('mainHeader', {to: 'header'})
		}
		else {
			this.render('landingHeader', {to: 'header'})
		}
	},
	yieldTemplates: {
		'landingHeader': {to: 'header'}
	}
});
Router.route('/add', {
	name:'addBook',
	yieldTemplates: {
		'mainHeader': {to: 'header'}
	}
});
Router.route('/books', {
	name: 'books',
	yieldTemplates: {
		'mainHeader': {to: 'header'}
	}
});
Router.route('/users', {
	name: 'users',
	yieldTemplates: {
		'mainHeader': {to: 'header'}
	}
})

Router.rout