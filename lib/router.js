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
		this.render('landingHeader', {to: 'header'})
		this.next()
	}
});

Router.route('/sell', {
	onBeforeAction: function() {
		document.title = "Bookswap | Add New Book";
		$('html, body').scrollTop(0);
		this.next();
		if(!Meteor.userId()) {
			this.render('accounts')
			$('body').addClass('login--active')
		} else {
			this.render('sellBook')
			this.render('userHeader', {to: 'header'})
		}
	}
})

Router.route('/:isbn', {
	name: 'singleBook',
	// waitOn: function() {
	// 	$('.single-book').imagesLoaded();
	// },
	onBeforeAction: function() {
		document.title = "Bookswap | Search Books";
		Router.go('singleBook', {isbn: Session.get('currentISBN')});
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
});