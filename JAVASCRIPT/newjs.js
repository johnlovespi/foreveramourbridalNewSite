
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


	$(window).on('load', function(e){
		e.preventDefault();
		// $("body").css("overflow-y", "hidden");
		$("html,body").animate({scrollTop: 0}, 100); 
		console.log("hey");

		// $('.homeStart div p').css({
		// 	position:'absolute',
		// 	top: ($('.homeStart div').height() - $('.homeStart div p').outerHeight())/2,
		// 	left: ($('.homeStart div').width() - $('.homeStart div p').outerWidth())/2,

		// });
	});
	var navUl = $("nav ul");
	var navLi = $("nav ul li");
	navLi.css("width", navUl.width() / 7);
	var contentContainer = $(".contentContainer");
	var contents = contentContainer.find(".content")
	var contentHeight = contents.height() * contents.length;
	// $('.contentContainer').css('height', contentHeight);

	contents.each(function(index){
		var height = this.height;
		$(this).css("top", (height * index) + 50);
	})

	var reviews = $(".review");
	reviews.each(function(){
		var text = $(this).find(".reviewText");
		$(this).css("height", text.height() + 20);
	})




});
