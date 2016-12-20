$(document).ready(function(){
	var height = $(window).height();
	var width = $(window).width();
	$(window).on('load resize', function(){

		$(this).scrollTop(0);

		$('.content').css({
			position:'absolute',
			left: ($('.contentContainer').width() - $('.content').outerWidth())/2,
			// top: ($('.contentContainer').height() - $('.content').outerHeight())/2
		});

		$('.centerTop').css({
			position:'absolute',
			top: ($('.box').height() - $('.centerTop').outerHeight())/2,
			left: ($('.box').width() - $('.centerTop').outerWidth())/2,

		});

	});

	// To initially run the function:
	$(window).resize();

	var contentHeight = $('.content').outerHeight();
	$('.contentContainer').css('height', contentHeight);


	$('.instaHeader').click(function(){
		$(".slideImg").animate({left: '250px'});
	})
	var footerContact = $('.footerContact').outerWidth(true);
	var footerSocialMedia = $('.footerSocialMedia').outerWidth(true);
	$('.footerinfo').css('width', footerContact + footerSocialMedia + 1);
	// console.log(height);
	// $('.homeContainer').css('height', height);
	// $('.homeWrapper').css('height', height);

 //    $(".scrollDown").click(function(){
 //    	if($(window).scrollTop() === 0){
 //    		$("html, body").animate({
 //            	scrollTop: $(".content").offset().top
 //       		}, 800);
 //    	} else {
 //    		$("html, body").animate({
 //            	scrollTop: $("html").offset().top
 //        	}, 800);
 //    	}
 //    });

});