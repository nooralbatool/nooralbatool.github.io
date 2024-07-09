/*-----------------------------------------------------------------

Template Name: Gratech - IT Service HTML Template
Author:  Gramentheme
Author URI: https://themeforest.net/user/gramentheme/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Gratech - IT Service HTML5 Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. header
03. swiper slider
04. animated text with swiper slider
05. shop products count
06. image src change
07. hide & show a div
08. isotope
09. add class & remove class
10. magnificPopup
11. back to top
12. data backgrund
13. coundown by click
14. remove products
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	("use strict");
	// Preloader area start here ***
	paceOptions = {
		ajax: true,
		document: true,
		eventLag: false,
	};

	Pace.on("done", function () {
		$("#preloader").addClass("isdone");
		$(".loading").addClass("isdone");
	});
	// Preloader area end here ***

	// Mouse cursor area start here ***

	$(function () {
		mousecursor();
	});
	// Mouse cursor area end here ***

	// Header area start here ***
	// Mobile menu
	$(".header-area nav").meanmenu();
	// Menu Fixed
	var fixed_top = $(".header-area");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 50) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
		}
	});
	// Header area end here ***

	// Menu active one page js area start here ***
 
	document.addEventListener("DOMContentLoaded", function() {
		var Nav = document.getElementById("mainMenu");
		var btns = Nav.getElementsByClassName("page");
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", function() {
				var current = document.getElementsByClassName("active");
				if (current.length > 0) {
					current[0].className = current[0].className.replace(" active", "");
				}
				this.className += " active";
			});
		}
	});

	///
	$(window).scroll(function () {
		var scrollPos = $(document).scrollTop();

		$("section").each(function () {
			var offsetTop = $(this).offset().top;
			var height = $(this).height();
			var id = $(this).attr("id");

			if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
				$('nav a[href="#' + id + '"]').addClass("primary-color");
			} else {
				$('nav a[href="#' + id + '"]').removeClass("primary-color");
			}
		});
	});
	// Menu active one page js area end here ***

	// Dark mood area start here ***
	function setThemeColor(color) {
		const root = document.documentElement;
		root.setAttribute("data-theme", color);
	}
	// Dark mood area end here ***

	// FullScreen search area end here ***
	var $searchWrap = $(".search-wrap");
	var $navSearch = $(".nav-search");
	var $searchClose = $("#search-close");

	$(".search-trigger").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$(".search-close").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on("click", function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on("click", function (e) {
		e.stopPropagation();
	});
	// FullScreen search area end here ***

	// Banner Two slider area end here ***
	var sliderActive1 = ".banner__slider";
	var sliderInit1 = new Swiper(sliderActive1, {
		loop: true,
		slidesPerView: 1,
		effect: "fade",
		speed: 3000,
		autoplay: {
		delay: 7000,
			disableOnInteraction: false,
	},
		pagination: {
			el: ".banner__dot",
			clickable: true,
		},
	});
	// Here this is use for animate ***
	function animated_swiper(selector, init) {
		var animated = function animated() {
			$(selector + " [data-animation]").each(function () {
				var anim = $(this).data("animation");
				var delay = $(this).data("delay");
				var duration = $(this).data("duration");
				$(this)
					.removeClass("anim" + anim)
					.addClass(anim + " animated")
					.css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration,
					})
					.one("animationend", function () {
						$(this).removeClass(anim + " animated");
					});
			});
		};
		animated();
		init.on("slideChange", function () {
			$(sliderActive1 + " [data-animation]").removeClass("animated");
		});
		init.on("slideChange", animated);
	}
	animated_swiper(sliderActive1, sliderInit1);
	// Banner Two slider area end here ***

	// Case slider area start here ***
	// Case slider area start here ***
	var swiper = new Swiper(".case__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 800,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints: {
			1440: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".case__dot",
			clickable: true,
		},
	});
	var swiper = new Swiper(".case-two__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 500,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".case__arry-next",
			prevEl: ".case__arry-prev",
		},
		breakpoints: {
			1440: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			},
		},
	});
	// Case slider area end here ***
  
	//cirt in header 
	$(document).ready(function () {
        $(".btn.mt-5").click(function () {
            var modalId = $(this).attr("id").replace("openModalBtn", "myModal");
            $("#" + modalId).css("display", "flex");
            $(".overlay").css("display", "block");
            $("body").css("overflow", "hidden"); // Disable scroll
        });

        $(".close-btn, .close-modal").click(function () {
            var modalId = $(this).data("modal-id");
            $("#" + modalId).css("display", "none");
            $(".overlay").css("display", "none");
            $("body").css("overflow", "auto"); // Enable scroll
        });

        window.onclick = function (event) {
            if ($(event.target).hasClass('modal')) {
                $(event.target).css("display", "none");
                $(".overlay").css("display", "none");
                $("body").css("overflow", "auto"); // Enable scroll
            }
        };
    });

    $(window).on('scroll', function () {
        $('.modal').css("display", "none");
        $(".overlay").css("display", "none");
        $("body").css("overflow", "auto"); // Enable scroll
    });

	
	// Brand slider area start here ***
	var swiper = new Swiper(".brand__slider", {
		loop: true,
		spaceBetween: 30,
		speed: 300,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 4,
			},
			575: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
	});
	
// Brand slider area end here ***

	// Brand slider area end here ***

	// Testimonial area start here ***
	var swiper = new Swiper(".testimonial__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 300,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".testimonial__arry-next",
			prevEl: ".testimonial__arry-prev",
		},
	});
	var swiper = new Swiper(".testimonial-two__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 800,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".testimonial__dot",
			clickable: true,
		},
	});
	var swiper = new Swiper(".testimonial-three__slider", {
		loop: "true",
		spaceBetween: 24,
		speed: 300,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: ".testimonial-three__arry-next",
			prevEl: ".testimonial-three__arry-prev",
		},
	});
	// Testimonial area end here ***

	// Service slider area start here ***
	var swiper = new Swiper(".service-two__slider", {
		loop: "true",
		spaceBetween: 30,
		speed: 500,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".service__arry-next",
			prevEl: ".service__arry-prev",
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			},
		},
	});  

	// Hide & show by clicks js area start here ***
	$(document).on("click", "#openButton", function () {
		$("#targetElement").removeClass("sidebar__hide");
	});
	$(document).on("click", "#closeButton", function () {
		$("#targetElement").addClass("sidebar__hide");
	});
	// Hide & show by clicks js area end here ***

	// Hover over the elements with the class "service__item"
	$(".service__item").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".service__item").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);
	// Hover add & remove js area end here ***

	// Background image date area start here ***
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});
	// Background image date area end here ***

	// Video popup area start here ***
	$(".video-popup").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>",

			patterns: {
				youtube: {
					index: "youtube.com/",

					id: "v=",

					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},
			},

			srcAction: "iframe_src",
		},
	});
	// Video popup area end here ***

	// Counter up area start here ***
	$(".count").counterUp({
		delay: 30,
		time: 3000,
	});
	$(".progress-count").counterUp({
		delay: 30,
		time: 1000,
	});
	// Counter up area end here ***

	// Nice seclect area start here ***
	$(document).ready(function () {
		$("select").niceSelect();
	});
	// Nice seclect area end here ***

	// Footer image popup start here ***
	$(".footer-popup").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	// Footer image popup end here ***

	// Back to top area start here ***
	var scrollPath = document.querySelector(".scroll-up path");
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
	scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition =
		"stroke-dashoffset 10ms linear";
	var updatescroll = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength) / height;
		scrollPath.style.strokeDashoffset = scroll;
	};
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on("scroll", function () {
		if (jQuery(this).scrollTop() > offset) {
			jQuery(".scroll-up").addClass("active-scroll");
		} else {
			jQuery(".scroll-up").removeClass("active-scroll");
		}
	});
	jQuery(".scroll-up").on("click", function (event) {
		event.preventDefault();
		jQuery("html, body").animate(
			{
				scrollTop: 0,
			},
			duration
		);
		return false;
	});
	// Back to top area end here ***

	
	// WOW Animatin area start here ***
	new WOW().init();
	// WOW Animatin area start here ***
})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn.mt-5').forEach(function (btn, index) {
      btn.onclick = function () {
        document.getElementById('myModal' + (index + 1)).style.display = "flex";
      }
    });

    document.querySelectorAll('.close-btn, .close-modal').forEach(function (btn) {
      btn.onclick = function () {
        const modalId = btn.getAttribute('data-modal-id');
        document.getElementById(modalId).style.display = "none";
      }
    });

    window.onclick = function (event) {
		if (event.target.classList.contains('modal')) {
		  event.target.style.display = "none";
		}
	  }
	  
  });

  

$(document).ready(function() {
    var swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
    });
});
//////////////////chatbot

  
 
///////////Clint ///////


function showContent(id) {
	const contentItems = document.querySelectorAll('.content-item');
	contentItems.forEach(item => {
		item.classList.remove('active');
	});

	const activeItem = document.getElementById(id);
	activeItem.classList.add('active');

	const menuItems = document.querySelectorAll('.sidebar ul li');
	menuItems.forEach(item => {
		item.classList.remove('active');
	});

	const activeMenuItem = document.querySelector(`.sidebar ul li[onclick="showContent('${id}')"]`);
	activeMenuItem.classList.add('active');
}
/*********about slider - value*** 
document.addEventListener('DOMContentLoaded', function() {
	var thumbSwiper = new Swiper('.testi-grid2-thumb', {
	  effect: 'slide',
	  slidesPerView: 5,
	  spaceBetween: 13,
	  loop: true,
	  breakpoints: {
		0: {
		  slidesPerView: 4,
		},
		576: {
		  slidesPerView: 5,
		}
	  }
	});
  
	var mainSwiper = new Swiper('#testiSlide7', {
	  effect: 'slide',
	  loop: true,
	  autoHeight: true,
	  autoplay:false,
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	  thumbs: {
		swiper: thumbSwiper
	  },
	  navigation: {
		nextEl: '.slider-next',
		prevEl: '.slider-prev',
	  },
	  breakpoints: {
		0: {
		  autoHeight: true,
		},
		576: {
		  autoHeight: false,
		}
	  }
	});
  
	document.querySelector('[data-slider-next="#testiSlide7"]').addEventListener('click', function() {
	  mainSwiper.slideNext();
	});
  
	document.querySelector('[data-slider-prev="#testiSlide7"]').addEventListener('click', function() {
	  mainSwiper.slidePrev();
	});
  });
  
*/
 
$(document).ready(function() {
	const $app = $('.app');
	const $img = $('.app__img');
	const $pageNav1 = $('.pages__item--1');
	const $pageNav2 = $('.pages__item--2');
	let animation = true;
	let curSlide = 1;
	let scrolledUp, nextSlide;
	
	let pagination = function(slide, target) {
		animation = true;
		if (target === undefined) {
			nextSlide = scrolledUp ? slide - 1 : slide + 1;
		} else {
			nextSlide = target;
		}
		
		$('.pages__item--' + nextSlide).addClass('page__item-active');
		$('.pages__item--' + slide).removeClass('page__item-active');
		
		$app.toggleClass('active');
		setTimeout(function() {
			animation = false;
		}, 3000)
	}
	
	let navigateDown = function() {
		if (curSlide > 1) return;
		scrolledUp = false;
		pagination(curSlide);
		curSlide++;
	}

	let navigateUp = function() {
		if (curSlide === 1) return;
		scrolledUp = true;
		pagination(curSlide);
		curSlide--;
	}

	setTimeout(function() {
		$app.addClass('initial');
	}, 1500);

	setTimeout(function() {
		animation = false;
	}, 4500);
	
	$(document).on('mousewheel DOMMouseScroll', function(e) {
		var delta = e.originalEvent.wheelDelta;
		if (animation) return;
		if (delta > 0 || e.originalEvent.detail < 0) {
			navigateUp();
		} else {
			navigateDown();
		}
	});

	$(document).on("click", ".pages__item:not(.page__item-active)", function() {
		if (animation) return;
		let target = +$(this).attr('data-target');
		pagination(curSlide, target);
		curSlide = target;
	});
});
