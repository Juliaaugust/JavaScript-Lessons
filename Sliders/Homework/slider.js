$(function() {
	var slider = $("#slider");
	var slides = slider.find("li");
	var nextBtn = $("#slider_next");
	var prevBtn = $("#slider_prev");
	var navigation = $(".slider-nav");

	var currSlide = 0;

	slides.css("width", slider.width() + "px");

	$(window).resize(function () {
		slides.css("width", slider.width() + "px");
		var left = -currSlide * slider.width() + "px";
		list.css("left", left);
	});

	// создание HTML-кода для точек
	var navigationHTML = "";
	for(var i = 0; i < slides.length; i++) {
		navigationHTML += "<span data-number='"+ i + "'></span>";
	}
	navigation.html(navigationHTML);

	var navigationDots = navigation.find("span");

	navigationDots.find("span").click(function(){
		var dotNumber = $(this).attr("data-number");
		changeSlide(dotNumber);
	});

	// navigationDots.removeClass("active");
	// navigationDots.filter("[data-number='"+ currSlide + "']")
	// 		.addClass("active");

	var changeSlide = function(dir) {
		if (dir == "next") {
			currSlide ++;
			if (currSlide > slides.length-1) {
				currSlide = 0;
			}
		} else if (dir == "prev") {
			currSlide --;
			if (currSlide < 0) {
				currSlide = slides.length-1;
			}
		} else {
			currSlide = dir;
		}

		slides.fadeOut();
		slides.eq(currSlide).fadeIn();
	};

	nextBtn.click(function(){
		changeSlide("next");
	});

	prevBtn.click(function(){
		changeSlide("prev");
	});

	var timer = null;

	var startAutoScroll = function(){
		timer = setInterval(function(){
			changeSlide("next");
		},3000);
	};

	slider.mouseenter(function(){
		clearInterval(timer);
	});

	slider.mouseleave(startAutoScroll);

});