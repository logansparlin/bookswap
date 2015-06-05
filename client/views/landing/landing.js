Template.landing.events({
	'click .login-link, click .login-offcanvas-link': function() {
		$('body').addClass('login--active')
		$('.menu--open').click()
	},
	'click .register-link, click .register-offcanvas-link': function() {
		$('body').addClass('register--active')
		$('.menu--open').click()
	},
	'click .maps-link': function() {
		Router.go('mapsTest');
	},
	'focus .home-search': function() {
		var landing = $('.landing');
		$('body').addClass('search--active');
	},
	'blur .home-search': function() {
		$('body').removeClass('search--active');
	},
	'keyup .home-search': function() {
		event.preventDefault();
		var text = event.target.value;
		var q = $('.home-search').val();
		Meteor.http.get("https://www.googleapis.com/books/v1/volumes?q=" + q + "&orderBy=relevance&printType=books&maxResults=20&key=AIzaSyApUSiddfk5SFAzatjDy6I8BUNBUm7Ue68", function(error, result) {
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
	}
});

Template.landing.helpers({
	name: function() {
		console.log(Meteor.user())
	}
})

Template.landing.rendered = function() {
	var lc = $('.landing-container'),
		tag = $('p.tag'),
		landing = $('.landing');
	TweenMax.fromTo(lc, 5, {opacity: 0}, {opacity: 1, autoRound: false, ease: Expo.easeOut});
	// TweenMax.fromTo(tag, 5, {y: 10}, {y: 0, force3D: true, autoRound: false})
}

Meteor.startup(function() {
	var landing = $('.landing')
	if(Session.get('searchResults')) {
		TweenMax.to(landing, 0.25, {height:'80%', autoRound: false, ease:Back.easeOut});
	}
})