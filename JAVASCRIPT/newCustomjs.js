$(document).ready(function(){
	$(window).on('load resize', function(){

		$('.cmhtText').css({
			position:'absolute',
			left: ($('.customMainHeaderText').width() - $('.cmhtText').outerWidth())/2,
			top: ($('.customMainHeaderText').height() - $('.cmhtText').outerHeight())/2
		});
		$('.content').css({
			position:'absolute',
			left: ($('.contentContainer').width() - $('.content').outerWidth())/2,
			// top: ($('.contentContainer').height() - $('.content').outerHeight())/2
		});

		$('.viewMore').css({
			position:'absolute',
			left: ($('.viewMoreContainer').width() - $('.viewMore').outerWidth())/2,
			top: ($('.viewMoreContainer').height() - $('.viewMore').outerHeight())/2
		});

	});

	// To initially run the function:
	$(window).resize();

	var navUl = $("nav ul");
	var navLi = $("nav ul li");
	navLi.css("width", navUl.width() / 7);

	var contentHeight = $('.content').outerHeight();
	// var customExpHeight = $('.customExperience').outerHeight();
	// $('.infoContent').css('height', customExpHeight);
	$('.contentContainer').css('height', contentHeight);
	var footerContact = $('.footerContact').outerWidth(true);
	var footerSocialMedia = $('.footerSocialMedia').outerWidth(true);
	$('.footerinfo').css('width', footerContact + footerSocialMedia + 1);
	// var judeCounter = 0;
	// $('.customInfoText .jude').hide();
	// $('.customInfoText .jude').eq(0).show();
	// $(".arrowRight").click(function(){
	// 		$('.customInfoText .jude').eq(judeCounter).hide()
	//  		judeCounter = (judeCounter + 1) % $(".customInfoText .jude").length
	// 		$(".customInfoText .jude").eq(judeCounter).show();
	// });
	// $(".arrowLeft").click(function(){
	// 		$('.customInfoText .jude').eq(judeCounter).hide()
	//  		judeCounter = (judeCounter - 1) % $(".customInfoText .jude").length
	// 		$(".customInfoText .jude").eq(judeCounter).show();
	// });

	// $(".jude img").click(function(){
	// 	$(".bigImg").css('display', 'block');
	// 	$(".bigImg img").attr('src', $(this).attr("src"));
	// });
	// $(".close").click(function(){
	// 	$(".bigImg").css('display', 'none');
	// 	$(".bigImg img").attr('src', "");
	// });

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