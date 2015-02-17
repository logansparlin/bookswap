Template.singleBook.helpers({
	books : function() {
		return Session.get('currentBook');
	}
});

Template.singleBook.rendered = function() {
	$('.single-book-image').css({'opacity':'0'});
	$('.single-book').imagesLoaded(function() {
		TweenMax.fromTo($('.single-book-image'), 0.6, {opacity: 0, top: '52%'}, {opacity: 1, top: '50%', autoRound: false});
		TweenMax.fromTo($('.single-book-background-image'), 0.6, {opacity: 0}, {opacity:1, autoRound: false})
	})
}

// Template.singleBook.rendered = function() {
// 	var movementStrength = 25;
// 	var height = movementStrength / $(window).height();
// 	var width = movementStrength / $(window).width();
// 	$(".single-book-container").mousemove(function(e){
// 	          var pageX = e.pageX - ($(this).width() / 2);
// 	          var pageY = e.pageY - ($(this).height() / 2);
// 	          var newvalueX = width * pageX * -1 - 25;
// 	          var newvalueY = height * pageY * -1 - 50;
// 	          $('.single-book-background-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
// 	});
// }