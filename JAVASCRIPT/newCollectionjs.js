$(document).ready(function(){
	$(window).on('load', function(e){
		e.preventDefault();


	});

	var navUl = $("nav ul");
	var navLi = $("nav ul li");
	navLi.css("width", navUl.width() / 7);

	var footerContact = $('.footerContact').outerWidth(true);
	var footerSocialMedia = $('.footerSocialMedia').outerWidth(true);
	$('.footerinfo').css('width', footerContact + footerSocialMedia + 1);

	function sliderFeature(){

		var animationSpeed = 1000;
		var sliderSpeed = 3000;
		var currentSlide = 1;
		var sliderWrapper = $(".feature");
		var sliderContainer = sliderWrapper.find(".designerSliderContainer");
		var slides = sliderContainer.find(".designerSlides");
		var slidesImg = sliderContainer.find(".designerSlides img");
		var sliderWidth = sliderWrapper.width();
		var	numOfDesigners = 5;
		var sliderInterval;
		slides.css("width",  sliderWidth);
		sliderContainer.css("width", numOfDesigners * sliderWidth);

		function imgSlider(){
			var sliderInterval = setInterval(function(){
					sliderContainer.animate({"margin-left": "-=" + sliderWidth}, animationSpeed, function(){
							currentSlide = currentSlide + 1;
							if(currentSlide === numOfDesigners){
								currentSlide = 1;
								sliderContainer.css("margin-left", 0);
							}

					});

			}, sliderSpeed);

		}

		imgSlider();
	}

	sliderFeature();


	function sliderExclusive(){

		var animationSpeed = 1000;
		var sliderSpeed = 3000;
		var currentSlide = 1;
		var sliderWrapper = $(".exclusive");
		var sliderContainer = sliderWrapper.find(".designerSliderContainer");
		var slides = sliderContainer.find(".designerSlides");
		var slidesImg = sliderContainer.find(".designerSlides img");
		var sliderWidth = sliderWrapper.width();
		var	numOfDesigners = 4;
		var sliderInterval;
		slides.css("width",  sliderWidth);
		sliderContainer.css("width", numOfDesigners * sliderWidth);

		function imgSlider(){
			var sliderInterval = setInterval(function(){
					sliderContainer.animate({"margin-left": "-=" + sliderWidth}, animationSpeed, function(){
							currentSlide = currentSlide + 1;
							if(currentSlide === numOfDesigners){
								currentSlide = 1;
								sliderContainer.css("margin-left", 0);
							}

					});

			}, sliderSpeed);

		}

		imgSlider();
	}

	sliderExclusive();

});