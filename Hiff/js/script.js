		   function createInnerSlider(container, nav, prev, next) {



		       var swiperNav = new Swiper(nav, {
		           slidesPerView: 1,
		           spaceBetween: 30,
		           slideToClickedSlide: true,
		           speed: 1500,
		           watchSlidesVisibility: true,
		           watchSlidesProgress: true,
		           freeMode: true,
		           breakpoints: {
		               600: {
		                   slidesPerView: 4,
		                   spaceBetween: 30
		               }
		           }
		       });

		       return new Swiper(container, {
		           slidesPerView: 1,
		           spaceBetween: 10,
		           grabCursor: true,
		           loop: true,

		           speed: 1000,

		           mousewheel: true,
		           thumbs: {
		               swiper: swiperNav
		           },
		           navigation: {
		               nextEl: next,
		               prevEl: prev,
		           },
		           breakpoints: {
		               600: {
		                   slidesPerView: 2,
		                   spaceBetween: 30
		               }
		           }
		       });
		   }


		   function setMainSwiperMouseOver() {
		       swiperMain.detachEvents();
		       swiperMain.mousewheel.disable();
		   }

		   function setMainSwiperMouseOut() {
		       swiperMain.attachEvents();
		       swiperMain.mousewheel.enable();
		   }


		   const enableSwiper = function() {

		       swiperMain = new Swiper('.swiper-container--all', {
		           slidesPerView: 1,
		           spaceBetween: 30,
		           speed: 1500,
		           watchActiveIndex: true,
		           slideToClickedSlide: true,

		           mousewheel: true,
		           keyboard: {
		               enabled: true,
		           },
		       });

		       var linkPortfolio = document.querySelector('.main__link-wrap--portfolio');

		       linkPortfolio.addEventListener('click', function(evt) {
		           evt.preventDefault();
		           swiperMain.slideTo(4);
		       });

		       var linkContact = document.querySelector('.main__link-wrap--contact');

		       linkContact.addEventListener('click', function(evt) {
		           evt.preventDefault();
		           swiperMain.slideTo(5);
		       });
		       // Функция удаления классов для анимации для Свайпера
		       function removeInnerAnimClassesOf(element) {
		           var innerElements = element.querySelectorAll("[data-aos]");

		           for (var i = 0; i < innerElements.length; i++)
		               innerElements[i].classList.remove('aos-init', 'aos-animate');
		       }

		       swiperMain.on('slideNextTransitionStart', function() {

		           for (var i = 1; i <= 5; i++)
		               removeInnerAnimClassesOf(document.querySelector('.slide-' + i));

		       });




		       swiperMain.on('slideNextTransitionEnd', function() {
		           AOS.init({
		               once: true
		           })
		       });

		       for (var i = 0; i < InnerSlider.length; i++) {
		           InnerSlider[i].addEventListener('mouseover', setMainSwiperMouseOver);
		           InnerSlider[i].addEventListener('mouseout', setMainSwiperMouseOut);
		       }

		   };











		   createInnerSlider('.swiper-container--inner1', '.swiper-container--navigation1',
		           '.swiper-button-prev1', '.swiper-button-next1')
		       .on('slideChange', function() {
		           var bloggerThumbs = document.querySelector('.slide-1')
		               .querySelectorAll('.swiper-slide-thumb-active');

		           for (var i = 0; i < bloggerThumbs.length; i++)
		               if (i > 0)
		                   bloggerThumbs[i].classList.remove('swiper-slide-thumb-active');
		       });

		   createInnerSlider('.swiper-container--inner2', '.swiper-container--navigation2',
		           '.swiper-button-prev2', '.swiper-button-next2')
		       .on('slideChange', function() {
		           var bloggerThumbs = document.querySelector('.slide-2')
		               .querySelectorAll('.swiper-slide-thumb-active');

		           for (var i = 0; i < bloggerThumbs.length; i++)
		               if (i > 0)
		                   bloggerThumbs[i].classList.remove('swiper-slide-thumb-active');
		       });

		   var InnerSlider = document.querySelectorAll('.swiper-container--inner');
		   var slides = document.querySelectorAll('.swiper-slide--all');


		   // breakpoint where swiper will be destroyed
		   // and switches to a dual-column layout
		   const breakpoint = window.matchMedia('(min-width:1150px)');
		   // keep track of swiper instances to destroy later
		   let swiperMain;

		   const breakpointChecker = function() {
		       // if larger viewport and multi-row layout needed
		       if (breakpoint.matches === true) {

		           document.querySelector('.swiper-container--all').classList.add('swiper-container');
		           document.querySelector('.swiper-wrapper--all').classList.add('swiper-wrapper');


		           for (var j = 0; j < slides.length; j++) {
		               slides[j].classList.add('swiper-slide');
		           }

		           // fire small viewport version of swiper
		           return enableSwiper();

		           // else if a small viewport and single column layout needed
		       } else if (breakpoint.matches === false) {
		           // clean up old instances and inline styles when available
		           document.querySelector('.swiper-container--all').classList.remove('swiper-container');
		           document.querySelector('.swiper-wrapper--all').classList.remove('swiper-wrapper');


		           for (var j = 0; j < slides.length; j++) {
		               slides[j].classList.remove('swiper-slide');
		           }


		           for (var i = 0; i < InnerSlider.length; i++) {
		               InnerSlider[i].removeEventListener('mouseover', setMainSwiperMouseOver);
		               InnerSlider[i].removeEventListener('mouseout', setMainSwiperMouseOut);
		           }


		           if (swiperMain != null) {
		               swiperMain.destroy(true, true);
		           }

		       }
		   };




		   // keep an eye on viewport size changes
		   breakpoint.addListener(breakpointChecker);
		   // kickstart
		   breakpointChecker();





		   // КНОПКА feedback


		   var feedback = document.querySelectorAll('.feedback');
		   var btnClose = document.querySelectorAll('.feedback__button');




		   var getFeedbackClose = function(btn, feedback) {
		       btn.addEventListener('click', function() {

		           feedback.classList.add("feedback--close");

		       });
		   };

		   for (var p = 0; p < feedback.length; p++) {
		       getFeedbackClose(btnClose[p], feedback[p]);


		   }




		   // Меню
		   var burger = document.querySelectorAll('.header__burger--blogger');

		   var menuOther = document.querySelectorAll('.header__nav-list--popup');

		   var label = document.querySelectorAll('.header__label--blogger');


		   var getShowandCloseMenu = function(burger, menu, label) {
		       burger.addEventListener('click', function() {

		           menu.classList.toggle("header__nav-list--popup-js-show");
		           burger.classList.toggle("header__nav-list--popup-js-show");
		           label.classList.toggle("header__label--blogger-close");

		       });
		   };

		   for (var k = 0; k < burger.length; k++) {
		       getShowandCloseMenu(burger[k], menuOther[k], label[k]);

		   }

		   // Мобильное меню
		   var burgerMobile = document.querySelector('.header__burger--mobile');
		   var menuMobile = document.querySelector('.header__nav-list--mobile');
		   var btnCloseMobile = document.querySelector('.header__btn--mobile');

		   burgerMobile.addEventListener('click', function() {

		       menuMobile.classList.add("header__nav-list--mobile-show");


		   });

		   btnCloseMobile.addEventListener('click', function() {

		       menuMobile.classList.remove("header__nav-list--mobile-show");


		   });