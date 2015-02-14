Template.landing.events({
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
				console.log('failed')
			} else {
				var books = result.data;
				// console.log(result.data);
				Session.set('searchResults', result.data.items)
				_.each(result.data.items, function(item) {
					// console.log(item.volumeInfo.title)
					console.log(item.volumeInfo.imageLinks.thumbnail)
				});
			}
		});
	}
});

// Template.landing.helpers({
// 	books : function() {
// 		var books = Session.get('searchResults');
// 		return books;
// 	}
// })

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