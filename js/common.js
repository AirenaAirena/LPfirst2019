$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".details-tab .wrapper .tab").click(function() {
		$(".details-tab .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".details-tab .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".services-tab .wrapper .tab").click(function() {
		$(".services-tab .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".services-tab .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".portfolio-tab .wrapper .tab").click(function() {
		$(".portfolio-tab .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".portfolio-tab .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".slider").owlCarousel({

	// Most important owl features
	items : 1,
	itemsCustom : false,
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [980,1],
	itemsTablet: [768,1],
	itemsTabletSmall: false,
	itemsMobile : [479,1],
	singleItem : false,
	itemsScaleUp : false,
	slideBy: 1,

//Basic Speeds
slideSpeed : 200,
paginationSpeed : 800,
rewindSpeed : 1000,

//Autoplay
autoPlay : false,
stopOnHover : false,

// Navigation
navigation : false,
rewindNav : true,
scrollPerPage : false,

//Pagination
pagination : true,
// Responsive 
responsive: true,
responsiveRefreshRate : 200,
responsiveBaseWidth: window,
});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//Stellar - Parallax Plugin
	//Документация: https://github.com/markdalgleish/stellar.js
	//HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".element"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Masked Input Plugin
	//Документация: http://digitalbush.com/projects/masked-input-plugin/
	//$("#date").mask("99/99/9999", {placeholder : "mm/dd/yyyy"});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
	//Скролл до id, указанного в hash URL
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -90
		});
	};

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	function carousel_1() {
		var owl = $(".carousel");
		owl.owlCarousel({
			items : 1,
			loop : true,
			autoHeight : true,
			dots : true,
			singleItem : true
		});
		owl.on("mousewheel", ".owl-wrapper", function (e) {
			if (e.deltaY > 0) {
				owl.trigger("owl.prev");
			} else {
				owl.trigger("owl.next");
			}
			e.preventDefault();
		});
		$(".next_button").click(function() {
			owl.trigger("owl.next");
		});
		$(".prev_button").click(function() {
			owl.trigger("owl.prev");
		});
		owl.on("resized.owl.carousel", function(event) {
			var $this = $(this);
			$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
		});
		setTimeout(function() {
			owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
		}, 5000);
	};
	carousel_1();

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
	};
	$(document).ready(function() {
		resizeWindow();
	});
	$(window).bind("resize", function() {
		viewport.changed(function(){
			resizeWindow();
		});
	});
})(jQuery, document, window, ResponsiveBootstrapToolkit);


$(".arrow-bottom").click(function() {
	$("html, body").animate({ scrollTop:$(".main-head").height()+120 }, "slow");
	return false;
});


$("body").append('<div class="top"><i class="fa fa-angle-double-up"></i>');

$(window).scroll(function(){
	if($(this).scrollTop() > $(this).height()){
		$(".top").addClass("active");
	}else{
		$(".top").removeClass("active");
	}
});