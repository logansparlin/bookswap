Template.landingHeader.events({
	'click .login-link, click .login-offcanvas-link': function() {
		$('body').addClass('login--active')
		$('.menu--open').click()
	},
	'click .register-link, click .register-offcanvas-link': function() {
		$('body').addClass('register--active')
		$('.menu--open').click()
	},
	'click .logout':function(e) {
		e.preventDefault()
		Meteor.logout()
		$('.menu--open').click()
	},
	'click .sell-link': function(e) {
		Router.go('/sell')
	},
	'click .menu--closed': function() {
		var landing = $('.content-wrapper'),
			top = $('.menu-icon .bar:first-of-type'),
			middle = $('.menu-icon .bar:nth-child(2)'),
			bottom = $('.menu-icon .bar:last-of-type');

		TweenMax.to(landing, 0.25, {x: 300, autoRound: false, ease: Back.easeOut});
		TweenMax.to(middle, 0.25, {x:-50, autoRound: false, ease: Back.easeOut});
		TweenMax.to(top, 0.25, {rotation: 45, y: 6, autoRound: false, ease: Back.easeOut});
		TweenMax.to(bottom, 0.25, {rotation: -45, y: -7, autoRound: false, ease: Back.easeOut});

		$('.menu-icon').removeClass('menu--closed').addClass('menu--open');
	},
	'click .menu--open': function() {
		var landing = $('.content-wrapper'),
			top = $('.menu-icon .bar:first-of-type'),
			middle = $('.menu-icon .bar:nth-child(2)')
			bottom = $('.menu-icon .bar:last-of-type');

		TweenMax.to(landing, 0.2, {x: 0, autoRound: false, ease: Expo.easeOut});
		TweenMax.to(middle, 0.25, {x:0, autoRound: false, ease: Back.easeOut});
		TweenMax.to(top, 0.25, {rotation: 0, y: 0, autoRound: false, ease: Back.easeOut});
		TweenMax.to(bottom, 0.25, {rotation: 0, y: 0, autoRound: false, ease: Back.easeOut});

		$('.menu-icon').removeClass('menu--open').addClass('menu--closed');
	}
})