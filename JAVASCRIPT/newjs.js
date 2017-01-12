
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
		$("body").css("overflow-y", "hidden");
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
	$('.contentContainer').css('height', contentHeight);

	contents.each(function(index){
		var height = this.height;
		$(this).css("top", (height * index) + 50);
	})


	var footerContact = $('.footerContact').outerWidth(true);
	var footerSocialMedia = $('.footerSocialMedia').outerWidth(true);
	$('.footerinfo').css('width', footerContact + footerSocialMedia + 1);


	 $(".homeStart").click(function(event){
	 		event.preventDefault();
	 		$(this).css("display", "none");
	        $(".logo").css("display", "none");
	        $(".badgesContainer").css("display", "none");
	        $("body").animate({
	            scrollTop: $(".contentOne").offset().top
	        }, 800);
	 })

  	$(".oneArrow").click(function(event){
 		event.preventDefault();
        $("body").animate({
            scrollTop: $(".contentTwo").offset().top
        }, 800);
 	})

 	$(".twoArrow").click(function(event){
 		event.preventDefault();
        $("body").animate({
            scrollTop: $(".contentThree").offset().top
        }, 800);
 	})

 	$(".twoArrowBack").click(function(event){
 		event.preventDefault();
        $("body").animate({
            scrollTop: $(".contentOne").offset().top
        }, 800);
 	})

 	$(".threeArrowBack").click(function(event){
 		event.preventDefault();
        $("body").animate({
            scrollTop: $(".contentTwo").offset().top
        }, 800);
 	})

 	function fadeInBadgesFunction(){
 		var badgeCount = 0;
 		var badgeArray = [];
 		var badgesContainer = $(".badgesContainer");
 		var badges = badgesContainer.find(".badges");
 		badges.each(function(){
 			badgeArray.push(this);
 		})


 			
 		function fadeInBadges(){
 			var badgeInterval = setInterval(function(){
 				for(var i = 0; i < badgeArray.length; i++){
 					var eachBadge = badgeArray[i];
 					if(badgeCount === i){
 						var fadeBadge = eachBadge;
 						console.log(badgeCount);
 						badgeCount = badgeCount + 1;
 						$(fadeBadge).animate({opacity: 1}, 400);
 						break
 					} else if(badgeCount === badgeArray.length) {
 						clearInterval(badgeInterval);
 						$(".homeStart").animate({opacity: 1}, 1000);
 					}
 				}
 			}, 600);
 		}

 		fadeInBadges();

 	}

 	fadeInBadgesFunction();

});