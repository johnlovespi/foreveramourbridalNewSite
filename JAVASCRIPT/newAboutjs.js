$(document).ready(function(){
	$(window).on('load resize', function(){

		// $('.centerTop').css({
		// 	position:'absolute',
		// 	top: ($('.box').height() - $('.centerTop').outerHeight())/2,

		// });
	});

	// To initially run the function:
	$(window).resize();
	
	var footerContact = $('.footerContact').outerWidth(true);
	var footerSocialMedia = $('.footerSocialMedia').outerWidth(true);
	$('.footerinfo').css('width', footerContact + footerSocialMedia + 1);
	$('.reviewWrapper').css('height', "1500px");

	// $(window).scroll(function(){
	// 		$(".review").toggleClass('show', $(this).scrollTop() > 200);

	// });

	// $(window).scroll(function(){
	// 		var reviewsArrayOffset = [];
	// 		var reviewsArray = [];
	// 		$(".review").each(function(index){
	// 			var reviewsOffSet = $(this).offset().top;
	// 			reviewsArray.push(this);
	// 			reviewsArrayOffset.push(reviewsOffSet);
	// 		});

	// 		for(var i = 0; i < reviewsArrayOffset.length; i++){
	// 			var eachOffset = reviewsArrayOffset[i];
	// 			if($(window).scrollTop() > eachOffset - 500){
	// 				for(var j = 0; j < reviewsArray.length; j++){
	// 					var eachReview = reviewsArray[j];
	// 					if($(eachReview).offset().top === eachOffset){
	// 						$(eachReview).animate({opacity: 1}, 2000);
	// 					}
	// 				}
	// 			}
	// 		}

	// });

	var navUl = $("nav ul");
	var navLi = $("nav ul li");
	navLi.css("width", navUl.width() / 7);

	function sliderfunction(){

		var animationSpeed = 1000;
		var sliderSpeed = 3000;
		var currentSlide = 1;
		var sliderWrapper = $("#imgSliderWrapper");
		var sliderContainer = sliderWrapper.find(".imgSliderContainer");
		var slides = sliderContainer.find(".slides");
		var sliderWidth = slides.width();
		var sliderInterval;
		sliderContainer.css("width", slides.length * slides.width());

		function imgSlider(){
			var sliderInterval = setInterval(function(){
					console.log(currentSlide);
					sliderContainer.animate({"margin-left": "-=" + sliderWidth}, animationSpeed, function(){
							currentSlide = currentSlide + 1;
							if(currentSlide === slides.length){
								currentSlide = 1;
								console.log(currentSlide);
								sliderContainer.css("margin-left", 0);
							}/// ends first if

					});/// ends sliderContainer animate function

			}, sliderSpeed);///ends sliderInterval

		}/// ends imgSlider

		imgSlider();
	}

	sliderfunction();

});