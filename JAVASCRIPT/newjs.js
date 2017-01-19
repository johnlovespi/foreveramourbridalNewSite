
$(document).ready(function(){
	var height = $(window).height();
	var width = $(window).width();
	var badgesDiv = $(".contentBadge");
	var badges = badgesDiv.find(".badges");
	var badgesHeight = badgesDiv.outerHeight();
	var badgeOffSetTop = badgesDiv.offset().top;
	var scrollPage = true;
	$("body").css("overflow-y", "auto");

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
		$("body").css("overflow-y", "auto");
		$("html,body").animate({scrollTop: 0}, 100); 
		$(badgesDiv).css("height", badgesHeight);
		$(badges).css("width", "0%");


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


	$(window).on("scroll", function() {

		if($(window).scrollTop() >= badgeOffSetTop -100){
			function stopStartScroll(){
				if(scrollPage) {
					$("body").css("overflow-y", "hidden");
				} else if (scrollPage === false) {
					$("body").css("overflow-y", "auto");
				}
			};
			stopStartScroll();
			 $(badges).animate({width: "15%",opacity: 1}, 1000, function(){
			 	scrollPage = false;
			 	stopStartScroll();
			 });
		}
	});

});
