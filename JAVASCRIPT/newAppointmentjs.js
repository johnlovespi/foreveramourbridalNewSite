$(document).ready(function(){
	$(window).on('load resize', function(){

		$('.cmhtText').css({
			position:'absolute',
			left: ($('.collectionMainHeaderText').width() - $('.cmhtText').outerWidth())/2,
			top: ($('.collectionMainHeaderText').height() - $('.cmhtText').outerHeight())/2
		});


	});

	// To initially run the function:
	$(window).resize();

	var footerContact = $('.footerContact').outerWidth(true);
	var footerSocialMedia = $('.footerSocialMedia').outerWidth(true);
	$('.footerinfo').css('width', footerContact + footerSocialMedia + 1);
});