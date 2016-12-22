$(document).ready(function(){
	$(window).on('load resize', function(){

		$('.centerTop').css({
			position:'absolute',
			top: ($('.box').height() - $('.centerTop').outerHeight())/2,
			// left: ($('.box').width() - $('.centerTop').outerWidth())/2,

		});
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

	$(window).scroll(function(){
			var reviewsArrayOffset = [];
			var reviewsArray = [];
			$(".review").each(function(index){
				var reviewsOffSet = $(this).offset().top;
				reviewsArray.push(this);
				reviewsArrayOffset.push(reviewsOffSet);
			});

			for(var i = 0; i < reviewsArrayOffset.length; i++){
				var eachOffset = reviewsArrayOffset[i];
				if($(window).scrollTop() > eachOffset - 400){
					for(var j = 0; j < reviewsArray.length; j++){
						var eachReview = reviewsArray[j];
						if($(eachReview).offset().top === eachOffset){
							$(eachReview).addClass('show');
						}// ends second if
					}/// ends second for
				}/// ends first if
			}//// ends for

	});


	// function showReviews(){
	// 		var reviewsArray = $('.content').find('.review');
	// 		console.log(reviewsArray);
	// 		for(var i = 0; i < reviewsArray.length; i++){
	// 			var eachReview = reviewsArray[i];

	// 		}
	// }
	// showReviews();
});