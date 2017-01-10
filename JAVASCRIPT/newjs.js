$(document).ready(function(){
	$("body").css("overflow-y", "hidden");
	var height = $(window).height();
	var width = $(window).width();
	$(window).on('load', function(){
		$(this).scrollTop(0);
	})
	$(document).on('load', function(){
		$(this).scrollTop(0);
	})
	$(window).on('load resize', function(){

		// $('.content').css({
		// 	position:'absolute',
		// 	left: ($('.contentContainer').width() - $('.content').outerWidth())/2,
		// });

		$('.centerTop').css({
			position:'absolute',
			top: ($('.box').height() - $('.centerTop').outerHeight())/2,
			left: ($('.box').width() - $('.centerTop').outerWidth())/2,

		});

	});

	// To initially run the function:
	$(window).resize();
	var contentContainer = $(".contentContainer");
	var contents = contentContainer.find(".content")
	var contentHeight = contents.height() * contents.length;
	$('.contentContainer').css('height', contentHeight);

	contents.each(function(index){
		var height = this.height;
		$(this).css("top", (height * index) + 50);
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

 $(".homeStart").click(function(event){
 		event.preventDefault();
        $("html, body").animate({
            scrollTop: $(".contentOne").offset().top
        }, 800);

        $(this).fadeOut(1000);
 })

});