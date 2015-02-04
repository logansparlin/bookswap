Template.landingHeader.events({
	"keydown document": function(e) {
		var key = e.which;
		if(key == 65) {
			$('body').toggleClass('menu-open'),
			$('.menu-icon').toggleClass('close')
		}
	},
	"click .menu-icon": function() {
		$('body').toggleClass('menu-open'),
		$('.menu-icon').toggleClass('close')
	},
	"click .main-btn" : function() {
		Router.go('/add');
	},
	'click #login' : function(e) {
		e.preventDefault();
		$('body').removeClass('menu-open');
		$('.menu-icon').removeClass('close');
		$('body').addClass('login--active');
	},
	'click #signup' : function(e) {
		e.preventDefault();
		$('body').removeClass('menu-open');
		$('body').removeClass('login--active');
		$('.menu-icon').removeClass('close');
		$('body').addClass('register--active');
		// alert('clicked');
	}
});

Template.layout.rendered = function() {
	// $(document).keydown(function(e) {
	// 	var key = e.which;
	// 	if(key == 65) {
	// 		$('body').toggleClass('menu-open');
	// 		$('.menu-icon').toggleClass('close');
	// 	}
	// });
	var range = 400;
	landing = $('.landing-container');

	$(window).on('scroll', function() {
		var st = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		landing.each(function() {
			var offset = 400;
			var height = $('.landing-container').outerHeight();
			offset = offset + height / 2;
			$('.landing-container').css('opacity', 1-(st - offset + range) / range);
		});
		$('.landing-container').css('padding-bottom', st);
		// $('#landing').css('margin-top', -(st/4))

		if( st >= 100) {
			$('.main-nav').addClass('dark-nav')
		} else if( st <= 100) {
			$('.main-nav').removeClass('dark-nav')
		}
	});
};