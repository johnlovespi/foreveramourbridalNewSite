$(document).ready(function(){
	$(window).on('load resize', function(){

		$('.cmhtText').css({
			position:'absolute',
			left: ($('.collectionMainHeaderText').width() - $('.cmhtText').outerWidth())/2,
			top: ($('.collectionMainHeaderText').height() - $('.cmhtText').outerHeight())/2
		});


	});

	var navUl = $("nav ul");
	var navLi = $("nav ul li");
	navLi.css("width", navUl.width() / 7);

	var footerContact = $('.footerContact').outerWidth(true);
	var footerSocialMedia = $('.footerSocialMedia').outerWidth(true);
	$('.footerinfo').css('width', footerContact + footerSocialMedia + 1);

});