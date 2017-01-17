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

	function sliderfunction(){

		var animationSpeed = 1000;
		var sliderSpeed = 3000;
		var currentSlide = 1;
		var sliderWrapper = $(".designersWrapper");
		var sliderContainer = sliderWrapper.find(".designerSliderContainer");
		var slides = sliderContainer.find(".designerSlides");
		var slidesImg = sliderContainer.find(".designerSlides img");
		var sliderWidth = sliderWrapper.width();
		var	numOfDesigners = 7;
		var sliderInterval;
		slides.css("width",  sliderWidth);
		// slidesImg.css("width",  sliderWidth);
		sliderContainer.css("width", numOfDesigners * sliderWidth);

		function imgSlider(){
			var sliderInterval = setInterval(function(){
					sliderContainer.animate({"margin-left": "-=" + sliderWidth}, animationSpeed, function(){
							currentSlide = currentSlide + 1;
							if(currentSlide === numOfDesigners){
								currentSlide = 1;
								sliderContainer.css("margin-left", 0);
							}/// ends first if

					});/// ends sliderContainer animate function

			}, sliderSpeed);///ends sliderInterval

		}/// ends imgSlider

		imgSlider();
	}

	sliderfunction();

	function selectDesigner(){

	}
});