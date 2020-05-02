"use strict"

// Проигрывание аудио

let playAudio = function(audio){

	let track = audio.querySelector('.elem-audio');
	let controlBtn = audio.querySelector('.control-btn');
	
	audio.addEventListener('click', function(){
		if(audio.classList.contains('active') && !(controlBtn.classList.contains('play'))){
				track.pause();
				
				controlBtn.classList.add('play');
				// audio.classList.remove('active');
		}else if((!audio.classList.contains('active')) || (controlBtn.classList.contains('play') && audio.classList.contains('active')) ){
			track.play();
			audio.classList.add('active');
			controlBtn.classList.remove('play');
			// let progressInterval = setInterval(function(){
			track.addEventListener('timeupdate', function(){
				let totalTrackTime = track.duration;
				let currentTrackTime = track.currentTime;
				let progressPercentage = currentTrackTime / totalTrackTime * 100 + "%";
				let elemProgressbar = audio.querySelector('.track-elem');
				elemProgressbar.style.width = progressPercentage;
				let currentTrackTimeSeconds = Math.round(currentTrackTime);
	

				function msToTime(duration) {
					let seconds = parseInt(duration % 60);
					let minutes = parseInt(duration / 60 % 60);
					minutes = minutes < 10 ? "0" + minutes : minutes;
					seconds = seconds < 10 ? "0" + seconds : seconds;
					return minutes + ":" + seconds
				}
	
				let textTime = msToTime(currentTrackTimeSeconds);
				let elementTime = audio.querySelector('.current');
				elementTime.innerHTML = textTime;
				
				if (currentTrackTime >= totalTrackTime) {
					track.pause();
				
				}
			});
			// }, 1e3); 
			track.addEventListener('ended', function(){
				// controlBtn.classList.add('play');
				// controlBtn.classList.remove('')
				audio.classList.remove('active');
			});
		};
		
	});

	// let buttonPortfolioItem = audioWrap.querySelector('.portfolio__music-btn-open');
	// let titlePortfolioItem = audioWrap.querySelector('.portfolio__music-wrap');

	document.addEventListener('click', function(event){
		let target = event.target;
		let itsShowingElement = target == audio   || audio.contains(target);
		let itsBtnForClick = target == audio;
		let itsShowingElementActive = audio.classList.contains('active');

		if (!itsShowingElement && !itsBtnForClick  && itsShowingElementActive ) {
			track.pause();
			track.currentTime = 0;
			audio.classList.remove('active');
			controlBtn.classList.remove('play');
		}
	});


};

// Функция для открытия аудио

function hideandShowElementToClickButtonForMusic(container, elements, showMore, showMoreTitle, closeAll, maxItemsMobile, maxItemsDesktop, quantityElement,  hiddenClass){

	let parent = container;
	let items  = parent.querySelectorAll('.' + elements);
	let	loadMoreBtn = parent.querySelector('.' + showMore);
	let loadMoreTitle = parent.querySelector('.' + showMoreTitle);
	let	closeBtn = parent.querySelector('.' + closeAll);
	let maxItems = maxItemsMobile;
	 
	
			if (window.screen.width >= 1024 ){
				maxItems = maxItemsDesktop;
			}

		function hideElement(item, idx){
			if (idx > maxItems - 1) {
				item.classList.add(hiddenClass);
			}
		}

		function showElement(item, idx){
			if (idx < maxItems - quantityElement ) {
				item.classList.remove(hiddenClass);
			}
			if ( parent.querySelectorAll('.' + hiddenClass).length === 0) {
				loadMoreBtn.style.display = "none";
				closeBtn.style.display ="inline-block";
      }
		}

		function hideElementAndShowBtnClose(item, idx){
			if (idx > maxItems - 1) {
				item.classList.add(hiddenClass);			
    	}
	
			loadMoreBtn.style.display = "inline-block";
			closeBtn.style.display ="none";

		}
		[].forEach.call(items, hideElement);


		loadMoreBtn.addEventListener('click', function(){	
			[].forEach.call(parent.querySelectorAll('.' + hiddenClass), showElement);
		
		});



		closeBtn.addEventListener('click', function(){
			[].forEach.call(items, hideElementAndShowBtnClose)
		});

}


// Функции для анимации проектов

function searchProjectAnimatedAndRemove(){
	let projectItem = document.querySelectorAll('.projects__item');

	for(let i = 0; i< projectItem.length; i++){
		let animateLow = projectItem[i].querySelectorAll('.lower-animate');
		let animateUp = projectItem[i].querySelectorAll('.upper-animate');
		let animateLine = projectItem[i].querySelectorAll('.animate--line-psevdo');
			
		if(projectItem[i].classList.contains('projects__hidden')){
			for(let i = 0; i< animateLine.length; i++){
				animateLine[i].classList.remove('animate--line-psevdo-width');
			}

			for(let i = 0; i< animateLow.length; i++){
				animateLow[i].classList.remove('lower-animate-show');
			}
			for(let i = 0; i< animateUp.length; i++){
				animateUp[i].classList.remove('upper-animate-show');
			}
		}

	}
}

function searchProjectAnimatedAndAdd(){
	let projectItem = document.querySelectorAll('.projects__item');

	for(let i = 0; i< projectItem.length; i++){
		let animateLow = projectItem[i].querySelectorAll('.lower-animate');
		let animateUp = projectItem[i].querySelectorAll('.upper-animate');
		let animateLine = projectItem[i].querySelectorAll('.animate--line-psevdo');
			
		// if(projectItem[i].classList.contains('projects__hidden')){
			for(let i = 0; i< animateLine.length; i++){
				animateLine[i].classList.add('animate--line-psevdo-width');
			}

			for(let i = 0; i< animateLow.length; i++){
				animateLow[i].classList.add('lower-animate-show');
			}
			for(let i = 0; i< animateUp.length; i++){
				animateUp[i].classList.add('upper-animate-show');
			}
		// }

	}
}

// Функция для открытия проектов

function hideandShowElementToClickButtonForProject(container, elements, showMore, closeAll, maxItemsMobile, maxItemsDesktop, quantityElement,  hiddenClass){

	let parent = container;
	let items  = parent.querySelectorAll('.' + elements);
	let	loadMoreBtn = parent.querySelector('.' + showMore);
	let	closeBtn = parent.querySelector('.' + closeAll);
	let maxItems = maxItemsMobile;
	    // hiddenClass = "projects__hidden";
	
			if (window.screen.width >= 1024 ){
				maxItems = maxItemsDesktop;
			}

		function hideElement(item, idx){
			if (idx > maxItems - 1) {
				item.classList.add(hiddenClass);
				
				searchProjectAnimatedAndRemove();
			}
		}

		function showElement(item, idx){
			if (idx < maxItems - quantityElement ) {
				item.classList.remove(hiddenClass);

				searchProjectAnimatedAndAdd();
			
			}
			if ( parent.querySelectorAll('.' + hiddenClass).length === 0) {
				loadMoreBtn.style.display = "none";
				closeBtn.style.display ="inline-block";
      }
		}

		function hideElementAndShowBtnClose(item, idx){
			if (idx > maxItems - 1) {
				
			
				item.classList.add(hiddenClass);

				searchProjectAnimatedAndRemove();
			
    	}
	
			loadMoreBtn.style.display = "inline-block";
			closeBtn.style.display ="none";

		}

		[].forEach.call(items, hideElement);

		loadMoreBtn.addEventListener('click', function(){	
			[].forEach.call(parent.querySelectorAll('.' + hiddenClass), showElement);
		
		});

		closeBtn.addEventListener('click', function(){
			[].forEach.call(items, hideElementAndShowBtnClose)
		});

}



// Аудио Плей

let audio = document.querySelectorAll('.audio');
// let audiosPortfolioItem = document.querySelectorAll('.portfolio__music-item');


	for(let i = 0; i<audio.length; i++){
		playAudio(audio[i]);

	
	}


// Cкрытие или открытие проектов
let projectWrap = document.querySelector('.projects');

hideandShowElementToClickButtonForProject( projectWrap, 'projects__item', 'projects__more-btn', 'projects__close-btn', 4, 6, 2, 'projects__hidden' );


// Cкрытие или открытие музыки
let audioWrap = document.querySelectorAll('.portfolio__music-item');

for(let i = 0; i<audioWrap.length; i++){
	hideandShowElementToClickButtonForMusic(audioWrap[i], 'audio', 'portfolio__music-btn', 'portfolio__music-wrap', 'portfolio__music-btn--close', 2, 2, 0, 'audio__hidden')
}




// Функция получения координат элемента

function getCoords(elem) {

	let box = elem.getBoundingClientRect();

	return {
		top: Math.round(box.top + pageYOffset),
		bottom: Math.round(box.bottom + pageYOffset)
	};
}


// Меню появление и изменение цвета
let containerBlack = document.querySelector('.about');
let navBlock = document.querySelector('.navigation');
let contactBlock = document.querySelector('.contact');
let contactItem = document.querySelector('.navigation__item--contact');
let portfolioBlock = document.querySelector('.portfolio');



document.addEventListener("DOMContentLoaded", (e) => {

e.target.addEventListener("scroll", () => {

	let coordYtoNav = getCoords(navBlock).top;
	let coordYtoContainer = getCoords(containerBlack).top;
	let coordYtoContact = getCoords(contactBlock).top;
	let coordYtoPortfolio = getCoords(portfolioBlock).top;
	let contactYItem = getCoords(contactItem).top;

	let navItem = document.querySelectorAll('.navigation__item:not(:last-child)');
	if(coordYtoNav >= coordYtoContainer ){

			for(let i=0; i<navItem.length; i++){
				navItem[i].style.backgroundColor = '#fefefe';
				navItem[i].style.color = '#191919';
			}
	}else if(coordYtoNav <= coordYtoContainer ){
		for(let i=0; i<navItem.length; i++){
			navItem[i].style.backgroundColor = '#191919';
			navItem[i].style.color = '#fefefe';
		}
	}

	let contactItemLink = document.querySelector('.navigation__link--contact');
	let toTopItem = document.querySelector('.navigation__link--top');

	if( coordYtoNav >= coordYtoContainer ){
		contactItemLink.style.display ="none";
		toTopItem.style.display= "block";
	}else if(coordYtoNav <= coordYtoContainer){
		contactItemLink.style.display ="block";
		toTopItem.style.display = "none"
	

	}

	if(contactYItem<coordYtoPortfolio || contactYItem>=coordYtoContact){
		contactItem.classList.add('navigation__item--show');
		contactItem.classList.remove('navigation__item--hide');
	}else if(contactYItem>coordYtoPortfolio || contactYItem<=coordYtoContact){
		contactItem.classList.remove('navigation__item--show');
		contactItem.classList.add('navigation__item--hide');
	}
 
}, false);
}, false);


// Элемент стал видимый

function visible(target, newClass) {
	// Все позиции элемента

	let targetPosition = {
		top: window.pageYOffset + target.getBoundingClientRect().top,
		left: window.pageXOffset + target.getBoundingClientRect().left,
		right: window.pageXOffset + target.getBoundingClientRect().right,
		bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	},
	// Получаем позиции окна
	windowPosition = {
		top: window.pageYOffset,
		left: window.pageXOffset,
		right: window.pageXOffset + document.documentElement.clientWidth,
		bottom: window.pageYOffset + document.documentElement.clientHeight
	};

	if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
		targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
		targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
		targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
			// Если элемент полностью видно, то запускаем следующий код
			 target.classList.add(newClass);
		} else {
				
		};
};

// Прелоадер



let preloaderLogo = document.querySelector('.preloader__wrap');

let preloaderContainer = document.querySelector('.main__logo--preloader');

let preloaderLogo1 = document.querySelector('.main__logo-img--preloader--3');



function move() {
	var elem = document.querySelector('.preloader__bg--black');

	var width = 0;
	var id = setInterval(frame, 1);
	function frame() {
		if (width == 100) {
			clearInterval(id);
			//  (document.readyState === "loading"){
				// preloaderLogo.classList.add('show__logo');
				// width++;
				// preloaderLogo.style.width = width + '%';
			// }
			
			preloaderLogo1.classList.add('show__logo1');
			preloaderContainer.classList.add('move__logo');
		} else {
			width++; 
			elem.style.width = width + '%'; 
			// if(document.readyState === "loading"){
				preloaderLogo.style.width = width + '%';
			// }
		
		}
	}
}
// document.onreadystatechange = function () {
// 	if(document.readyState === "loading"){
		move();
// 	}
// }



let preloader = document.querySelector('.preloader')
// preloader.style.display = 'none';
let page = document.querySelector('.body');

// console.log(page);
document.onreadystatechange = function () {
	move();
// check the value - if it's 'complete' then everything has loaded
	if (document.readyState === "complete") {
		window.setTimeout(function () {
			// page.style.display = "block";
			page.classList.add('page-scroll');
			
			let pageFlag= page.classList.contains('page-scroll');

			preloader.style.display = 'none';
			
			let animateItemLine = document.querySelectorAll('.animate--line');
			window.addEventListener('scroll', function() {
				if(pageFlag){
					for(let i = 0; i< animateItemLine.length; i++){
						visible (animateItemLine[i], 'animate-line-width');	
					}
					// console.log('hi');
				}
			});

			for(let i = 0; i< animateItemLine.length; i++){
				if(pageFlag){
					visible (animateItemLine[i], 'animate-line-width');	
					// console.log('hi');
				}
			}

			document.addEventListener("DOMContentLoaded", function() {
				if(pageFlag){
					for(let i = 0; i< animateItemLine.length; i++){
						visible (animateItemLine[i], 'animate-line-width');	
					}
				}
			});


			let animateItemPsevdo =  document.querySelectorAll('.animate--line-psevdo');

			window.addEventListener('scroll', function() {
				if(pageFlag){
					for(let i = 0; i< animateItemPsevdo.length; i++){
						visible (animateItemPsevdo[i], 'animate--line-psevdo-width');	
					}
					
				}
			});
			// А также запустим функцию сразу. А то вдруг, элемент изначально видно
				
			for(let i = 0; i< animateItemPsevdo.length; i++){
				if(pageFlag){	
					visible (animateItemPsevdo[i], 'animate--line-psevdo-width');	
					// console.log('hi');
				}
			}

			document.addEventListener("DOMContentLoaded", function() {
				if(pageFlag){
					for(let i = 0; i< animateItemPsevdo.length; i++){
						visible (animateItemPsevdo[i], 'animate--line-psevdo-width');	
					}
				}
			});


			let animateText = document.querySelectorAll('.has-animation');

			window.addEventListener('scroll', function() {
				if(pageFlag){
					for(let i = 0; i< animateText.length; i++){
						visible (animateText[i], 'animate-in');	
					}
				}
			});
			// А также запустим функцию сразу. А то вдруг, элемент изначально видно
				
			for(let i = 0; i< animateText.length; i++){
				if(pageFlag){
					visible (animateText[i], 'animate-in');	
				}
			}
			document.addEventListener("DOMContentLoaded", function() {
				if(pageFlag){
					for(let i = 0; i< animateText.length; i++){
						visible (animateText[i], 'animate-in');	
					}
				}
			});

			let btnsAnimate = document.querySelectorAll('.button-animate');

			window.addEventListener('scroll', function() {
				if(pageFlag){
					for(let i = 0; i< btnsAnimate.length; i++){
						visible (btnsAnimate[i], 'button-show');	
					}
				}
			});
			// А также запустим функцию сразу. А то вдруг, элемент изначально видно
				
			for(let i = 0; i< btnsAnimate.length; i++){
				if(pageFlag){
					visible (btnsAnimate[i], 'button-show');	
				}
			}

			document.addEventListener("DOMContentLoaded", function() {
				if(pageFlag){
					for(let i = 0; i< btnsAnimate.length; i++){
						visible (btnsAnimate[i], 'button-show');	
					}
				}
			});

			let bgBlack = document.querySelector('.bg__black');

			// console.log(aboutBg);
			window.addEventListener('scroll', function() {
				if(pageFlag){
					// for(let i = 0; i< aboutBg.length; i++){
						visible (bgBlack, 'bg__white');	
					// }
				}
			});
			// А также запустим функцию сразу. А то вдруг, элемент изначально видно
				
			// for(let i = 0; i< aboutBg.length; i++){
				if(pageFlag){
					visible (bgBlack, 'bg__white');	
				}
			// }

			document.addEventListener("DOMContentLoaded", function() {
				if(pageFlag){
					// for(let i = 0; i< aboutBg.length; i++){
						visible (bgBlack, 'bg__white');	
					// }
				}
			});

			let upperText = document.querySelectorAll('.upper-animate');

			window.addEventListener('scroll', function() {
				if(pageFlag){
					for(let i = 0; i< upperText.length; i++){
						visible (upperText[i], 'upper-animate-show');	
					}
				}
			});
			// А также запустим функцию сразу. А то вдруг, элемент изначально видно
				
			for(let i = 0; i< upperText.length; i++){
				if(pageFlag){
					visible (upperText[i], 'upper-animate-show');	
				}
			}

			document.addEventListener("DOMContentLoaded", function() {
				if(pageFlag){
					for(let i = 0; i< upperText.length; i++){
						visible (upperText[i], 'upper-animate-show');	
					}
				}
			});

			
			let lowerText = document.querySelectorAll('.lower-animate');

			window.addEventListener('scroll', function() {
				if(pageFlag){
					for(let i = 0; i< lowerText.length; i++){
						visible (lowerText[i], 'lower-animate-show');	
					}
					searchProjectAnimatedAndRemove();
				}
				
			});
			// А также запустим функцию сразу. А то вдруг, элемент изначально видно
				
			for(let i = 0; i< lowerText.length; i++){
				if(pageFlag){
					visible (lowerText[i], 'lower-animate-show');	
				}
			}

			document.addEventListener("DOMContentLoaded", function() {
				if(pageFlag){
					for(let i = 0; i< lowerText.length; i++){
						visible (lowerText[i], 'lower-animate-show');	
					}
				}
			});


			searchProjectAnimatedAndRemove()


		 }, 3200);
		 	
		 }
	

	}

	document.addEventListener('DOMContentLoaded', function(){
		if (window.screen.width <= 1024 ){
			let mobileLogo = document.querySelector('.main__logo--focus');

			let logoTopCoord = getCoords(mobileLogo).top;

			// console.log(logoTopCoord);

			let logoMobilePreloader = document.querySelector('.main__logo--preloader');
			logoMobilePreloader.style.top = logoTopCoord + 'px';
			logoMobilePreloader.style.transform = 'translate(-48%, 0%)';
		}
	})
	

	let contactBtn  = document.querySelector('.contact__btn');
	let contactSend = document.querySelector('.contact__send');
	console.log(contactBtn);

	let inputWrap = document.querySelectorAll('.input__wrap');

contactBtn.addEventListener('click', function(event){
	event.preventDefault();
	contactSend.style.display = "inline-block";
	contactSend.classList.add('animate-in');
	contactBtn.style.transform = 'translateX(-101%)';

	for(let i= 0; i<inputWrap.length; i++){
		inputWrap[i].style.opacity = "0.5"
		inputWrap[i].querySelector('.contact__input ').setAttribute('disabled', true);

	}
	setTimeout(function(){
		// contactSend.style.display = "inline-block";
		contactSend.classList.remove('animate-in');
		
		for(let i= 0; i<inputWrap.length; i++){
			inputWrap[i].style.opacity = "1"
			inputWrap[i].querySelector('.contact__input ').removeAttribute('disabled');
			inputWrap[i].querySelector('.contact__input ').value ="";
		}
		contactSend.style.display ="none"
		contactBtn.style.transform = 'translateX(0%)';
	
		}, 3000);

		
	
})

