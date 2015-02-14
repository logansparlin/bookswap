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