$(function () {
	var slider = $("#slider");
	var list = slider.find("ul");
	var slides = slider.find("li");
	var nextBtn = $("#slider_next");
	var prevBtn = $("#slider_prev");
	var nav = slider.find(".slider-nav");

	var currentSlide = 0;
	var autoScrollDir = "next";

	slides.css("width", slider.width() + "px");

	// событие возникает при изменении размеров области просмотра
	$(window).resize(function () {
		// т.к. при изменении размеров окна могла измениться ширина слайдера (потому что есть размеры в процентах)
		slides.css("width", slider.width() + "px");
		// пересчитываем координату left для слайдера
		var l = -currentSlide * slider.width() + "px";
		// без анимации просто меняем свойство
		list.css("left", l);
	});


	// переменная для формирования хтмл-кода навигационных точек
	var navigationHtml = "";
	for (var i=0; i<slides.length; i++) {
		navigationHtml += "<span data-num='"+i+"'></span>";
	}

	nav.html(navigationHtml);

	var dots = nav.find("span");

	dots.find("span").click(function () {
		var number = $(this).attr("data-num");
		changeSlide(number);
	});

	// функция для обновления состояние навигационных кнопок
	var updateNavigation = function () {
		if (currentSlide == 0) {
			prevBtn.hide();
		} else {
			prevBtn.show();
		}

		if (currentSlide == slides.length - 1) {
			nextBtn.hide();
		} else {
			nextBtn.show();
		}
		dots.removeClass("active");
		dots.filter("[data-num='"+ currentSlide + "']")
			.addClass("active")
	};

	updateNavigation();

	// функция для смены слайда, при вызове ей нужно указать направление: вперед или назад
	var changeSlide = function (dir) {
		if (dir == "next") {
			if (currentSlide < slides.length - 1) {
				currentSlide++;
			} else {
				// если дошли до конца, то меняем направление
				autoScrollDir = "prev";
				return;
			}
		} else if (dir == "prev") {
			if (currentSlide > 0) {
				currentSlide--;
			} else {
				// если дошли до начала, то автопрокрутка идет вперёд
				autoScrollDir = "next";
				// останавливаем выполнение функции, чтобы не запускалась анимация
				return; 
			}
		}else{
			currentSlide = dir;
		}

		var l = -currentSlide * slider.width() + "px";
		list.animate({left: l}, 700);
		updateNavigation();
	};

	nextBtn.click(function () {
		changeSlide("next");
	});

	prevBtn.click(function () {
		changeSlide("prev");
	});

	var timer = null;

	var startAutoScroll = function () {
		timer = setInterval(function () {
			changeSlide(autoScrollDir);
		}, 3000);
	};

	startAutoScroll();

	
	// событие возникает при наведении указателя мыши
	slider.mouseenter(function () {
		clearInterval(timer);
	});

	// событие возникает, когда указатель мыши покидает область элемента
	slider.mouseleave(function () {
		startAutoScroll();
	});

});
