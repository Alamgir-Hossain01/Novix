
(function ($) {
    "use strict";


    // data bg img 
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
    })

    // data border color
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"))
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data bg color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    // data circle bar
    $("[data-circle-bar]").each(function () {
        $(this).css("background", $(this).attr("data-circle-bar"))
    })

   //  magnificPopup
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

    //  magnificPopup
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

	// 	PreLoader Js
	$(window).on('load', function () {
		$('#preloader').fadeOut(500);
	});

    
    // Sticky Header Js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	if ($('.it-header-height').length > 0) {
		var headerHeight = document.querySelector(".it-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;
		$(".it-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
		$(".it-header-height .header-sticky").each(function () {
			$(this).css({
				'height': inherit,
			});
		});
	}

    // itreviwe slider

	const sliderswiper = new Swiper('.itreviwe-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		autoplay: {
			delay: 4500,
		},
		pagination: {
			el: ".it-slider-dots",
			clickable: true,
		},

	});
	
  // it-text-slider
    var swiper = new Swiper('.itbrand-slider-active', {
        slidesPerView: '6',
        spaceBetween:40,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
        delay: 1,
        disableOnInteraction: true,
        },
		breakpoints: {
      350: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
    },
    });


  // it-text-slider
    var swiper = new Swiper('.it-hero-slide', {
   		slidesPerView: 1,
		loop: true,
		autoplay: true,
		autoplay: {
			delay: 4500,
		},

	});

	// Sidebar Js
	$(".it-menu-bar").on("click", function () {
		$(".itoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".itoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".itoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
		$(".search-popup").removeClass("search-active");
	});

	// offcanvas
	$('.it-header-toggle').on('click', function () {
		$('.it-offcanvas').addClass('it-offcanvas-open');
		$('.it-offcanvas-overly').addClass('it-offcanvas-overly-open');
	});

	$('.it-offcanvas-close-toggle, .it-offcanvas-overly').on(
		'click',
		function () {
		$('.it-offcanvas').removeClass('it-offcanvas-open');
		$('.it-offcanvas-overly').removeClass('it-offcanvas-overly-open');
		}
	);

 	// mobile menu
	if ($('.it-menu-content').length && $('.it-menu-mobile').length) {
		let navContent = document.querySelector(".it-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".it-menu-mobile");
		mobileNavContainer.innerHTML = navContent;

		let arrow = $(".it-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";
			self.append(function () {
				return arrowBtn;
			});

			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("dropdown-opened");
				self.parent().toggleClass("expanded");
				self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
				self.parent().parent().children(".it-submenu").slideToggle();
			});

		});
	}

	// before-after

	const imgAfter = document.querySelector('.img-wrapper:nth-of-type(2)');
	const line = document.getElementById('line');
	const slider = document.getElementById('slider');

	if (slider && line && imgAfter) {  // check
		slider.addEventListener('input', () => {
			line.style.left = `${slider.value}%`;   
			imgAfter.style.clipPath = `inset(0px 0px 0px ${slider.value}%)`;
		});

		slider.addEventListener('dblclick', () => {
			slider.value = 50;
			line.style.left = '50%';
			imgAfter.style.clipPath = 'inset(0px 0px 0px 50%)';
		});
	}

    // Nice Select Js
	$('select').niceSelect();

	// wow animation
	var wow = new WOW(
		{
		  mobile: true,
		}
	  );
	  wow.init();
	var windowOn = $(window);


	// ScrollSmoother
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
	if ($('#smooth-wrapper').length && $('#smooth-content').length) {
		gsap.config({
			nullTargetWarn: false,
		});
		let smoother = ScrollSmoother.create({
			smooth: 1.35,
			effects: true,
			smoothTouch: 1,
			normalizeScroll: false,
			ignoreMobileResize: true,
	        ignore: "header, .site-header"

		});
	}

	// split text animation
	if ($('.it-split-text').length > 0) {
		var st = $(".it-split-text");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
			el.split = new SplitText(el, {
				type: "lines,words,chars",
				linesClass: "it-split-line"
			});
			gsap.set(el, { perspective: 400 });
	
			if( $(el).hasClass('it-split-in-right') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					x: "50",
					ease: "Back.easeOut",
				});
			}
			if( $(el).hasClass('it-split-in-left') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					x: "-50",
					ease: "circ.out",
				});
			}
			if( $(el).hasClass('it-split-in-up') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					y: "80",
					ease: "circ.out",
				});
			}
			if( $(el).hasClass('it-split-in-down') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					y: "-80",
					ease: "circ.out",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				scale: 1,
				opacity: 1,
				duration: 0.4,
				stagger: 0.02,
			});
		});	
	}

	// IT Fade Animation 
	let fadeArray_items = document.querySelectorAll(".it-fade-anim");
	if (fadeArray_items.length > 0) {
		const fadeArray = gsap.utils.toArray(".it-fade-anim")
		fadeArray.forEach((item, i) => {

			var fade_direction = "bottom"
			var onscroll_value = 1
			var duration_value = 1.15
			var fade_offset = 50
			var delay_value = 0.15
			var ease_value = "power2.out"

			if (item.getAttribute("data-fade-offset")) {
				fade_offset = item.getAttribute("data-fade-offset");
			}
			if (item.getAttribute("data-duration")) {
				duration_value = item.getAttribute("data-duration");
			}

			if (item.getAttribute("data-fade-from")) {
				fade_direction = item.getAttribute("data-fade-from");
			}
			if (item.getAttribute("data-on-scroll")) {
				onscroll_value = item.getAttribute("data-on-scroll");
			}
			if (item.getAttribute("data-delay")) {
				delay_value = item.getAttribute("data-delay");
			}
			if (item.getAttribute("data-ease")) {
				ease_value = item.getAttribute("data-ease");
			}

			let animation_settings = {
				opacity: 0,
				ease: ease_value,
				duration: duration_value,
				delay: delay_value,
			}

			if (fade_direction == "top") {
				animation_settings['y'] = -fade_offset
			}
			if (fade_direction == "left") {
				animation_settings['x'] = -fade_offset;
			}

			if (fade_direction == "bottom") {
				animation_settings['y'] = fade_offset;
			}

			if (fade_direction == "right") {
				animation_settings['x'] = fade_offset;
			}

			if (onscroll_value == 1) {
				animation_settings['scrollTrigger'] = {
					trigger: item,
					start: 'top 85%',
				}
			}
			gsap.from(item, animation_settings);
		})
	}

	// scroll-to-target 
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 500) {
			$('.scroll-to-target').removeClass('open');

		} else {
			$('.scroll-to-target').addClass('open');
		}
	});

	//  Scroll Up Js
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}
	
	//One Page navigation
	function scrollNav() {
		$('.it-onepage-menu li a').on('click', function () {
			$(".it-onepage-menu li a").removeClass("active");
			$(this).addClass("active");

			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - 80
			}, 300);
			return false;
		});
	}
	scrollNav();



})(jQuery);