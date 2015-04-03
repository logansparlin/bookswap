Router.configure({
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	layoutTemplate: 'layout'
});

Router.route('/', {
	waitOn: function() {
		Meteor.user();
	},
	action: function() {
		document.title = "Bookswap | Home"
		this.render('landing')
		this.next()
	},
	yieldTemplates: {
		'landingHeader': {to: 'header'}
	}
});

Router.route('/:isbn', {
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