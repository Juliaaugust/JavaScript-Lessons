$(function () {
	var slider = $("#slider");
	var slides = slider.find("li");
	var nextBtn = $("#slider_next");
	var prevBtn = $("#slider_prev");
	// блок для точек
	var nav = slider.find(".slider-nav");

	var currentSlide = 0;
	// начальное направление автоматической прокрутки
	var autoScrollDir = "next";

	// задаем всем слайдам ширину, равную ширине самого слайдера
	slides.css("width", slider.width() + "px");

	// событие возникает при изменении размеров области просмотра
	$(window).resize(function () {
		// т.к. при изменении размеров окна могла измениться ширина слайдера (потому что есть размеры в процентах)
		slides.css("width", slider.width() + "px");
	});

	// функция для смены слайда, при вызове ей нужно указать направление: вперед или назад
	var changeSlide = function (dir) {
		if (dir == "next") {
			if (currentSlide < slides.length - 1) {
				currentSlide++;
			} else {
				// если дошли до конца, то меняем направление
				autoScrollDir = "prev";
				currentSlide = 0;
			}
		} else if (dir == "prev") {
			if (currentSlide > 0) {
				currentSlide--;
			} else {
				// если дошли до начала, то автопрокрутка идет вперёд
				autoScrollDir = "next";
				// останавливаем выполнение функции, чтобы не запускалась анимация
				currentSlide = slides.length - 1;
			}
		}else{
			currentSlide = dir;
		}

		slides.fadeOut();
		slides.eq(currentSlide).fadeIn();
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
		}, 5000);
	};

	startAutoScroll();

	
	// событие возникает при наведении указателя мыши
	slider.mouseenter(function () {
		clearInterval(timer);
	});

	// событие возникает при наведении указателя мыши
	slider.mousemove(function () {
		clearInterval(timer);
	});

	// событие возникает, когда указатель мыши покидает область элемента
	slider.mouseleave(function () {
		startAutoScroll();
	});

});
