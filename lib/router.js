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
		document.title = "Bookswap | Home"
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

Router.route('/book/:isbn', {
	name: 'singleBook',
	// waitOn: function() {
	// 	$('.single-book').imagesLoaded();
	// },
	onBeforeAction: function() {
		document.title = "Bookswap | Add New Book";
		Router.go('singleBook', {isbn: Session.get('currentISBN')});
		$('html, body').scrollTop(0);
		this.next();
	}
	// action: function() {
	// 	if(Session.get('currentBook')) {
	// 		Router.go('singleBook', {isbn: Session.get('currentISBN')})
	// 	} else {
	// 		Router.go('/')
	// 	}
	// 	this.next();
	// }
	// // this.render('singleBook');
})

Router.route('/login', {
	name: 'isolatedLogin',
	onBeforeAction:function() {
		this.render('isolatedLogin')
		$('body').addClass('isolatedLogin--active')
		this.next();
	}
})