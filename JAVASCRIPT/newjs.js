
$(document).ready(function(){
	var height = $(window).height();
	var width = $(window).width();

	// window.onload = function() {
	//  setTimeout (function () {
	//   scrollTo(0,0);
	//  }, 100); 
	// }

	// $(window).on('beforeunload', function() {
 //    	$(window).scrollTop(0); 
	// });


	$(window).on('load resize touchstart touchmove', function(e){
		e.preventDefault();
		// $("body").css("overflow-y", "hidden");
		$("html,body").animate({scrollTop: 0}, 100); 

		// $('.homeStart div p').css({
		// 	position:'absolute',
		// 	top: ($('.homeStart div').height() - $('.homeStart div p').outerHeight())/2,
		// 	left: ($('.homeStart div').width() - $('.homeStart div p').outerWidth())/2,

		// });
	});

	// To initially run the function:
	$(window).resize();
	var contentContainer = $(".contentContainer");
	var contents = contentContainer.find(".content")
	var contentHeight = contents.height() * contents.length;
	// $('.contentContainer').css('height', contentHeight);

	contents.each(function(index){
		var height = this.height;
		$(this).css("top", (height * index) + 50);
	})

	var reviews = $(".review");
	console.log(reviews);

	reviews.each(function(){
		var theHeights = $(this).find(".forHeight");
		console.log(theHeights.height());
	})




});